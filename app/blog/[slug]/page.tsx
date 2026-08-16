import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogCTA from "@/components/blog/BlogCTA";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostShare from "@/components/blog/BlogPostShare";
import RelatedPosts from "@/components/blog/RelatedPosts";

import {
  getBlogMetadata,
  getBlogPostPageData,
  increaseBlogViewCount,
} from "@/lib/services/blog-service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getBlogPostPageData(slug);

  if (!data?.post) {
    return {
      title: "文章不存在｜加华月子餐",
      description: "您访问的博客文章不存在或尚未发布。",
    };
  }

  return getBlogMetadata(data.post);
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const data = await getBlogPostPageData(slug);

  if (!data?.post) {
    notFound();
  }

  const { post, relatedPosts } = data;

  await increaseBlogViewCount(post.id);

  return (
    <>
      <BlogPostHero post={post} />

      <main className="bg-[#FAF8F5] px-6 py-12 md:px-8">
        <article className="mx-auto max-w-4xl">
          <BlogPostContent post={post} />
          <BlogPostShare post={post} />
          <RelatedPosts posts={relatedPosts} />
        </article>
      </main>

      <BlogCTA />
    </>
  );
}
