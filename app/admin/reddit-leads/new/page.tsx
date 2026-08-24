import Link from "next/link";
import { createRedditLeadAction } from "./actions";

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

export default async function NewRedditLeadPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const params = searchParams ? await searchParams : {};

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 md:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#B8915D]">
              Reddit Growth Engine
            </p>
            <h1 className="mt-2 text-3xl font-bold text-[#1F4E4C]">
              新增 Reddit 线索
            </h1>
            <p className="mt-3 text-gray-600">
              录入 Perplexity 找到的 Reddit 帖子，供后续 AI 分析、回复和博客生成使用。
            </p>
          </div>

          <Link
            href="/admin/reddit-leads"
            className="rounded-full border border-[#1F4E4C] bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#1F4E4C]"
          >
            返回线索管理
          </Link>
        </header>

        {params?.error === "missing" && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            请填写帖子标题、Reddit URL 和 Subreddit。
          </div>
        )}

        {params?.error === "url" && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            Reddit URL 格式不正确。
          </div>
        )}

        <form
          action={createRedditLeadAction}
          className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm md:p-8"
        >
          <section>
            <h2 className="text-xl font-bold text-[#1F4E4C]">帖子信息</h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">帖子标题 *</span>
                <input
                  name="title"
                  required
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="例如：Where can I get postpartum meal delivery in Toronto?"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">Reddit URL *</span>
                <input
                  name="url"
                  type="url"
                  required
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="https://www.reddit.com/r/..."
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">Subreddit *</span>
                <input
                  name="subreddit"
                  required
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="BabyBumps"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">作者</span>
                <input
                  name="author"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="用户名，可留空"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">Upvotes</span>
                <input
                  name="upvotes"
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">评论数</span>
                <input
                  name="commentCount"
                  type="number"
                  min="0"
                  defaultValue="0"
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
                  defaultValue="0"
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
                  defaultValue="0"
                  className="w-full rounded-xl border px-4 py-3"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">城市</span>
                <input
                  name="city"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Toronto"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold">分类</span>
                <select
                  name="category"
                  defaultValue="GENERAL"
                  className="w-full rounded-xl border px-4 py-3"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">目标关键词</span>
                <input
                  name="keyword"
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="postpartum meal delivery Toronto"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">问题摘要</span>
                <textarea
                  name="problemSummary"
                  rows={5}
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="简要说明用户的问题、需求以及现有回答为什么不充分。"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-semibold">内部备注</span>
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="仅供后台团队使用。"
                />
              </label>
            </div>
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
              保存线索
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
