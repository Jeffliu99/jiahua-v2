import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import SharePanel from "@/components/SharePanel";
import {
  getCurrentBlogSite,
  getPublishedBlogPostBySlug,
  getRelatedBlogPosts,
  incrementBlogPostViewCount,
} from "@/lib/blog-service";

export const dynamic = "force-dynamic";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
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

  if (inList) html += "</ul>";
  return html;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const currentSite = await getCurrentBlogSite();
  const post = await getPublishedBlogPostBySlug(slug, currentSite);

  if (!post) {
    return {
      title: "文章不存在｜加华月子餐",
      description: "您访问的博客文章不存在或尚未发布。",
    };
  }

  return {
    title: post.seoTitle || `${post.title}｜加华月子餐`,
    description: post.seoDescription || post.excerpt || "加华月子餐 Blog 文章。",
    keywords: post.seoKeywords || undefined,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const currentSite = await getCurrentBlogSite();
  const post = await getPublishedBlogPostBySlug(slug, currentSite);

  if (!post) {
    notFound();
  }

  await incrementBlogPostViewCount(post.id);

  const relatedPosts = await getRelatedBlogPosts({
    currentPostId: post.id,
    categoryId: post.categoryId,
    site: currentSite,
    take: 3,
  });

  return (
    <>
      <PageHero
        eyebrow={post.category?.name ?? "Jiahua Blog"}
        title={post.title}
        description={post.excerpt ?? "加华月子餐 Blog 文章。"}
      />

      <main className="bg-[#FAF8F5] px-6 py-12 md:px-8">
        <article className="mx-auto max-w-4xl">
          <Link href="/blog" className="mb-8 inline-flex text-sm font-semibold text-[#1F4E4C] underline">
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
              <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-[#B8915D]">
                <span>{post.category?.name ?? "未分类"}</span>
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:text-[#1F4E4C] prose-p:leading-8 prose-a:text-[#1F4E4C] prose-li:leading-8"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />
            </div>
          </div>

          <section className="mt-10 rounded-[2rem] border border-[#F0E8DD] bg-white p-8 shadow-sm">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8915D]">
              Share
            </div>
            <h2 className="text-2xl font-bold text-[#1F4E4C]">分享给更多妈妈</h2>
            <p className="mt-3 text-gray-600">
              如果这篇文章对您有帮助，欢迎分享给正在备产或产后恢复的家人朋友。
            </p>
            <div className="mt-6">
              <SharePanel title={post.title} />
            </div>
          </section>

          {relatedPosts.length > 0 && (
            <section className="mt-12">
              <div className="mb-6">
                <div className="text-sm font-semibold text-[#B8915D]">相关文章</div>
                <h2 className="mt-2 text-2xl font-bold text-[#1F4E4C]">您可能也想了解</h2>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.id}
                    className="rounded-[1.5rem] border border-[#F0E8DD] bg-white p-6 shadow-sm"
                  >
                    <div className="mb-3 text-xs font-semibold text-[#B8915D]">
                      {relatedPost.category?.name ?? "未分类"} · {formatDate(relatedPost.publishedAt)}
                    </div>
                    <h3 className="text-lg font-bold leading-7 text-[#1F4E4C]">
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    {relatedPost.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                        {relatedPost.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="mt-5 inline-flex text-sm font-semibold text-[#1F4E4C] underline"
                    >
                      阅读更多 →
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
    </>
  );
}
