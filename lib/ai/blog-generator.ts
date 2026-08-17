import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  buildBlogPrompt,
  type BlogContentPillar,
  type BlogLanguage,
} from "@/lib/ai/blog-prompt";
import { generateBlogCover } from "@/lib/ai/cover-generator";

export type BlogTargetSite = "jiahuameal" | "yuezicanada" | "both";

export type BlogGenerationStatus =
  | "pending"
  | "queued"
  | "generating-content"
  | "optimizing-content"
  | "generating-cover"
  | "saving"
  | "generated"
  | "failed";

export interface GenerateBlogDraftOptions {
  keyword: string;
  language?: BlogLanguage;
  pillar?: BlogContentPillar;
  targetSite?: BlogTargetSite;
  categorySlug?: string;
  generateCover?: boolean;
}

export interface GeneratedBlogPayload {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

const DEFAULT_MODEL = process.env.AI_MODEL || "grok-4.6";
const DEFAULT_API_URL =
  process.env.AI_API_URL || "https://api.x.ai/v1/chat/completions";

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[\'\"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 160);
}

function fallbackSlug(keyword: string) {
  const normalized = normalizeSlug(keyword);
  return normalized || `ai-blog-${Date.now()}`;
}

function stripCodeFence(raw: string) {
  return raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
}

function toJsonValue(value: unknown) {
  return JSON.parse(JSON.stringify(value)) as Prisma.InputJsonValue;
}

function decodeHtmlEntities(content: string) {
  return content
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");
}

function optimizeParagraphs(content: string) {
  const decoded = decodeHtmlEntities(content);

  return decoded
    .replace(/<p>([\s\S]*?)<\/p>/g, (_, paragraph: string) => {
      const cleaned = paragraph.replace(/\s+/g, " ").trim();

      if (!cleaned) return "";
      if (cleaned.length <= 140) return `<p>${cleaned}</p>`;

      const sentences = cleaned
        .split(/(?<=[。！？.!?])/)
        .map((sentence) => sentence.trim())
        .filter(Boolean);

      if (sentences.length <= 1) {
        const chunks: string[] = [];
        for (let i = 0; i < cleaned.length; i += 120) {
          chunks.push(`<p>${cleaned.slice(i, i + 120)}</p>`);
        }
        return chunks.join("\n\n");
      }

      const chunks: string[] = [];
      let current = "";

      for (const sentence of sentences) {
        if (current && current.length + sentence.length > 140) {
          chunks.push(`<p>${current}</p>`);
          current = sentence;
        } else {
          current += sentence;
        }
      }

      if (current) chunks.push(`<p>${current}</p>`);
      return chunks.join("\n\n");
    })
    .replace(/<\/h2>\s*/g, "</h2>\n\n")
    .replace(/<\/h3>\s*/g, "</h3>\n\n")
    .replace(/<\/ul>\s*/g, "</ul>\n\n")
    .replace(/<p>\s*<\/p>/g, "")
    .trim();
}

function safeJsonParse(raw: string): GeneratedBlogPayload {
  const cleaned = stripCodeFence(raw);
  const parsed = JSON.parse(cleaned) as Partial<GeneratedBlogPayload>;

  if (!parsed.title || !parsed.content) {
    throw new Error("AI response missing required fields: title or content");
  }

  const title = String(parsed.title).trim();
  const content = optimizeParagraphs(String(parsed.content).trim());
  const excerpt = String(parsed.excerpt || "").trim();
  const rawSlug = String(parsed.slug || title).trim();
  const seoTitle = String(parsed.seoTitle || title).trim();
  const seoDescription = String(parsed.seoDescription || excerpt).trim();
  const keywords = Array.isArray(parsed.keywords)
    ? parsed.keywords.map((item) => String(item).trim()).filter(Boolean)
    : [];

  return {
    title,
    slug: normalizeSlug(rawSlug) || fallbackSlug(title),
    excerpt,
    content,
    seoTitle,
    seoDescription,
    keywords,
  };
}

async function callTextModel(prompt: string) {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) throw new Error("AI_API_KEY is not set");

  const response = await fetch(DEFAULT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content:
            "You generate clean, valid JSON only. Do not use markdown code fences.",
        },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI request failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("AI response did not include message content");
  return String(content);
}

function getDefaultCategorySlug(pillar?: BlogContentPillar) {
  switch (pillar) {
    case "recovery":
      return "postpartum-recovery";
    case "nutrition":
      return "postpartum-meal";
    case "breastfeeding":
      return "breastfeeding-nutrition";
    case "babycare":
      return "baby-care";
    case "traditions":
      return "postpartum-recovery";
    case "stories":
      return "customer-stories";
    default:
      return "postpartum-recovery";
  }
}

async function findCategoryId(categorySlug?: string, pillar?: BlogContentPillar) {
  const slug = categorySlug || getDefaultCategorySlug(pillar);
  if (!slug) return null;

  const category = await prisma.blogCategory.findUnique({
    where: { slug },
    select: { id: true },
  });

  return category?.id ?? null;
}

