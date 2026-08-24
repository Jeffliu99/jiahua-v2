import Link from "next/link";
import { RedditLeadStatus } from "@prisma/client";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import {
  deleteRedditLeadAction,
  updateRedditLeadAction,
} from "./actions";
import { generateBlogFromLeadAction } from "./blog-actions";

export const dynamic = "force-dynamic";

const CATEGORIES = [
  "POSTPARTUM_MEALS",
  "BREASTFEEDING",
  "MILK_SUPPLY",
  "RECOVERY",
  "C_SECTION",
  "CONFINEMENT",
  "NEWBORN_CARE",
  "SLEEP",
  "MENTAL_HEALTH",
  "GENERAL",
];

const STATUS_LABELS: Record<RedditLeadStatus, string> = {
  NEW: "新线索",
  AI_ANALYZED: "AI 已分析",
  REPLY_READY: "回复待发布",
  REPLIED: "已回复",
  BLOG_CREATED: "已生成文章",
  CONVERTED: "已转化",
  CLOSED: "已关闭",
  IGNORED: "已忽略",
};

function formatDate(date: Date | null) {
  if (!date) return "—";
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function EditRedditLeadPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{
    created?: string;
    updated?: string;
    duplicate?: string;
    error?: string;
    blog?: string;
  }>;
}) {
  const { id: rawId } = await params;
  const query = searchParams ? await searchParams : {};
  const id = Number(rawId);

  if (!Number.isInteger(id) || id <= 0) notFound();

  const lead = await prisma.redditLead.findUnique({
    where: { id },
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
  });

  if (!lead) notFound();

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#B8915D]">
              Reddit Growth Engine · Lead #{lead.id}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1F4E4C]">
              编辑 Reddit 线索
            </h1>
            <p className="mt-3 text-gray-600">
              更新线索评估、AI 分析、回复草稿及内容运营状态。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={lead.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#D6B37F] bg-white px-5 py-2.5 text-sm font-semibold text-[#1F4E4C]"
            >
              打开 Reddit
            </a>
            <Link
              href="/admin/reddit-leads"
              className="rounded-full border border-[#1F4E4C] bg-white px-5 py-2.5 text-sm font-semibold text-[#1F4E4C]"
            >
              返回线索管理
            </Link>
          </div>
        </header>

        {(query?.created === "1" || query?.updated === "1") && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            {query.created === "1" ? "线索创建成功。" : "线索更新成功。"}
          </div>
        )}

        {query?.duplicate === "1" && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-semibold text-amber-700">
            该 Reddit URL 已存在，已打开原有线索。
          </div>
        )}

        {query?.blog === "created" && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            博客草稿、封面及关联关系已生成成功。
          </div>
        )}

        {query?.error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            {query.error === "url"
              ? "Reddit URL 格式不正确。"
              : query.error === "duplicate"
                ? "该 URL 已被其他线索使用。"
                : query.error === "blog-exists"
                  ? "这条线索已经关联博客文章。"
                  : query.error === "blog-generation"
                    ? "博客生成失败，请查看服务器日志和 BlogGenerationQueue。"
                    : "请填写标题、URL 和 Subreddit。"}
          </div>
        )}

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl border border-[#F0E8DD] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#B8915D]">当前状态</p>
            <p className="mt-2 font-bold text-[#1F4E4C]">
              {STATUS_LABELS[lead.status]}
            </p>
          </div>
          <div className="rounded-2xl border border-[#F0E8DD] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#B8915D]">创建时间</p>
            <p className="mt-2 text-sm font-semibold text-[#1F4E4C]">
              {formatDate(lead.createdAt)}
            </p>
          </div>
          <div className="rounded-2xl border border-[#F0E8DD] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#B8915D]">最后更新</p>
            <p className="mt-2 text-sm font-semibold text-[#1F4E4C]">
              {formatDate(lead.updatedAt)}
            </p>
          </div>
          <div className="rounded-2xl border border-[#F0E8DD] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold text-[#B8915D]">回复时间</p>
            <p className="mt-2 text-sm font-semibold text-[#1F4E4C]">
              {formatDate(lead.repliedAt)}
            </p>
          </div>
        </div>

        <form
          action={updateRedditLeadAction}
          className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm md:p-8"
        >
          <input type="hidden" name="id" value={lead.id} />

          <section>
            <h2 className="text-xl font-bold text-[#1F4E4C]">帖子信息</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">帖子标题 *</span>
                <input
                  name="title"
                  required
                  defaultValue={lead.title}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Reddit URL *</span>
                <input
                  name="url"
                  type="url"
                  required
                  defaultValue={lead.url}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">Subreddit *</span>
                <input
                  name="subreddit"
                  required
                  defaultValue={lead.subreddit}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">作者</span>
                <input
                  name="author"
                  defaultValue={lead.author || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">Upvotes</span>
                <input
                  name="upvotes"
                  type="number"
                  min="0"
                  defaultValue={lead.upvotes}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">评论数</span>
                <input
                  name="commentCount"
                  type="number"
                  min="0"
                  defaultValue={lead.commentCount}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>
            </div>
          </section>

          <section className="mt-10 border-t border-[#F0E8DD] pt-8">
            <h2 className="text-xl font-bold text-[#1F4E4C]">线索评估</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-semibold">购买意图（0–10）</span>
                <input
                  name="intentScore"
                  type="number"
                  min="0"
                  max="10"
                  defaultValue={lead.intentScore}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">服务匹配度（0–10）</span>
                <input
                  name="matchScore"
                  type="number"
                  min="0"
                  max="10"
                  defaultValue={lead.matchScore}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">状态</span>
                <select
                  name="status"
                  defaultValue={lead.status}
                  className="w-full rounded-xl border px-4 py-3"
                >
                  {Object.values(RedditLeadStatus).map((status) => (
                    <option key={status} value={status}>
                      {STATUS_LABELS[status]}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">城市</span>
                <input
                  name="city"
                  defaultValue={lead.city || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">分类</span>
                <select
                  name="category"
                  defaultValue={lead.category || "GENERAL"}
                  className="w-full rounded-xl border px-4 py-3"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">目标关键词</span>
                <input
                  name="keyword"
                  defaultValue={lead.keyword || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">问题摘要</span>
                <textarea
                  name="problemSummary"
                  rows={5}
                  defaultValue={lead.problemSummary || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>
            </div>
          </section>

          <section className="mt-10 border-t border-[#F0E8DD] pt-8">
            <h2 className="text-xl font-bold text-[#1F4E4C]">AI 与回复工作区</h2>
            <div className="mt-5 grid gap-5">
              <label>
                <span className="mb-2 block text-sm font-semibold">AI 分析</span>
                <textarea
                  name="aiAnalysis"
                  rows={7}
                  defaultValue={lead.aiAnalysis || ""}
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="后续可由 Analyze Lead 自动生成。"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">回复草稿</span>
                <textarea
                  name="replyDraft"
                  rows={8}
                  defaultValue={lead.replyDraft || ""}
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="后续可由 Generate Reply 自动生成。"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">最终回复</span>
                <textarea
                  name="finalReply"
                  rows={8}
                  defaultValue={lead.finalReply || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">内部备注</span>
                <textarea
                  name="notes"
                  rows={5}
                  defaultValue={lead.notes || ""}
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>
            </div>
          </section>

          <section className="mt-10 border-t border-[#F0E8DD] pt-8">
            <h2 className="text-xl font-bold text-[#1F4E4C]">关联内容</h2>
            {lead.blogPost ? (
              <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-5">
                <p className="font-bold text-green-800">{lead.blogPost.title}</p>
                <p className="mt-1 text-sm text-green-700">
                  状态：{lead.blogPost.status}
                </p>
                <Link
                  href={`/admin/blog/${lead.blogPost.id}/edit`}
                  className="mt-4 inline-flex rounded-full bg-green-700 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  编辑关联文章
                </Link>
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-dashed border-gray-300 p-5 text-gray-600">
                尚未关联博客文章。下一步将增加“一键生成 Blog”功能。
              </div>
            )}
          </section>

          <div className="mt-8 flex flex-wrap justify-end gap-3 border-t border-[#F0E8DD] pt-6">
            <Link
              href="/admin/reddit-leads"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700"
            >
              取消
            </Link>
            <button
              type="submit"
              className="rounded-full bg-[#1F4E4C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
            >
              保存修改
            </button>
          </div>
        </form>

        {!lead.blogPost && (
          <form
            action={generateBlogFromLeadAction}
            className="mt-6 rounded-3xl border border-[#D6B37F] bg-white p-6 shadow-sm"
          >
            <input type="hidden" name="leadId" value={lead.id} />
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-bold text-[#1F4E4C]">从线索生成博客</h2>
                <p className="mt-1 text-sm text-gray-600">
                  使用目标关键词、问题摘要或帖子标题生成中文博客草稿，并自动生成 R2 封面。
                </p>
              </div>
              <button
                type="submit"
                className="rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white hover:bg-[#173D3B]"
              >
                生成 Blog 草稿
              </button>
            </div>
          </form>
        )}

        <form
          action={deleteRedditLeadAction}
          className="mt-6 rounded-3xl border border-red-200 bg-white p-6 shadow-sm"
        >
          <input type="hidden" name="id" value={lead.id} />
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-bold text-red-700">删除线索</h2>
              <p className="mt-1 text-sm text-gray-600">
                删除后无法恢复，但不会删除已经关联的博客文章。
              </p>
            </div>
            <button
              type="submit"
              className="rounded-full border border-red-300 px-6 py-3 text-sm font-semibold text-red-700 hover:bg-red-50"
            >
              删除 Reddit 线索
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
