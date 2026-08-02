import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import { getCategoryBySlug, getPostBySlug, getPublishedPosts } from "@/lib/blog-data";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  let html = "";
  let inList = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    if (line.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2>${line.replace(/^###\s+/, "")}</h2>`;
    } else if (line.startsWith("#### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3>${line.replace(/^####\s+/, "")}</h3>`;
    } else if (line.startsWith("- ")) {
      if (!inList) { html += "<ul>"; inList = true; }
      html += `<li>${line.replace(/^\-\s+/, "")}</li>`;
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p>${line}</p>`;
    }
  }

  if (inList) html += "</ul>";
  return html;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在｜加华月子餐",
      description: "您访问的博客文章不存在或尚未发布。",
    };
  }

  return {
    title: `${post.title}｜加华月子餐`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.categorySlug);
  const relatedPosts = getPublishedPosts()
    .filter((relatedPost) => relatedPost.slug !== post.slug && relatedPost.categorySlug === post.categorySlug)
    .slice(0, 3);

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow={category?.name ?? "加华博客"}
        title={post.title}
        description={post.excerpt}
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
              {category?.name ?? "未分类"}
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

            <div
              className="prose prose-lg max-w-none text-gray-700 prose-headings:text-[#1F4E4C] prose-h2:mt-10 prose-h2:text-3xl prose-h2:font-bold prose-h3:mt-8 prose-h3:text-2xl prose-h3:font-bold prose-p:leading-9 prose-li:leading-8"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
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
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getCategoryBySlug(relatedPost.categorySlug);
                return (
                  <article key={relatedPost.slug} className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-7 transition hover:shadow-md">
                    <div className="flex flex-wrap gap-2 mb-5 text-sm">
                      <span className="rounded-full bg-white px-3 py-1.5 font-semibold text-[#B8915D]">
                        {relatedCategory?.name ?? "未分类"}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 text-gray-500">
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] leading-snug mb-4">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 leading-7 mb-6">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`} className="font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]">
                      阅读更多 →
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