async function ensureUniqueSlug(baseSlug: string) {
  let slug = baseSlug;
  let counter = 2;

  while (true) {
    const existing = await prisma.blogPost.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!existing) return slug;
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

async function updateQueueStatus(
  queueId: number,
  status: BlogGenerationStatus,
  payload?: unknown
) {
  await prisma.blogGenerationQueue.update({
    where: { id: queueId },
    data: {
      status,
      ...(payload ? { payload: toJsonValue(payload) } : {}),
    },
  });
}

export async function createBlogGenerationQueueItem(
  options: GenerateBlogDraftOptions
) {
  return prisma.blogGenerationQueue.create({
    data: {
      keyword: options.keyword,
      language: options.language || "zh",
      status: "queued",
      payload: toJsonValue({
        pillar: options.pillar || null,
        targetSite: options.targetSite || "both",
        categorySlug: options.categorySlug || null,
        generateCover: options.generateCover ?? true,
      }),
    },
  });
}

export async function processBlogGenerationQueue(
  queueId: number,
  options: GenerateBlogDraftOptions
) {
  const language = options.language || "zh";
  const targetSite = options.targetSite || "both";
  const shouldGenerateCover = options.generateCover ?? true;

  try {
    await updateQueueStatus(queueId, "generating-content", {
      pillar: options.pillar || null,
      targetSite,
      categorySlug: options.categorySlug || null,
      generateCover: shouldGenerateCover,
    });

    const prompt = buildBlogPrompt({
      keyword: options.keyword,
      language,
      pillar: options.pillar,
      targetSite,
    });

    const raw = await callTextModel(prompt);

    await updateQueueStatus(queueId, "optimizing-content", {
      pillar: options.pillar || null,
      targetSite,
      categorySlug: options.categorySlug || null,
      generateCover: shouldGenerateCover,
    });

    const generated = safeJsonParse(raw);
    const slug = await ensureUniqueSlug(
      generated.slug || fallbackSlug(options.keyword)
    );
    const categoryId = await findCategoryId(options.categorySlug, options.pillar);

    let coverImage: string | null = null;
    let coverPayload: Record<string, unknown> | null = null;

    if (shouldGenerateCover) {
      await updateQueueStatus(queueId, "generating-cover", {
        pillar: options.pillar || null,
        targetSite,
        categorySlug: options.categorySlug || null,
        generateCover: shouldGenerateCover,
        title: generated.title,
        slug,
      });

      try {
        const cover = await generateBlogCover({
          title: generated.title,
          pillar: options.pillar,
        });

        coverImage = cover.imageUrl;
        coverPayload = {
          imageUrl: cover.imageUrl,
          prompt: cover.prompt,
          revisedPrompt: cover.revisedPrompt || null,
          mimeType: cover.mimeType || null,
        };
      } catch (coverError) {
        coverPayload = {
          imageUrl: null,
          error:
            coverError instanceof Error
              ? coverError.message
              : "Unknown error while generating cover image",
        };
      }
    }

    await updateQueueStatus(queueId, "saving", {
      pillar: options.pillar || null,
      targetSite,
      categorySlug: options.categorySlug || null,
      generateCover: shouldGenerateCover,
      title: generated.title,
      slug,
      cover: coverPayload,
    });

    const blogPost = await prisma.blogPost.create({
      data: {
        title: generated.title,
        slug,
        excerpt: generated.excerpt || null,
        content: generated.content,
        coverImage,
        status: "draft",
        site: targetSite,
        seoTitle: generated.seoTitle || generated.title,
        seoDescription: generated.seoDescription || generated.excerpt || null,
        seoKeywords: generated.keywords.join(", ") || null,
        isFeatured: false,
        publishedAt: null,
        categoryId,
      },
    });

    await prisma.blogGenerationQueue.update({
      where: { id: queueId },
      data: {
        status: "generated",
        title: generated.title,
        slug,
        payload: toJsonValue({
          pillar: options.pillar || null,
          targetSite,
          categorySlug: options.categorySlug || null,
          generateCover: shouldGenerateCover,
          blogPostId: blogPost.id,
          cover: coverPayload,
          generated,
        }),
        generatedAt: new Date(),
      },
    });

    return {
      queueId,
      blogPost,
      generated,
      cover: coverPayload,
    };
  } catch (error) {
    await prisma.blogGenerationQueue.update({
      where: { id: queueId },
      data: {
        status: "failed",
        payload: toJsonValue({
          pillar: options.pillar || null,
          targetSite,
          categorySlug: options.categorySlug || null,
          generateCover: shouldGenerateCover,
          error:
            error instanceof Error
              ? error.message
              : "Unknown error while generating blog draft",
        }),
      },
    });

    throw error;
  }
}

export async function generateBlogDraftFromKeyword(
  options: GenerateBlogDraftOptions
) {
  const queue = await createBlogGenerationQueueItem(options);
  return processBlogGenerationQueue(queue.id, options);
}

export async function generateManyBlogDrafts(items: GenerateBlogDraftOptions[]) {
  const results: Awaited<ReturnType<typeof generateBlogDraftFromKeyword>>[] = [];

  for (const item of items) {
    const result = await generateBlogDraftFromKeyword(item);
    results.push(result);
  }

  return results;
}
