import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SharePanel from "../../components/SharePanel";
import {
  blogCategories,
  getCategoryBySlug,
  getPublishedPosts,
} from "@/lib/blog-data-en";

export const metadata: Metadata = {
  title: "Blog | Jiahua Postpartum Meals",
  description:
    "Jiahua Postpartum Meals blog shares practical guidance on postpartum recovery, postpartum meals, breastfeeding nutrition, baby care, pregnancy nutrition, and local GTA service tips.",
};

type BlogPageProps = {
  searchParams?: Promise<{ category?: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategorySlug = params?.category || "all";
  const activeCategory =
    activeCategorySlug === "all" ? null : getCategoryBySlug(activeCategorySlug);

  const posts = getPublishedPosts().filter((post) =>
    activeCategory ? post.categorySlug === activeCategory.slug : true
  );

  const featuredPost = posts[0] ?? null;
  const normalPosts = posts.slice(1);
  const featuredCategory = featuredPost
    ? getCategoryBySlug(featuredPost.categorySlug)
    : null;

  return (
    <>
      <PageHero
        eyebrow="Jiahua Blog"
        title={
          <>
            Postpartum Recovery and
            <br />
            Nutrition Knowledge.
          </>
        }
        description="Practical postpartum meal, recovery, breastfeeding nutrition, baby care, and local GTA guidance for families preparing for birth and recovery."
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex flex-wrap gap-3">
            <Link
              href="/en/blog"
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeCategorySlug === "all"
                  ? "border-[#1F4E4C] bg-[#1F4E4C] text-white"
                  : "border-[#E8DCC9] bg-[#FAF8F5] text-[#1F4E4C] hover:bg-[#D6B37F]/10"
              }`}
            >
              All Articles
            </Link>

            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/en/blog?category=${category.slug}`}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  activeCategorySlug === category.slug
                    ? "border-[#1F4E4C] bg-[#1F4E4C] text-white"
                    : "border-[#E8DCC9] bg-[#FAF8F5] text-[#1F4E4C] hover:bg-[#D6B37F]/10"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {featuredPost ? (
            <article className="grid overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm lg:grid-cols-[1fr_1.05fr]">
              <div className="relative min-h-[280px] bg-white lg:min-h-[420px]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-7 md:p-10">
                <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                  Featured Article
                </div>

                <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span>{featuredCategory?.name ?? "Uncategorized"}</span>
                  <span>•</span>
                  <span>{formatDate(featuredPost.publishedAt)}</span>
                </div>

                <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  {featuredPost.excerpt}
                </p>

                <Link
                  href={`/en/blog/${featuredPost.slug}`}
                  className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  Read Article
                </Link>
              </div>
            </article>
          ) : (
            <div className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 text-center">
              <h2 className="text-2xl font-bold text-[#1F4E4C]">
                No Articles Found in This Category
              </h2>
              <p className="mt-3 text-gray-600">
                You can return to all articles to explore other postpartum topics.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Latest Articles
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                {activeCategory
                  ? activeCategory.name
                  : "Practical Content for Mothers and Families"}
              </h2>
            </div>

            {activeCategory && (
              <Link
                href="/en/blog"
                className="w-fit rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
              >
                View All Articles
              </Link>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {normalPosts.map((post) => {
              const category = getCategoryBySlug(post.categorySlug);

              return (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A18A]">
                      <span>{category?.name ?? "Uncategorized"}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1F4E4C]">
                      {post.title}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-600">
                      {post.excerpt}
                    </p>

                    <Link
                      href={`/en/blog/${post.slug}`}
                      className="mt-5 inline-flex font-semibold text-[#B8915D]"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Share */}
          <section className="mt-20">
            <div className="mb-8 text-center">
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Share
              </div>

              <h2 className="text-3xl font-bold text-[#1F4E4C]">
                Share With More Mothers
              </h2>

              <p className="mt-4 text-gray-600">
                If these postpartum recovery and nutrition articles are helpful, feel free to share them with expecting mothers, new moms, and family members.
              </p>
            </div>

            <SharePanel title="Jiahua Blog | Postpartum Recovery and Nutrition Knowledge" />
          </section>
        </div>
      </section>
    </>
  );
}
