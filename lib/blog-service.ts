import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export type BlogSite = "jiahuameal" | "yuezicanada" | "all";

export async function getCurrentBlogSite(): Promise<BlogSite> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "";

  if (host.includes("yuezicanada.com")) {
    return "yuezicanada";
  }

  if (host.includes("jiahuameal.com")) {
    return "jiahuameal";
  }

  return "all";
}

function getSiteWhere(site: BlogSite) {
  if (site === "all") {
    return {};
  }

  return {
    site: {
      in: ["both", site],
    },
  };
}

export async function getBlogCategories() {
  return prisma.blogCategory.findMany({
    orderBy: {
      name: "asc",
    },
  });
}

export async function getPublishedBlogPosts(options?: {
  categorySlug?: string;
  site?: BlogSite;
}) {
  const site = options?.site ?? "all";
  const categorySlug = options?.categorySlug;

  return prisma.blogPost.findMany({
    where: {
      status: "published",
      ...getSiteWhere(site),
      ...(categorySlug && categorySlug !== "all"
        ? {
            category: {
              slug: categorySlug,
            },
          }
        : {}),
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        isFeatured: "desc",
      },
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });
}

export async function getPublishedBlogPostBySlug(slug: string, site: BlogSite = "all") {
  return prisma.blogPost.findFirst({
    where: {
      slug,
      status: "published",
      ...getSiteWhere(site),
    },
    include: {
      category: true,
    },
  });
}

export async function incrementBlogPostViewCount(id: number) {
  try {
    await prisma.blogPost.update({
      where: {
        id,
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error("Increment blog post view count failed:", error);
  }
}

export async function getRelatedBlogPosts(options: {
  currentPostId: number;
  categoryId: number | null;
  site?: BlogSite;
  take?: number;
}) {
  const site = options.site ?? "all";

  if (!options.categoryId) {
    return [];
  }

  return prisma.blogPost.findMany({
    where: {
      id: {
        not: options.currentPostId,
      },
      categoryId: options.categoryId,
      status: "published",
      ...getSiteWhere(site),
    },
    include: {
      category: true,
    },
    orderBy: [
      {
        isFeatured: "desc",
      },
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    take: options.take ?? 3,
  });
}
