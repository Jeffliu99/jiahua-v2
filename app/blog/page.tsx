import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "博客｜加华月子餐",
  description:
    "加华月子餐博客，分享加拿大坐月子、产后恢复、月子餐知识、哺乳期营养与 GTA 本地月子餐服务指南。",
};

const categories = [
  "全部文章",
  "产后恢复",
  "月子餐知识",
  "哺乳期营养",
  "GTA 本地指南",
];

const featuredPost = {
  title: "加拿大坐月子吃什么？GTA 华人妈妈产后饮食指南",
  slug: "postpartum-meals-in-canada",
  category: "月子餐知识",
  date: "2026-08-01",
  excerpt:
    "在加拿大坐月子，既要考虑传统调理习惯，也要适应本地生活节奏。本文整理产后不同阶段的饮食重点，帮助妈妈和家人更清楚地安排月子餐。",
};

const posts = [
  {
    title: "剖腹产后饮食安排指南：产后恢复期怎么吃更舒服？",
    slug: "c-section-recovery-diet",
    category: "产后恢复",
    date: "2026-08-03",
    excerpt:
      "剖腹产后的饮食安排需要更注重温和、清淡和易消化。了解术后不同阶段的餐食重点，有助于家庭更好地照顾妈妈。",
  },
  {
    title: "哺乳期妈妈应该如何补充营养？",
    slug: "breastfeeding-nutrition-guide",
    category: "哺乳期营养",
    date: "2026-08-05",
    excerpt:
      "哺乳期饮食不仅关系到妈妈体力恢复，也影响日常照护节奏。本文整理哺乳期营养搭配的常见原则和注意事项。",
  },
  {
    title: "GTA 月子餐如何选择？给新手家庭的实用指南",
    slug: "gta-postpartum-meal-service-guide",
    category: "GTA 本地指南",
    date: "2026-08-07",
    excerpt:
      "在 Markham、Richmond Hill、North York、Aurora 等地区选择月子餐服务时，建议重点关注菜单安排、配送范围、沟通流程和服务稳定性。",
  },
  {
    title: "顺产后 30 天饮食建议：从第一周到第四周怎么安排？",
    slug: "natural-birth-30-day-diet-guide",
    category: "产后恢复",
    date: "2026-08-10",
    excerpt:
      "顺产后的恢复节奏通常循序渐进。本文按 30 天分阶段整理饮食重点，帮助家庭更有方向地准备产后餐食。",
  },
  {
    title: "月子餐提前多久预订比较合适？",
    slug: "when-to-book-postpartum-meals",
    category: "月子餐知识",
    date: "2026-08-12",
    excerpt:
      "很多家庭会在预产期前才开始了解月子餐。提前规划可以帮助沟通配送范围、菜单偏好和特殊需求。",
  },
  {
    title: "Markham 月子餐配送服务怎么选？",
    slug: "markham-postpartum-meal-delivery-guide",
    category: "GTA 本地指南",
    date: "2026-08-15",
    excerpt:
      "Markham 华人家庭较多，月子餐需求也更集中。本文整理选择本地月子餐服务时可以关注的几个重点。",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="加华博客"
        title={
          <>
            产后恢复与
            <br />
            月子营养知识。
          </>
        }
        description="为 GTA 华人家庭整理实用的产后饮食、月子餐、哺乳期营养与坐月子知识。"
      />

      {/* Categories */}
      <section className="bg-white py-6 border-b border-[#F0E8DD]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="shrink-0 rounded-full border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-2 text-sm font-semibold text-[#1F4E4C] transition hover:border-[#D6B37F] hover:bg-[#D6B37F]/10"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-stretch">
            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 flex flex-col justify-center">
              <div className="text-[#D6B37F] font-medium mb-3">推荐阅读</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 leading-8 mb-6">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-3 mb-7 text-sm">
                <span className="rounded-full bg-white px-4 py-2 font-semibold text-[#B8915D]">
                  {featuredPost.category}
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-gray-500">
                  {featuredPost.date}
                </span>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
              >
                阅读文章
              </Link>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-[#1F4E4C] p-6 md:p-8 text-white flex flex-col justify-between">
              <div>
                <div className="text-[#F4D7A7] font-semibold mb-4">为什么要读加华博客？</div>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                  少一点搜索焦虑，
                  <br />
                  多一点清楚参考。
                </h3>
                <p className="text-white/80 leading-8">
                  我们会持续整理产后恢复、月子餐搭配、哺乳期饮食和 GTA 本地月子服务相关内容，帮助妈妈和家人更从容地准备产后生活。
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-[#F4D7A7]">10+</div>
                  <div className="text-sm text-white/70 mt-1">首批内容规划</div>
                </div>
                <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                  <div className="text-2xl font-bold text-[#F4D7A7]">4</div>
                  <div className="text-sm text-white/70 mt-1">核心内容分类</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">最新文章</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight">
                为妈妈和家人准备的实用内容
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-full md:w-auto justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              预约咨询
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap gap-2 mb-5 text-sm">
                  <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 font-semibold text-[#B8915D]">
                    {post.category}
                  </span>
                  <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 text-gray-500">
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] leading-snug mb-4">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-6">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-[#1F4E4C] transition hover:text-[#D6B37F]"
                >
                  阅读更多 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
