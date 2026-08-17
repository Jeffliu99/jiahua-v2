import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  buildBlogPrompt,
  type BlogContentPillar,
  type BlogLanguage,
} from "@/lib/ai/blog-prompt";

export type BlogTargetSite = "jiahuameal" | "yuezicanada" | "both";

export type BlogGenerationStatus =
  | "pending"
  | "generating"
  | "generated"
  | "failed";

export interface GenerateBlogDraftOptions {
  keyword: string;
  language?: BlogLanguage;
  pillar?: BlogContentPillar;
  targetSite?: BlogTargetSite;
  categorySlug?: string;
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

const DEFAULT_MODEL = process.env.AI_MODEL || "gpt-4o-mini";
const DEFAULT_API_URL =
  process.env.AI_API_URL || "https://api.openai.com/v1/chat/completions";

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

function safeJsonParse(raw: string): GeneratedBlogPayload {
  const cleaned = stripCodeFence(raw);
  const parsed = JSON.parse(cleaned) as Partial<GeneratedBlogPayload>;

  if (!parsed.title || !parsed.content) {
    throw new Error("AI response missing required fields: title or content");
  }

  const title = String(parsed.title).trim();
  const content = String(parsed.content).trim();
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

  if (!apiKey) {
    throw new Error("AI_API_KEY is not set");
  }

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
        {
          role: "user",
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`AI request failed: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI response did not include message content");
  }

  return String(content);
}

async function findCategoryId(categorySlug?: string, pillar?: BlogContentPillar) {
  const slug = categorySlug || getDefaultCategorySlug(pillar);

  if (!slug) {
    return null;
  }

  const category = await prisma.blogCategory.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
    },
  });

  return category?.id ?? null;
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

async function ensureUniqueSlug(baseSlug: string) {
  let slug = baseSlug;
  let counter = 2;

  while (true) {
    const existing = await prisma.blogPost.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });

    if (!existing) {
      return slug;
    }

    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }
}

export async function createBlogGenerationQueueItem(
  options: GenerateBlogDraftOptions
) {
  return prisma.blogGenerationQueue.create({
    data: {
      keyword: options.keyword,
      language: options.language || "zh",
      status: "pending",
      payload: {
        pillar: options.pillar || null,
        targetSite: options.targetSite || "both",
        categorySlug: options.categorySlug || null,
      } as Prisma.InputJsonValue,
    },
  });
}
export async function generateBlogDraftFromKeyword(
  options: GenerateBlogDraftOptions
) {
  const language = options.language || "zh";
  const targetSite = options.targetSite || "both";

  const queue = await prisma.blogGenerationQueue.create({
    data: {
      keyword: options.keyword,
      language,
      status: "generating",
      payload: {
        pillar: options.pillar || null,
        targetSite,
        categorySlug: options.categorySlug || null,
      },
    },
  });

  try {
    const prompt = buildBlogPrompt({
      keyword: options.keyword,
      language,
      pillar: options.pillar,
      targetSite,
    });

    const raw = await callTextModel(prompt);
    const generated = safeJsonParse(raw);
    const slug = await ensureUniqueSlug(generated.slug || fallbackSlug(options.keyword));
    const categoryId = await findCategoryId(options.categorySlug, options.pillar);

    const blogPost = await prisma.blogPost.create({
      data: {
        title: generated.title,
        slug,
        excerpt: generated.excerpt || null,
        content: generated.content,
        coverImage: null,
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
      where: {
        id: queue.id,
      },
      data: {
        status: "generated",
        title: generated.title,
        slug,
        payload: JSON.parse(
                JSON.stringify({
                  pillar: options.pillar || null,
                  targetSite,
                  categorySlug: options.categorySlug || null,
                  blogPostId: blogPost.id,
                  generated,
                })
              ) as Prisma.InputJsonValue,
        generatedAt: new Date(),
      },
    });

    return {
      queueId: queue.id,
      blogPost,
      generated,
    };
  } catch (error) {
    await prisma.blogGenerationQueue.update({
      where: {
        id: queue.id,
      },
      data: {
        status: "failed",
        payload: {
          pillar: options.pillar || null,
          targetSite,
          categorySlug: options.categorySlug || null,
          error:
            error instanceof Error
              ? error.message
              : "Unknown error while generating blog draft",
        },
      },
    });

    throw error;
  }
}

export async function generateManyBlogDrafts(
  items: GenerateBlogDraftOptions[]
) {
  const results: Awaited<
    ReturnType<typeof generateBlogDraftFromKeyword>
  >[] = [];

  for (const item of items) {
    const result = await generateBlogDraftFromKeyword(item);
    results.push(result);
  }

  return results;
}
