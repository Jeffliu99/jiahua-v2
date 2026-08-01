import Link from "next/link";
import Image from "next/image";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

function formatDate(date: Date | null) {
  if (!date) return "-";

  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

function formatDateTime(date: Date | null) {
  if (!date) return "-";

  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

async function deleteBlogPost(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));

  if (!id) return;

  await prisma.blogPost.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
}

export default async function AdminBlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ created?: string; error?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const created = params?.created === "1";

  const posts = await prisma.blogPost.findMany({
    include: {
      category: true,
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });

  const publishedCount = posts.filter((post) => post.status === "published").length;
  const draftCount = posts.filter((post) => post.status === "draft").length;

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 font-sans md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-[#B8915D]">
              Blog 后台管理
            </div>
            <h1 className="text-3xl font-bold text-[#1F4E4C] md:text-4xl">
              文章管理
            </h1>
            <p className="mt-3 text-gray-600">
              管理 Blog 文章、发布状态、分类、封面图和前台显示内容。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/blog"
              className="inline-flex justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              查看前台 Blog
            </Link>

            <Link
              href="/admin/blog/new"
              className="inline-flex justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173D3B]"
            >
              新增文章
            </Link>
          </div>
        </div>

        {created && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            文章保存成功。
          </div>
        )}

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#B8915D]">全部文章</div>
            <div className="mt-3 text-3xl font-bold text-[#1F4E4C]">
              {posts.length}
            </div>
          </div>

          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#B8915D]">已发布</div>
            <div className="mt-3 text-3xl font-bold text-[#1F4E4C]">
              {publishedCount}
            </div>
          </div>

          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#B8915D]">草稿</div>
            <div className="mt-3 text-3xl font-bold text-[#1F4E4C]">
              {draftCount}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-[#F0E8DD] bg-white shadow-sm">
          <div className="border-b border-[#F0E8DD] px-6 py-5 md:px-8">
            <h2 className="text-xl font-bold text-[#1F4E4C]">文章列表</h2>
            <p className="mt-1 text-sm text-gray-500">
              现在可以直接点击“编辑”进入富文本编辑页面。
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="px-6 py-12 text-center md:px-8">
              <div className="text-xl font-bold text-[#1F4E4C]">
                目前还没有文章
              </div>
              <p className="mt-3 text-gray-600">
                点击“新增文章”发布第一篇 Blog。
              </p>
              <Link
                href="/admin/blog/new"
                className="mt-6 inline-flex justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
              >
                新增文章
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-[#FAF8F5] text-[#1F4E4C]">
                  <tr>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">封面</th>
                    <th className="min-w-[280px] px-6 py-4 font-bold">文章</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">分类</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">状态</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">发布时间</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">创建时间</th>
                    <th className="whitespace-nowrap px-6 py-4 font-bold">操作</th>
                  </tr>
                </thead>

                <tbody>
                  {posts.map((post) => (
                    <tr
                      key={post.id}
                      className="border-t border-[#F0E8DD] align-top transition hover:bg-[#FAF8F5]"
                    >
                      <td className="px-6 py-5">
                        {post.coverImage ? (
                          <div className="relative h-20 w-28 overflow-hidden rounded-2xl border border-[#F0E8DD] bg-[#EFE7DA]">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover"
                              sizes="112px"
                            />
                          </div>
                        ) : (
                          <div className="flex h-20 w-28 items-center justify-center rounded-2xl border border-[#F0E8DD] bg-[#EFE7DA] text-xs font-semibold text-[#1F4E4C]">
                            无封面
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-5">
                        <div className="font-bold leading-6 text-[#1F4E4C]">
                          {post.title}
                        </div>
                        <div className="mt-2 max-w-xl text-xs text-gray-500">
                          /blog/{post.slug}
                        </div>
                        {post.excerpt && (
                          <div className="mt-3 line-clamp-2 max-w-xl text-gray-600">
                            {post.excerpt}
                          </div>
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <span className="rounded-full bg-[#FAF8F5] px-3 py-1.5 text-xs font-semibold text-[#B8915D]">
                          {post.category?.name ?? "未分类"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        {post.status === "published" ? (
                          <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                            已发布
                          </span>
                        ) : (
                          <span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                            草稿
                          </span>
                        )}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-gray-600">
                        {formatDate(post.publishedAt)}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5 text-gray-600">
                        {formatDateTime(post.createdAt)}
                      </td>

                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex flex-col gap-2">
                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}`}
                              className="inline-flex justify-center rounded-full border border-[#D6B37F] px-4 py-2 text-xs font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
                            >
                              查看
                            </Link>
                          )}

                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="inline-flex justify-center rounded-full border border-[#D6B37F] bg-white px-4 py-2 text-xs font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
                          >
                            编辑
                          </Link>

                          <form action={deleteBlogPost}>
                            <input type="hidden" name="id" value={post.id} />
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                            >
                              删除
                            </button>
                          </form>
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
