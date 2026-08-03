import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";
import { blogCategories, getCategoryBySlug, getPublishedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "博客｜加华月子餐",
  description:
    "加华月子餐博客，分享加拿大坐月子、产后恢复、月子餐知识、哺乳期营养与 GTA 本地月子餐服务指南。",
};

type BlogPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategorySlug = params?.category || "all";
  const activeCategory = activeCategorySlug === "all" ? null : getCategoryBySlug(activeCategorySlug);

  const posts = getPublishedPosts().filter((post) =>
    activeCategory ? post.categorySlug === activeCategory.slug : true
  );

  const featuredPost = posts[0] ?? null;
  const normalPosts = posts.slice(1);
  const featuredCategory = featuredPost ? getCategoryBySlug(featuredPost.categorySlug) : null;

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="加华博客"
        title={
          <>
            产后恢复与
            <br />
            月子营养知识。
          </>
        }
        description="为 GTA 华人家庭整理实用的产后饮食、月子餐、哺乳期营养与坐月子知识。"
      />

      <section className="bg-white py-6 border-b border-[#F0E8DD]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            <Link
              href="/blog"
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategorySlug === "all"
                  ? "border-[#1F4E4C] bg-[#1F4E4C] text-white"
                  : "border-[#E8DCC9] bg-[#FAF8F5] text-[#1F4E4C] hover:border-[#D6B37F] hover:bg-[#D6B37F]/10"
              }`}
            >
              全部文章
            </Link>

            {blogCategories.map((category) => (
              <Link
                key={category.id}
                href={`/blog?category=${category.slug}`}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeCategorySlug === category.slug
                    ? "border-[#1F4E4C] bg-[#1F4E4C] text-white"
                    : "border-[#E8DCC9] bg-[#FAF8F5] text-[#1F4E4C] hover:border-[#D6B37F] hover:bg-[#D6B37F]/10"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featuredPost ? (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <article className="overflow-hidden rounded-[2rem] border border-[#F0E8DD] bg-white shadow-[0_18px_45px_rgba(31,78,76,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,78,76,0.13)]">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EFE7DA]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-contain transition duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#B8915D] shadow-sm backdrop-blur">
                    推荐阅读
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center gap-3 text-sm">
                    <span className="rounded-full bg-white/90 px-4 py-2 font-semibold text-[#1F4E4C] shadow-sm backdrop-blur">
                      {featuredCategory?.name ?? "未分类"}
                    </span>
                    <span className="rounded-full bg-white/85 px-4 py-2 text-gray-600 shadow-sm backdrop-blur">
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-6 md:p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 leading-8 mb-7">{featuredPost.excerpt}</p>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  阅读文章
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-8 text-center">
              <h2 className="text-2xl font-bold text-[#1F4E4C] mb-3">目前没有这个分类的文章</h2>
              <p className="text-gray-600">可以返回全部文章查看其他内容。</p>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">最新文章</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight">
                {activeCategory ? activeCategory.name : "为妈妈和家人准备的实用内容"}
              </h2>
            </div>
            {activeCategory && (
              <Link
                href="/blog"
                className="inline-flex w-full md:w-auto justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
              >
                查看全部文章
              </Link>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {normalPosts.map((post) => {
              const category = getCategoryBySlug(post.categorySlug);
              return (
                <article
                  key={post.slug}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#F0E8DD] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,78,76,0.1)]"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 font-semibold text-[#B8915D] shadow-sm backdrop-blur">
                          {category?.name ?? "未分类"}
                        </span>
                        <span className="rounded-full bg-white/85 px-3 py-1.5 text-gray-600 shadow-sm backdrop-blur">
                          {formatDate(post.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] leading-snug mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-7 mb-6 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]">
                      阅读更多 →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
