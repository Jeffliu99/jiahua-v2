import { NextRequest, NextResponse } from "next/server";
import {
  createBlogGenerationQueueItem,
  processBlogGenerationQueue,
  type GenerateBlogDraftOptions,
} from "@/lib/ai/blog-generator";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as GenerateBlogDraftOptions;

  if (!body.keyword?.trim()) {
    return NextResponse.json(
      { error: "Missing keyword" },
      { status: 400 }
    );
  }

  const options: GenerateBlogDraftOptions = {
    keyword: body.keyword.trim(),
    language: body.language || "zh",
    pillar: body.pillar || "recovery",
    targetSite: body.targetSite || "jiahuameal",
    categorySlug: body.categorySlug,
    generateCover: body.generateCover ?? true,
  };

  const queue = await createBlogGenerationQueueItem(options);

  void processBlogGenerationQueue(queue.id, options).catch((error) => {
    console.error("Background blog generation failed", error);
  });

  return NextResponse.json({
    queueId: queue.id,
    status: queue.status,
  });
}
