import Image from "next/image";
import Link from "next/link";

export type BlogPostCard = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: Date | null;
  category?: {
    id: number;
    name: string;
    slug: string;
  } | null;
};

type FeaturedPostProps = {
  post: BlogPostCard | null;
  formatDate: (date: Date | null) => string;
};

export default function FeaturedPost({ post, formatDate }: FeaturedPostProps) {
  if (!post) {
    return (
      <section className="bg-[#FAF8F5] px-6 py-12 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#F0E8DD] bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-[#1F4E4C]">
            目前没有这个分类的文章
          </h2>
          <p className="mt-3 text-gray-600">可以返回全部文章查看其他内容。</p>
          <Link
            href="/blog"
            className="mt-6 inline-flex rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
          >
            查看全部文章
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#FAF8F5] px-6 py-12 md:px-8">
      <article className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#F0E8DD] bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <Link
          href={`/blog/${post.slug}`}
          className="relative min-h-[280px] bg-[#EFE7DA] md:min-h-[360px] lg:min-h-[430px]"
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover transition duration-500 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          ) : (
            <div className="flex h-full min-h-[280px] items-center justify-center text-[#1F4E4C]">
              加华月子餐 Blog
            </div>
          )}
        </Link>

        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#B8915D]">
            <span>推荐阅读</span>
            <span>{post.category?.name ?? "未分类"}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#1F4E4C] md:text-4xl">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>

          {post.excerpt && (
            <p className="mt-5 text-lg leading-8 text-gray-600">{post.excerpt}</p>
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="mt-8 inline-flex w-fit rounded-full bg-[#1F4E4C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
          >
            阅读文章
          </Link>
        </div>
      </article>
    </section>
  );
}
