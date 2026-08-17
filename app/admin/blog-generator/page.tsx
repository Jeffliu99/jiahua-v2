import Link from "next/link";
import { BLOG_KEYWORDS } from "@/data/blog-keywords";
import BlogGeneratorClient from "@/components/admin/BlogGeneratorClient";

export const dynamic = "force-dynamic";

export default function BlogGeneratorPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1F4E4C]">
            AI Blog Generator
          </h1>
          <p className="mt-2 text-gray-600">
            根据关键词自动生成 Blog Draft 并保存到 CMS。
          </p>
        </div>

        <Link
          href="/admin/blog"
          className="rounded-full border border-[#1F4E4C] px-5 py-2 text-sm font-medium text-[#1F4E4C] hover:bg-[#1F4E4C] hover:text-white"
        >
          返回博客管理
        </Link>
      </div>

      <BlogGeneratorClient keywords={BLOG_KEYWORDS} />
    </main>
  );
}
