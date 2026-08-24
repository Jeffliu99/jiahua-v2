import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const STATUS_LABELS: Record<string, string> = {
  NEW: "新线索",
  AI_ANALYZED: "AI 已分析",
  REPLY_READY: "回复待发布",
  REPLIED: "已回复",
  BLOG_CREATED: "已生成文章",
  CONVERTED: "已转化",
  CLOSED: "已关闭",
  IGNORED: "已忽略",
};

const STATUS_STYLES: Record<string, string> = {
  NEW: "bg-blue-50 text-blue-700",
  AI_ANALYZED: "bg-violet-50 text-violet-700",
  REPLY_READY: "bg-amber-50 text-amber-700",
  REPLIED: "bg-cyan-50 text-cyan-700",
  BLOG_CREATED: "bg-emerald-50 text-emerald-700",
  CONVERTED: "bg-green-100 text-green-800",
  CLOSED: "bg-gray-100 text-gray-700",
  IGNORED: "bg-red-50 text-red-700",
};

function formatDate(date: Date) {
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getScoreStyle(score: number) {
  if (score >= 9) return "bg-red-50 text-red-700";
  if (score >= 7) return "bg-amber-50 text-amber-700";
  if (score >= 4) return "bg-blue-50 text-blue-700";
  return "bg-gray-100 text-gray-600";
}

export default async function RedditLeadsPage() {
  const leads = await prisma.redditLead.findMany({
    include: {
      blogPost: {
        select: {
          id: true,
          title: true,
          slug: true,
          status: true,
        },
      },
    },
    orderBy: [{ intentScore: "desc" }, { createdAt: "desc" }],
  });

  const newCount = leads.filter((lead) => lead.status === "NEW").length;
  const highIntentCount = leads.filter((lead) => lead.intentScore >= 7).length;
  const repliedCount = leads.filter((lead) => lead.status === "REPLIED").length;
  const blogCount = leads.filter((lead) => lead.blogPostId !== null).length;

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#B8915D]">
              Reddit Growth Engine
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1F4E4C] md:text-4xl">
              Reddit 线索管理
            </h1>
            <p className="mt-3 max-w-2xl text-gray-600">
              管理 Reddit 用户问题、购买意图、AI 分析、回复草稿及关联博客文章。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/blog"
              className="rounded-full border border-[#D6B37F] bg-white px-5 py-2.5 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              博客管理
            </Link>
            <Link
              href="/admin/reddit-leads/new"
              className="rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
            >
              + 新增线索
            </Link>
          </div>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#B8915D]">全部线索</p>
            <p className="mt-3 text-3xl font-bold text-[#1F4E4C]">{leads.length}</p>
          </div>
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#B8915D]">新线索</p>
            <p className="mt-3 text-3xl font-bold text-[#1F4E4C]">{newCount}</p>
          </div>
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#B8915D]">高意图（7+）</p>
            <p className="mt-3 text-3xl font-bold text-[#1F4E4C]">
              {highIntentCount}
            </p>
          </div>
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-[#B8915D]">已回复 / 已成文</p>
            <p className="mt-3 text-3xl font-bold text-[#1F4E4C]">
              {repliedCount} / {blogCount}
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-[#F0E8DD] bg-white shadow-sm">
          <div className="border-b border-[#F0E8DD] px-6 py-5 md:px-8">
            <h2 className="text-xl font-bold text-[#1F4E4C]">线索列表</h2>
            <p className="mt-1 text-sm text-gray-500">
              默认优先显示意图分数较高、创建时间较新的线索。
            </p>
          </div>

          {leads.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <h3 className="text-xl font-bold text-[#1F4E4C]">
                暂时没有 Reddit 线索
              </h3>
              <p className="mt-3 text-gray-600">
                先把 Perplexity 找到的高意图帖子录入系统。
              </p>
              <Link
                href="/admin/reddit-leads/new"
                className="mt-6 inline-flex rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white"
              >
                新增第一条线索
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-[#FAF8F5] text-[#1F4E4C]">
                  <tr>
                    <th className="min-w-[320px] px-6 py-4 font-bold">帖子</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">社区</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">意图</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">匹配</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">城市 / 分类</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">状态</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">互动</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">关联文章</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">创建时间</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">操作</th>
                  </tr>
                </thead>

                <tbody>
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="border-t border-[#F0E8DD] align-top transition hover:bg-[#FAF8F5]"
                    >
                      <td className="px-6 py-5">
                        <a
                          href={lead.url}
                          target="_blank"
                          rel="noreferrer"
                          className="font-bold leading-6 text-[#1F4E4C] hover:underline"
                        >
                          {lead.title}
                        </a>
                        {lead.problemSummary && (
                          <p className="mt-2 line-clamp-2 max-w-xl text-gray-600">
                            {lead.problemSummary}
                          </p>
                        )}
                        {lead.keyword && (
                          <p className="mt-2 text-xs text-gray-500">
                            关键词：{lead.keyword}
                          </p>
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <span className="font-semibold text-[#1F4E4C]">
                          r/{lead.subreddit}
                        </span>
                        {lead.author && (
                          <p className="mt-1 text-xs text-gray-500">
                            u/{lead.author}
                          </p>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex min-w-10 justify-center rounded-full px-3 py-1.5 text-xs font-bold ${getScoreStyle(
                            lead.intentScore
                          )}`}
                        >
                          {lead.intentScore}/10
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex min-w-10 justify-center rounded-full px-3 py-1.5 text-xs font-bold ${getScoreStyle(
                            lead.matchScore
                          )}`}
                        >
                          {lead.matchScore}/10
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-gray-600">
                        <p>{lead.city || "未设置"}</p>
                        <p className="mt-1 text-xs text-gray-500">
                          {lead.category || "未分类"}
                        </p>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                            STATUS_STYLES[lead.status] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {STATUS_LABELS[lead.status] || lead.status}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-gray-600">
                        <p>▲ {lead.upvotes}</p>
                        <p className="mt-1">评论 {lead.commentCount}</p>
                      </td>

                      <td className="px-6 py-5">
                        {lead.blogPost ? (
                          <div className="max-w-[220px]">
                            <p className="line-clamp-2 font-semibold text-[#1F4E4C]">
                              {lead.blogPost.title}
                            </p>
                            <Link
                              href={`/admin/blog/${lead.blogPost.id}/edit`}
                              className="mt-2 inline-flex text-xs font-semibold text-[#B8915D] hover:underline"
                            >
                              编辑文章
                            </Link>
                          </div>
                        ) : (
                          <span className="text-gray-400">尚未生成</span>
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-gray-600">
                        {formatDate(lead.createdAt)}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex flex-col gap-2">
                          <Link
                            href={`/admin/reddit-leads/${lead.id}/edit`}
                            className="rounded-full border border-[#D6B37F] px-4 py-2 text-center text-xs font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
                          >
                            查看 / 编辑
                          </Link>
                          <a
                            href={lead.url}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-gray-200 px-4 py-2 text-center text-xs font-semibold text-gray-600 transition hover:bg-gray-50"
                          >
                            打开 Reddit
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
