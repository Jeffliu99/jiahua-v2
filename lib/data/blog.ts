import { prisma } from "@/lib/prisma";

export type BlogSite = "both" | "jiahuameal" | "yuezicanada" | "all";

function buildSiteFilter(site: BlogSite) {
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
      ...buildSiteFilter(site),
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

export async function getPublishedBlogPostBySlug(
  slug: string,
  site: BlogSite = "all"
) {
  return prisma.blogPost.findFirst({
    where: {
      slug,
      status: "published",
      ...buildSiteFilter(site),
    },
    include: {
      category: true,
    },
  });
}

export async function getFeaturedBlogPosts(site: BlogSite = "all") {
  return prisma.blogPost.findMany({
    where: {
      status: "published",
      isFeatured: true,
      ...buildSiteFilter(site),
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
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
      ...buildSiteFilter(site),
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: options.take ?? 3,
  });
}

export async function incrementBlogPostViewCount(id: number) {
  return prisma.blogPost.update({
    where: {
      id,
    },
    data: {
      viewCount: {
        increment: 1,
      },
    },
  });
}

export async function getLatestBlogPosts(take = 6, site: BlogSite = "all") {
  return prisma.blogPost.findMany({
    where: {
      status: "published",
      ...buildSiteFilter(site),
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take,
  });
}
