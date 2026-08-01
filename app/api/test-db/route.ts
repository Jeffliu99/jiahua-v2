import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categoryCount = await prisma.blogCategory.count();
    const postCount = await prisma.blogPost.count();

    return Response.json({
      ok: true,
      categoryCount,
      postCount,
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}