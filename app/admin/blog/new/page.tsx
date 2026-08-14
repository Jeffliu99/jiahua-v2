import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function makeSlug(input: string) {
  const base = input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return base || `blog-${Date.now()}`;
}

function getSafeImageExtension(fileName: string, fileType: string) {
  const originalExt = path.extname(fileName).toLowerCase();

  if ([".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(originalExt)) {
    return originalExt;
  }

  if (fileType === "image/jpeg") return ".jpg";
  if (fileType === "image/png") return ".png";
  if (fileType === "image/webp") return ".webp";
  if (fileType === "image/gif") return ".gif";

  return "";
}

async function uploadCoverImage(file: File, slug: string) {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    throw new Error("invalid-file-type");
  }

  if (file.size > maxSize) {
    throw new Error("file-too-large");
  }

  const ext = getSafeImageExtension(file.name, file.type);

  if (!ext) {
    throw new Error("invalid-file-extension");
  }

  const uploadDir = path.join(process.cwd(), "public", "images", "blog");
  await mkdir(uploadDir, { recursive: true });

  const safeSlug = makeSlug(slug);
  const fileName = `${safeSlug}-${randomUUID()}${ext}`;
  const filePath = path.join(uploadDir, fileName);

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await writeFile(filePath, buffer);

  return `/images/blog/${fileName}`;
}

async function createBlogPost(formData: FormData) {
  "use server";

  const title = String(formData.get("title") || "").trim();
  const rawSlug = String(formData.get("slug") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const status = String(formData.get("status") || "draft");
  const categoryIdValue = String(formData.get("categoryId") || "").trim();
  const isFeatured = formData.get("isFeatured") === "on";
  const coverFile = formData.get("coverImageFile");

  if (!title || !content) {
    redirect("/admin/blog/new?error=missing-required-fields");
  }

  const slug = rawSlug ? makeSlug(rawSlug) : makeSlug(title);
  const categoryId = categoryIdValue ? Number(categoryIdValue) : null;
  const publishedAt = status === "published" ? new Date() : null;

  let coverImage: string | null = null;

  try {
    if (coverFile instanceof File && coverFile.size > 0) {
      coverImage = await uploadCoverImage(coverFile, slug);
    }
  } catch (error) {
    console.error("Cover image upload failed:", error);
    redirect("/admin/blog/new?error=upload-failed");
  }

  try {
    await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage,
        status,
        isFeatured,
        publishedAt,
        categoryId,
      },
    });
  } catch (error) {
    console.error("Create blog post failed:", error);
    redirect("/admin/blog/new?error=create-failed");
  }

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin/blog?created=1");
}

function getErrorMessage(error?: string) {
  if (error === "missing-required-fields") {
    return "标题和正文不能为空。";
  }

  if (error === "upload-failed") {
    return "封面图上传失败。请确认图片是 JPG、PNG、WEBP 或 GIF，且大小不超过 5MB。";
  }

  if (error === "create-failed") {
    return "文章保存失败。请检查 Slug 是否重复，或稍后再试。";
  }

  return "操作失败，请稍后再试。";
}

export default async function NewBlogPostPage({
  searchParams,
}: {
  searchParams?: Promise<{ error?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const error = params?.error;

  const categories = await prisma.blogCategory.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 font-sans md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-[#B8915D]">
              Blog 后台管理
            </div>
            <h1 className="text-3xl font-bold text-[#1F4E4C] md:text-4xl">
              新增 Blog 文章
            </h1>
            <p className="mt-3 text-gray-600">
              支持富文本排版和上传封面图。新增后，前台 Blog 列表和详情页会自动读取内容。
            </p>
          </div>

          <Link
            href="/admin/blog"
            className="inline-flex justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
          >
            返回文章管理
          </Link>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            {getErrorMessage(error)}
          </div>
        )}

        <form
          action={createBlogPost}
          encType="multipart/form-data"
          className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  文章标题 <span className="text-red-500">*</span>
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  placeholder="例如：月子餐第二周怎么吃？"
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  Slug
                </label>
                <input
                  name="slug"
                  type="text"
                  placeholder="例如：postpartum-meal-week-2-guide"
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                />
                <p className="mt-2 text-xs text-gray-500">
                  建议填写英文 Slug，避免自动生成不理想。
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  文章摘要
                </label>
                <textarea
                  name="excerpt"
                  rows={4}
                  placeholder="写一段显示在 Blog 列表页和 SEO description 的摘要。"
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  文章正文 <span className="text-red-500">*</span>
                </label>
                <RichTextEditor name="content" defaultValue="" />
                <p className="mt-2 text-xs text-gray-500">
                  可使用标题、加粗、斜体、列表、引用和链接。保存后会以 HTML 格式存入数据库。
                </p>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  分类
                </label>
                <select
                  name="categoryId"
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F]"
                >
                  <option value="">请选择分类</option>
                    {categories.map((category: { id: number; name: string }) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  状态
                </label>
                <select
                  name="status"
                  defaultValue="draft"
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F]"
                >
                  <option value="draft">草稿</option>
                  <option value="published">发布</option>
                </select>
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  上传封面图
                </label>
                <input
                  name="coverImageFile"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="w-full rounded-2xl border border-dashed border-[#D6B37F] bg-white px-4 py-3 text-sm text-[#1F4E4C] file:mr-4 file:rounded-full file:border-0 file:bg-[#1F4E4C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#173D3B]"
                />
                <p className="mt-2 text-xs text-gray-500">
                  支持 JPG、PNG、WEBP、GIF，最大 5MB。
                </p>
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <label className="flex items-center gap-3 text-sm font-semibold text-[#1F4E4C]">
                  <input
                    name="isFeatured"
                    type="checkbox"
                    className="h-4 w-4 rounded border-[#D6B37F]"
                  />
                  设置为推荐文章
                </label>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/admin/blog"
              className="inline-flex justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              取消
            </Link>

            <button
              type="submit"
              className="inline-flex justify-center rounded-full bg-[#1F4E4C] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173D3B]"
            >
              保存文章
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
