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
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }

  const lines = content.trim().split("\n");
  let html = "";
  let inList = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h3>${escapeHtml(line.replace(/^###\s+/, ""))}</h3>`;
    } else if (line.startsWith("#### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h4>${escapeHtml(line.replace(/^####\s+/, ""))}</h4>`;
    } else if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${escapeHtml(line.replace(/^\-\s+/, ""))}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<p>${escapeHtml(line)}</p>`;
    }
  }

  if (inList) {
    html += "</ul>";
  }

  return html;
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
