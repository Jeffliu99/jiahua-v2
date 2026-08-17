import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";

export interface GenerateCoverOptions {
  title: string;
  pillar?: string;
}

export interface CoverResult {
  imageUrl: string;
  prompt: string;
  revisedPrompt?: string;
  mimeType?: string;
}

const DEFAULT_IMAGE_API_URL =
  process.env.AI_IMAGE_API_URL || "https://api.x.ai/v1/images/generations";

const DEFAULT_IMAGE_MODEL =
  process.env.AI_IMAGE_MODEL || "grok-imagine-image-2.0";

function buildCoverPrompt(title: string, pillar?: string) {
  const baseStyle = `
Professional maternity healthcare blog cover image,
premium editorial photography style,
soft warm natural lighting,
clean modern composition,
photorealistic,
high quality,
16:9 landscape composition,
suitable for website blog hero image,
Canadian Chinese family lifestyle,
luxury postpartum care aesthetic,
soft green and warm gold brand tone,
no text, no words, no logo, no watermark, no empty space.
`;

  switch (pillar) {
    case "nutrition":
      return `${baseStyle}
A nourishing postpartum meal scene with warm soup, balanced ingredients, modern kitchen setting, calm premium healthcare feel.
Article theme: ${title}`;

    case "breastfeeding":
              return `
            Professional healthcare blog cover,
            nutrition consultation,
            healthy meal planning,
            modern wellness lifestyle,
            clean bright kitchen,
            educational health article,
            photorealistic,
            premium editorial style,
            16:9 aspect ratio,
            no people,
            no baby,
            no breastfeeding scene,
            no text,
            no watermark.
            Article theme: ${title}
            `;

    case "babycare":
      return `${baseStyle}
A clean bright nursery scene with newborn care essentials, soft blanket, calm home environment, premium parenting guide style.
Article theme: ${title}`;

    case "traditions":
      return `${baseStyle}
A modern evidence-informed postpartum recovery scene, warm bathroom or home care setting, traditional postpartum topic interpreted scientifically.
Article theme: ${title}`;

    case "stories":
      return `${baseStyle}
A realistic postpartum recovery story scene with home support, warm family lifestyle details, natural premium editorial look.
Article theme: ${title}`;

    default:
      return `${baseStyle}
A modern postpartum recovery scene for a new mother in Canada, calm home environment, health and wellness editorial style.
Article theme: ${title}`;
  }
}

function normalizeFileName(input: string) {
  const normalized = input
    .toLowerCase()
    .trim()
    .replace(/[\'\"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

  return normalized || `blog-cover-${Date.now()}`;
}

function getExtensionFromMimeType(mimeType?: string) {
  if (mimeType === "image/png") return ".png";
  if (mimeType === "image/webp") return ".webp";
  if (mimeType === "image/jpeg") return ".jpg";
  return ".jpg";
}

async function downloadImageToBuffer(imageUrl: string) {
  const response = await fetch(imageUrl);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to download generated cover image: ${response.status} ${errorText}`
    );
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function generateBlogCover({
  title,
  pillar,
}: GenerateCoverOptions): Promise<CoverResult> {
  const apiKey = process.env.AI_IMAGE_API_KEY || process.env.AI_API_KEY;

  if (!apiKey) {
    throw new Error("AI_IMAGE_API_KEY or AI_API_KEY is not set");
  }

  const prompt = buildCoverPrompt(title, pillar);

  const response = await fetch(DEFAULT_IMAGE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_IMAGE_MODEL,
      prompt,
      n: 1,
      response_format: "url",
      aspect_ratio: "16:9",
      resolution: "1k",
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Grok image generation failed: ${response.status} ${errorText}`
    );
  }

  const data = await response.json();
  const image = data?.data?.[0];
  const temporaryImageUrl = image?.url;

  if (!temporaryImageUrl) {
    throw new Error("Grok image response did not include an image URL");
  }

  const mimeType = image?.mime_type as string | undefined;
  const extension = getExtensionFromMimeType(mimeType);
  const imageBuffer = await downloadImageToBuffer(String(temporaryImageUrl));

  const fileName = `${normalizeFileName(title)}-${randomUUID()}${extension}`;
  const relativePath = `/images/blog/${fileName}`;
  const outputPath = path.join(process.cwd(), "public", relativePath);

  await fs.mkdir(path.dirname(outputPath), {
    recursive: true,
  });

  await fs.writeFile(outputPath, imageBuffer);

  return {
    imageUrl: relativePath,
    prompt,
    revisedPrompt: image?.revised_prompt || undefined,
    mimeType,
  };
}
