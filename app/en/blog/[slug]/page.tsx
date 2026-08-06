import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import PageHero from "../../../components/PageHero";
import SharePanel from "../../../components/SharePanel";
import {
  getCategoryBySlug,
  getPostBySlug,
  getPublishedPosts,
} from "@/lib/blog-data-en";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderMarkdown(content: string) {
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

      html += `<h3 class="mt-10 mb-4 text-3xl font-bold text-[#1F4E4C]">${escapeHtml(
        line.replace(/^###\s+/, "")
      )}</h3>`;
    } else if (line.startsWith("#### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      html += `<h4 class="mt-8 mb-4 text-2xl font-bold text-[#1F4E4C]">${escapeHtml(
        line.replace(/^####\s+/, "")
      )}</h4>`;
    } else if (line.startsWith("- ")) {
      if (!inList) {
        html += '<ul class="my-5 list-disc space-y-2 pl-6 leading-8 text-gray-700">';
        inList = true;
      }

      html += `<li>${escapeHtml(line.replace(/^\-\s+/, ""))}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }

      html += `<p class="mb-5 leading-8 text-gray-700">${escapeHtml(line)}</p>`;
    }
  }

  if (inList) {
    html += "</ul>";
  }

  return html;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Jiahua Postpartum Meals",
      description:
        "The article you are looking for does not exist or has not been published.",
    };
  }

  return {
    title: `${post.title} | Jiahua Postpartum Meals`,
    description: post.excerpt,
  };
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.categorySlug);

  const relatedPosts = getPublishedPosts()
    .filter(
      (relatedPost) =>
        relatedPost.slug !== post.slug &&
        relatedPost.categorySlug === post.categorySlug
    )
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={category?.name ?? "Blog"}
        title={post.title}
        description={post.excerpt}
      />

      <article className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <Link
            href="/en/blog"
            className="mb-8 inline-flex font-semibold text-[#B8915D] transition hover:text-[#1F4E4C]"
          >
            ← Back to Blog
          </Link>

          <div className="mb-6 flex flex-wrap gap-3 text-sm text-gray-500">
            <span>{category?.name ?? "Uncategorized"}</span>
            <span>•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          <div
            className="max-w-none"
            dangerouslySetInnerHTML={{
              __html: renderMarkdown(post.content),
            }}
          />
        </div>
      </article>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Share
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              Share With More Mothers
            </h2>

            <p className="mt-4 text-gray-600">
              If this article is helpful, feel free to share it with expecting
              mothers, new moms, and family members.
            </p>
          </div>

          <SharePanel title={post.title} />
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-12 text-center">
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Related Articles
              </div>

              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                You May Also Like
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getCategoryBySlug(
                  relatedPost.categorySlug
                );

                return (
                  <article
                    key={relatedPost.slug}
                    className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm"
                  >
                    <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-[#C9A18A]">
                        <span>
                          {relatedCategory?.name ?? "Uncategorized"}
                        </span>
                        <span>•</span>
                        <span>{formatDate(relatedPost.publishedAt)}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#1F4E4C]">
                        {relatedPost.title}
                      </h3>

                      <p className="mt-3 leading-7 text-gray-600">
                        {relatedPost.excerpt}
                      </p>

                      <Link
                        href={`/en/blog/${relatedPost.slug}`}
                        className="mt-5 inline-flex font-semibold text-[#B8915D]"
                      >
                        Read More →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
