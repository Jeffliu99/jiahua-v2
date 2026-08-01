import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import { prisma } from "@/lib/prisma";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: Date | null) {
  if (!date) return "";

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function decodeHtmlEntities(value: string) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function renderBlogContent(content: string) {
  const trimmed = content.trim();
  const decoded = decodeHtmlEntities(trimmed);

  if (decoded.trim().startsWith("<")) {
    return decoded;
  }

  return decoded
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });

  if (!post || post.status !== "published") {
    return {
      title: "文章不存在｜加华月子餐",
      description: "您访问的博客文章不存在或尚未发布。",
    };
  }

  return {
    title: `${post.title}｜加华月子餐`,
    description:
      post.excerpt ||
      "加华月子餐博客，分享加拿大坐月子、产后恢复、月子餐知识、哺乳期营养与 GTA 本地月子餐服务指南。",
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({
    where: {
      slug,
    },
    include: {
      category: true,
    },
  });

  if (!post || post.status !== "published") {
    notFound();
  }

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      status: "published",
      id: {
        not: post.id,
      },
      categoryId: post.categoryId,
    },
    include: {
      category: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
    take: 3,
  });

  const articleHtml = renderBlogContent(post.content);

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow={post.category?.name ?? "加华博客"}
        title={post.title}
        description={
          post.excerpt ||
          "为 GTA 华人家庭整理实用的产后饮食、月子餐、哺乳期营养与坐月子知识。"
        }
      />

      <section className="bg-white border-y border-[#F0E8DD] py-5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="inline-flex w-fit rounded-full border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-2 text-sm font-semibold text-[#1F4E4C] transition hover:border-[#D6B37F] hover:bg-[#D6B37F]/10"
          >
            ← 返回博客
          </Link>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-[#FAF8F5] px-4 py-2 font-semibold text-[#B8915D] border border-[#F0E8DD]">
              {post.category?.name ?? "未分类"}
            </span>

            <span className="rounded-full bg-[#FAF8F5] px-4 py-2 text-gray-500 border border-[#F0E8DD]">
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <article className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-10 shadow-sm">
            {post.coverImage && (
              <div className="mb-8 overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#EFE7DA] shadow-sm">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </div>
            )}

            <div
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#1F4E4C] prose-h2:mt-10 prose-h2:text-3xl prose-h2:font-bold prose-h3:mt-8 prose-h3:text-2xl prose-h3:font-bold prose-p:leading-9 prose-li:leading-8 prose-a:text-[#1F4E4C] prose-a:font-semibold prose-blockquote:border-[#D6B37F] prose-blockquote:text-gray-600"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          </article>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="mb-8">
              <div className="text-[#D6B37F] font-medium mb-3">相关文章</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight">
                您可能也想了解
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-7 transition hover:shadow-md"
                >
                  <div className="flex flex-wrap gap-2 mb-5 text-sm">
                    <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-[#B8915D]">
                      {relatedPost.category?.name ?? "未分类"}
                    </span>

                    <span className="rounded-full bg-white px-3 py-1.5 text-gray-500">
                      {formatDate(relatedPost.publishedAt)}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] leading-snug mb-4">
                    {relatedPost.title}
                  </h3>

                  {relatedPost.excerpt && (
                    <p className="text-gray-600 leading-7 mb-6">
                      {relatedPost.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/blog/${relatedPost.slug}`}
                    className="font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]"
                  >
                    阅读更多 →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">
            正在为产后恢复做准备？
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的需要，我们半小时内为您匹配合适方案。
          </h2>

          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
