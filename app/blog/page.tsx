import type { Metadata } from "next";

import BlogHero from "@/components/blog/BlogHero";
import BlogCategories from "@/components/blog/BlogCategories";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogShare from "@/components/blog/BlogShare";
import BlogCTA from "@/components/blog/BlogCTA";

import { getBlogPageData } from "@/lib/services/blog-service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "博客｜加华月子餐",
  description:
    "加华月子餐博客，分享加拿大坐月子、产后恢复、月子餐知识、哺乳期营养与 GTA 本地月子餐服务指南。",
};

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

function formatDate(date: Date | null) {
  if (!date) return "-";

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategorySlug = params?.category || "all";

  const {
    categories,
    activeCategory,
    featuredPost,
    normalPosts,
  } = await getBlogPageData(activeCategorySlug);

  return (
    <>
      <BlogHero />

      <BlogCategories
        categories={categories}
        activeCategory={activeCategorySlug}
      />

      <FeaturedPost
        post={featuredPost}
        formatDate={formatDate}
      />

      <BlogGrid
        posts={normalPosts}
        title={activeCategory?.name ?? "为妈妈和家人准备的实用内容"}
        formatDate={formatDate}
      />

      <BlogShare />

      <BlogCTA />
    </>
  );
}
