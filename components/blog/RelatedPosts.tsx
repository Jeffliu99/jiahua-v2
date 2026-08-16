import Link from "next/link";

type RelatedPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  publishedAt: Date | null;
  category?: {
    name: string;
  } | null;
};

type RelatedPostsProps = {
  posts: RelatedPost[];
};

function formatDate(date: Date | null) {
  if (!date) return "-";

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <div className="text-sm font-semibold text-[#B8915D]">相关文章</div>
        <h2 className="mt-2 text-2xl font-bold text-[#1F4E4C]">
          您可能也想了解
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-[1.5rem] border border-[#F0E8DD] bg-white p-6 shadow-sm"
          >
            <div className="mb-3 text-xs font-semibold text-[#B8915D]">
              {post.category?.name ?? "未分类"} · {formatDate(post.publishedAt)}
            </div>

            <h3 className="text-lg font-bold leading-7 text-[#1F4E4C]">
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
          </article>
        ))}
      </div>
    </section>
  );
}
