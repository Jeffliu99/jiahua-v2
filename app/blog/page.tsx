import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SharePanel from "@/components/SharePanel";
import {
  getBlogCategories,
  getCurrentBlogSite,
  getPublishedBlogPosts,
} from "@/lib/blog-service";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "博客｜加华月子餐",
  description:
    "加华月子餐博客，分享加拿大坐月子、产后恢复、月子餐知识、哺乳期营养与 GTA 本地月子餐服务指南。",
};

type BlogPageProps = {
  searchParams?: Promise<{ category?: string }>;
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
  const currentSite = await getCurrentBlogSite();

  const [categories, posts] = await Promise.all([
    getBlogCategories(),
    getPublishedBlogPosts({
      categorySlug: activeCategorySlug,
      site: currentSite,
    }),
  ]);

  const activeCategory =
    activeCategorySlug === "all"
      ? null
      : categories.find((category) => category.slug === activeCategorySlug) ?? null;

  const featuredPost = posts[0] ?? null;
  const normalPosts = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Jiahua Blog"
        title="产后恢复与月子营养知识"
        description="为 GTA 华人家庭整理实用的产后饮食、月子餐、哺乳期营养与坐月子知识。"
      />

      <main className="bg-[#FAF8F5] px-6 py-12 md:px-8">
        <section className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategorySlug === "all"
                  ? "bg-[#1F4E4C] text-white"
                  : "border border-[#D6B37F] text-[#1F4E4C] hover:bg-[#D6B37F]/10"
              }`}
            >
              全部文章
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategorySlug === category.slug
                    ? "bg-[#1F4E4C] text-white"
                    : "border border-[#D6B37F] text-[#1F4E4C] hover:bg-[#D6B37F]/10"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {featuredPost ? (
            <article className="mb-12 grid overflow-hidden rounded-[2rem] border border-[#F0E8DD] bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[280px] bg-[#EFE7DA]">
                {featuredPost.coverImage ? (
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                ) : (
                  <div className="flex h-full min-h-[280px] items-center justify-center text-[#1F4E4C]">
                    加华月子餐 Blog
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#B8915D]">
                  <span>推荐阅读</span>
                  <span>{featuredPost.category?.name ?? "未分类"}</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                </div>

                <h2 className="text-3xl font-bold leading-tight text-[#1F4E4C] md:text-4xl">
                  {featuredPost.title}
                </h2>

                {featuredPost.excerpt && (
                  <p className="mt-5 text-lg leading-8 text-gray-600">
                    {featuredPost.excerpt}
                  </p>
                )}

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  阅读文章
                </Link>
              </div>
            </article>
          ) : (
            <div className="mb-12 rounded-[2rem] border border-[#F0E8DD] bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-bold text-[#1F4E4C]">目前没有这个分类的文章</h2>
              <p className="mt-3 text-gray-600">可以返回全部文章查看其他内容。</p>
            </div>
          )}

          <section>
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <div className="text-sm font-semibold text-[#B8915D]">最新文章</div>
                <h2 className="mt-2 text-2xl font-bold text-[#1F4E4C] md:text-3xl">
                  {activeCategory ? activeCategory.name : "为妈妈和家人准备的实用内容"}
                </h2>
              </div>

              {activeCategory && (
                <Link href="/blog" className="text-sm font-semibold text-[#1F4E4C] underline">
                  查看全部文章
                </Link>
              )}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {normalPosts.map((post) => (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-[1.75rem] border border-[#F0E8DD] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-56 bg-[#EFE7DA]">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[#1F4E4C]">
                          加华月子餐 Blog
                        </div>
                      )}
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#B8915D]">
                      <span>{post.category?.name ?? "未分类"}</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>

                    <h3 className="text-xl font-bold leading-7 text-[#1F4E4C]">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    {post.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-5 inline-flex text-sm font-semibold text-[#1F4E4C] underline"
                    >
                      阅读更多 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-[#F0E8DD] bg-white p-8 shadow-sm">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8915D]">
              Share
            </div>
            <h2 className="text-2xl font-bold text-[#1F4E4C]">分享给更多妈妈</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              如果这些产后恢复与营养知识对您有帮助，欢迎分享给正在备产或产后恢复的家人朋友。
            </p>
            <div className="mt-6">
              <SharePanel title="加华月子餐 Blog" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
