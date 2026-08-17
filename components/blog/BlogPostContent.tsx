import Image from "next/image";
import Link from "next/link";

type BlogPostContentProps = {
  post: {
    title: string;
    content: string;
    coverImage: string | null;
    publishedAt: Date | null;
    category?: {
      name: string;
    } | null;
  };
};

function formatDate(date: Date | null) {
  if (!date) return "-";

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderContent(content: string) {
  return content
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <>
      <Link
        href="/blog"
        className="mb-8 inline-flex text-sm font-semibold text-[#1F4E4C] underline underline-offset-4"
      >
        ← 返回博客
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-[#F0E8DD] bg-white shadow-sm">
        {post.coverImage && (
          <div className="relative h-[320px] bg-[#EFE7DA] md:h-[460px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        <div className="p-8 md:p-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#B8915D]">
            <span>{post.category?.name ?? "未分类"}</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:text-[#1F4E4C] prose-p:leading-8 prose-a:text-[#1F4E4C] prose-li:leading-8"
            dangerouslySetInnerHTML={{
              __html: renderContent(post.content),
            }}
          />
        </div>
      </div>
    </>
  );
}
