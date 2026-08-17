"use client";

import { useState } from "react";
import BlogGenerationProgress from "@/components/admin/BlogGenerationProgress";

type BlogKeywords = Record<string, readonly string[]>;

export default function BlogGeneratorClient({
  keywords,
}: {
  keywords: BlogKeywords;
}) {
  const [queueId, setQueueId] = useState<number | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const categories = Object.entries(keywords);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setQueueId(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/admin/blog-generator/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        keyword: formData.get("keyword")?.toString() || "",
        targetSite: formData.get("targetSite")?.toString() || "jiahuameal",
        language: formData.get("language")?.toString() || "zh",
        pillar: formData.get("pillar")?.toString() || "recovery",
        generateCover: true,
      }),
    });

    setSubmitting(false);

    if (!response.ok) {
      alert("创建生成任务失败");
      return;
    }

    const json = await response.json();
    setQueueId(json.queueId);
  }

  return (
    <>
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">关键词</label>
              <input
                name="keyword"
                required
                className="w-full rounded-lg border px-4 py-3"
                placeholder="例如：加拿大坐月子吃什么"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">网站</label>
              <select
                name="targetSite"
                defaultValue="jiahuameal"
                className="w-full rounded-lg border px-4 py-3"
              >
                <option value="jiahuameal">JiahuaMeal</option>
                <option value="yuezicanada">Yuezicanada</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">语言</label>
              <select
                name="language"
                defaultValue="zh"
                className="w-full rounded-lg border px-4 py-3"
              >
                <option value="zh">中文</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">内容分类</label>
              <select
                name="pillar"
                defaultValue="recovery"
                className="w-full rounded-lg border px-4 py-3"
              >
                <option value="recovery">产后恢复</option>
                <option value="nutrition">营养食谱</option>
                <option value="breastfeeding">哺乳知识</option>
                <option value="babycare">新生儿护理</option>
                <option value="traditions">传统坐月子</option>
                <option value="stories">客户故事</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 rounded-lg bg-[#1F4E4C] px-6 py-3 font-medium text-white disabled:bg-gray-400"
          >
            {submitting ? "正在创建任务..." : "生成博客草稿"}
          </button>
        </form>

        <BlogGenerationProgress queueId={queueId} />
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">推荐关键词</h2>

        {categories.map(([group, groupKeywords]) => (
          <div key={group} className="mb-6">
            <h3 className="mb-3 font-semibold capitalize">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {groupKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
