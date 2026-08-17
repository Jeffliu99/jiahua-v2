import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function getProgress(status: string) {
  switch (status) {
    case "queued":
    case "pending":
      return 10;
    case "generating-content":
    case "generating":
      return 35;
    case "optimizing-content":
      return 55;
    case "generating-cover":
      return 75;
    case "saving":
      return 90;
    case "generated":
      return 100;
    case "failed":
      return 100;
    default:
      return 5;
  }
}

function getMessage(status: string) {
  switch (status) {
    case "queued":
    case "pending":
      return "任务已创建";
    case "generating-content":
    case "generating":
      return "AI 正在生成文章";
    case "optimizing-content":
      return "正在优化文章段落";
    case "generating-cover":
      return "正在生成封面图片";
    case "saving":
      return "正在保存到数据库";
    case "generated":
      return "生成完成";
    case "failed":
      return "生成失败";
    default:
      return "准备中";
  }
}

export async function GET(request: NextRequest) {
  const id = Number(request.nextUrl.searchParams.get("id"));

  if (!id) {
    return NextResponse.json({ error: "Missing queue id" }, { status: 400 });
  }

  const queue = await prisma.blogGenerationQueue.findUnique({
    where: { id },
  });

  if (!queue) {
    return NextResponse.json({ error: "Queue not found" }, { status: 404 });
  }

  let blogPostId: number | null = null;
  if (
    typeof queue.payload === "object" &&
    queue.payload !== null &&
    !Array.isArray(queue.payload) &&
    "blogPostId" in queue.payload
  ) {
    const value = queue.payload.blogPostId;
    if (typeof value === "number") blogPostId = value;
  }

  return NextResponse.json({
    id: queue.id,
    status: queue.status,
    progress: getProgress(queue.status),
    message: getMessage(queue.status),
    title: queue.title,
    slug: queue.slug,
    generatedAt: queue.generatedAt,
    blogPostId,
  });
}
