import { headers } from "next/headers";

import {
  BlogSite,
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

  const host =
    requestHeaders.get("host")?.toLowerCase() ?? "";

  if (host.includes("yuezicanada.com")) {
    return "yuezicanada";
  }

  if (host.includes("jiahuameal.com")) {
    return "jiahuameal";
  }

  return "all";
}