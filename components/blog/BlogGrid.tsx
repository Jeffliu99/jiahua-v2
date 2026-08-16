import Image from "next/image";
import Link from "next/link";
import type { BlogPostCard } from "@/components/blog/FeaturedPost";

type BlogGridProps = {
  posts: BlogPostCard[];
  title: string;
  formatDate: (date: Date | null) => string;
};

export default function BlogGrid({ posts, title, formatDate }: BlogGridProps) {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8915D]">
              Latest Articles
            </div>
            <h2 className="mt-2 text-3xl font-bold text-[#1F4E4C] md:text-4xl">
              {title}
            </h2>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="rounded-[2rem] border border-[#F0E8DD] bg-white p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-[#1F4E4C]">暂无更多文章</h3>
            <p className="mt-2 text-gray-600">可以稍后再查看更新内容。</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-[1.75rem] border border-[#F0E8DD] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 bg-[#EFE7DA]">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
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
                    className="mt-5 inline-flex text-sm font-semibold text-[#1F4E4C] underline underline-offset-4"
                  >
                    阅读更多 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
