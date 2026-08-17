"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface QueueStatus {
  id: number;
  status: string;
  progress: number;
  message: string;
  title?: string | null;
  slug?: string | null;
  blogPostId?: number | null;
}

export default function BlogGenerationProgress({
  queueId,
}: {
  queueId: number | null;
}) {
  const [data, setData] = useState<QueueStatus | null>(null);

  useEffect(() => {
    if (!queueId) return;

    let stopped = false;

    async function loadStatus() {
      const response = await fetch(`/api/admin/blog-generator/status?id=${queueId}`);
      if (!response.ok || stopped) return;

      const json = (await response.json()) as QueueStatus;
      setData(json);

      if (json.status === "generated" || json.status === "failed") {
        stopped = true;
      }
    }

    void loadStatus();
    const timer = setInterval(loadStatus, 2000);

    return () => {
      stopped = true;
      clearInterval(timer);
    };
  }, [queueId]);

  if (!queueId || !data) return null;

  return (
    <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-blue-700">{data.message}</span>
        <span className="text-sm font-bold text-blue-700">{data.progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-blue-100">
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${data.progress}%` }}
        />
      </div>

      <div className="mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
        <div>{data.progress >= 10 ? "✅" : "⏳"} 创建任务</div>
        <div>{data.progress >= 35 ? "✅" : "⏳"} AI 生成文章</div>
        <div>{data.progress >= 55 ? "✅" : "⏳"} 优化段落</div>
        <div>{data.progress >= 75 ? "✅" : "⏳"} 生成封面</div>
        <div>{data.progress >= 90 ? "✅" : "⏳"} 保存数据库</div>
        <div>{data.status === "generated" ? "✅" : "⏳"} 完成</div>
      </div>

      {data.status === "generated" && (
        <div className="mt-4 rounded-xl bg-green-50 p-4 text-sm text-green-700">
          <div className="font-semibold">文章生成完成。</div>
          <div className="mt-3 flex flex-wrap gap-3">
            {data.blogPostId && (
              <Link
                href={`/admin/blog/${data.blogPostId}/edit`}
                className="rounded-full bg-green-700 px-4 py-2 text-xs font-semibold text-white"
              >
                编辑文章
              </Link>
            )}
            <Link
              href="/admin/blog"
              className="rounded-full border border-green-700 px-4 py-2 text-xs font-semibold text-green-700"
            >
              返回博客管理
            </Link>
          </div>
        </div>
      )}

      {data.status === "failed" && (
        <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-700">
          文章生成失败，请查看服务器日志或 BlogGenerationQueue payload。
        </div>
      )}
    </div>
  );
}
