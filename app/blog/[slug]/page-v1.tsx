import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import { blogPosts, getBlogPost } from "../blog-data";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: "文章未找到｜加华月子餐",
    };
  }

  return {
    title: `${post.title}｜加华月子餐博客`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug && item.category === post.category)
    .slice(0, 3);

  const fallbackPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const postsToShow = relatedPosts.length > 0 ? relatedPosts : fallbackPosts;

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
      />

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-3 mb-8 text-sm">
            <span className="rounded-full bg-[#FAF8F5] px-4 py-2 font-semibold text-[#B8915D]">
              {post.category}
            </span>
            <span className="rounded-full bg-[#FAF8F5] px-4 py-2 text-gray-500">
              {post.date}
            </span>
            <span className="rounded-full bg-[#FAF8F5] px-4 py-2 text-gray-500">
              {post.readTime}
            </span>
          </div>

          <article className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-9">
            <div className="space-y-9">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] leading-tight mb-4">
                    {section.heading}
                  </h2>

                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-gray-600 leading-8 text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets ? (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-gray-600 leading-7">
                          <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-[11px] font-bold text-white">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-[#F0E8DD] bg-white p-5 md:p-6">
              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">温馨提示</h3>
              <p className="text-gray-600 leading-7">
                本文内容仅作为一般性产后饮食和月子餐安排参考，不能替代医生、营养师或其他专业医疗建议。如有特殊健康情况、过敏、术后恢复问题或饮食限制，请先咨询专业人士。
              </p>
            </div>
          </article>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog"
              className="inline-flex w-full sm:w-auto justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              返回博客列表
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
            >
              预约咨询
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">相关阅读</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight">
                继续了解产后恢复与月子餐知识
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {postsToShow.map((item) => (
              <article
                key={item.slug}
                className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-[#B8915D] text-sm font-semibold mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-[#1F4E4C] leading-snug mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-7 mb-5">{item.excerpt}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]"
                >
                  阅读更多 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">正在为产后恢复做准备？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的需要，我们半小时内为您匹配合适方案。
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
