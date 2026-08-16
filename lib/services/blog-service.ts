import { headers } from "next/headers";

import {
  type BlogSite,
  getBlogCategories,
  getPublishedBlogPosts,
  getPublishedBlogPostBySlug,
  getRelatedBlogPosts,
  getFeaturedBlogPosts,
  getLatestBlogPosts,
  incrementBlogPostViewCount,
} from "@/lib/data/blog";

export async function getCurrentBlogSite(): Promise<BlogSite> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host")?.toLowerCase() ?? "";

  if (host.includes("yuezicanada.com")) {
    return "yuezicanada";
  }

  if (host.includes("jiahuameal.com")) {
    return "jiahuameal";
  }

  return "all";
}

export async function getBlogPageData(categorySlug = "all") {
  const site = await getCurrentBlogSite();

  const [categories, posts] = await Promise.all([
    getBlogCategories(),
    getPublishedBlogPosts({
      categorySlug,
      site,
    }),
  ]);

  const activeCategory =
    categorySlug === "all"
      ? null
      : categories.find((category) => category.slug === categorySlug) ?? null;

  return {
    site,
    categories,
    activeCategory,
    featuredPost: posts[0] ?? null,
    normalPosts: posts.slice(1),
    totalPosts: posts.length,
  };
}

export async function getBlogPostPageData(slug: string) {
  const site = await getCurrentBlogSite();
  const post = await getPublishedBlogPostBySlug(slug, site);

  if (!post) {
    return null;
  }

  const relatedPosts = await getRelatedBlogPosts({
    currentPostId: post.id,
    categoryId: post.categoryId,
    site,
    take: 3,
  });

  return {
    site,
    post,
    relatedPosts,
  };
}

export function getBlogMetadata(post: {
  title: string;
  excerpt: string | null;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
}) {
  return {
    title: post.seoTitle || `${post.title}｜加华月子餐`,
    description: post.seoDescription || post.excerpt || "加华月子餐 Blog",
    keywords: post.seoKeywords ?? undefined,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt || "加华月子餐 Blog",
    },
  };
}

export async function getHomepageFeaturedBlogs() {
  const site = await getCurrentBlogSite();
  return getFeaturedBlogPosts(site);
}

export async function getHomepageLatestBlogs(take = 6) {
  const site = await getCurrentBlogSite();
  return getLatestBlogPosts(take, site);
}

export async function increaseBlogViewCount(id: number) {
  try {
    await incrementBlogPostViewCount(id);
  } catch (error) {
    console.error("Failed to update blog views", error);
  }
}
