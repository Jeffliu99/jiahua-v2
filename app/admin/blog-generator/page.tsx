import { BLOG_KEYWORDS } from "@/data/blog-keywords";
import { generateBlogDraftAction } from "./actions";

export const dynamic = "force-dynamic";

export default function BlogGeneratorPage() {
  const categories = Object.entries(BLOG_KEYWORDS);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F4E4C]">
          AI Blog Generator
        </h1>

        <p className="mt-2 text-gray-600">
          根据关键词自动生成 Blog Draft 并保存到 CMS。
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <form action={generateBlogDraftAction}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                关键词
              </label>

              <input
                name="keyword"
                required
                placeholder="例如：加拿大坐月子吃什么"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                网站
              </label>

              <select
                name="targetSite"
                className="w-full rounded-lg border px-4 py-3"
                defaultValue="jiahuameal"
              >
                <option value="jiahuameal">JiahuaMeal</option>
                <option value="yuezicanada">Yuezicanada</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                语言
              </label>

              <select
                name="language"
                className="w-full rounded-lg border px-4 py-3"
                defaultValue="zh"
              >
                <option value="zh">中文</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                内容分类
              </label>

              <select
                name="pillar"
                className="w-full rounded-lg border px-4 py-3"
                defaultValue="recovery"
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
            className="mt-6 rounded-lg bg-[#1F4E4C] px-6 py-3 font-medium text-white hover:bg-[#173D3B]"
          >
            生成博客草稿
          </button>
        </form>
      </div>

      <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">推荐关键词</h2>

        {categories.map(([group, keywords]) => (
          <div key={group} className="mb-6">
            <h3 className="mb-3 font-semibold capitalize">{group}</h3>

            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword) => (
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
    </main>
  );
}
