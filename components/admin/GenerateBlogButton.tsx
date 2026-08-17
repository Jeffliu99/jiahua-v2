"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

export default function GenerateBlogButton() {
  const { pending } = useFormStatus();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!pending) {
      setProgress(0);
      return;
    }

    setProgress(5);

    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 90) return current;
        return current + 5;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [pending]);

  return (
    <div className="space-y-4">
      <button
        type="submit"
        disabled={pending}
        className={`
          rounded-lg px-6 py-3 font-medium text-white transition
          ${
            pending
              ? "cursor-not-allowed bg-gray-400"
              : "bg-[#1F4E4C] hover:bg-[#173D3B]"
          }
        `}
      >
        {pending ? "正在生成中..." : "生成博客草稿"}
      </button>

      {pending && (
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-blue-700">
              正在生成文章，请耐心等待...
            </span>

            <span className="text-sm font-bold text-blue-700">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <div>
              {progress >= 10 ? "✅" : "⏳"} 创建任务
            </div>

            <div>
              {progress >= 40 ? "✅" : "⏳"} AI生成文章
            </div>

            <div>
              {progress >= 70 ? "✅" : "⏳"} AI生成封面
            </div>

            <div>
              {progress >= 90 ? "✅" : "⏳"} 保存数据库
            </div>
          </div>
        </div>
      )}
    </div>
  );
}