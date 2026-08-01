import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import RichTextEditor from "@/components/admin/RichTextEditor";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type EditBlogPostPageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<{
    error?: string;
    updated?: string;
  }>;
};

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

async function updateBlogPost(formData: FormData) {
  "use server";

  const id = Number(formData.get("id"));
  const title = String(formData.get("title") || "").trim();
  const rawSlug = String(formData.get("slug") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const content = String(formData.get("content") || "").trim();
  const status = String(formData.get("status") || "draft");
  const categoryIdValue = String(formData.get("categoryId") || "").trim();
  const isFeatured = formData.get("isFeatured") === "on";
  const removeCoverImage = formData.get("removeCoverImage") === "on";
  const coverFile = formData.get("coverImageFile");

  if (!id || !title || !content) {
    redirect(`/admin/blog/${id || ""}/edit?error=missing-required-fields`);
  }

  const existingPost = await prisma.blogPost.findUnique({
    where: {
      id,
    },
  });

  if (!existingPost) {
    redirect("/admin/blog?error=not-found");
  }

  const slug = rawSlug ? makeSlug(rawSlug) : makeSlug(title);
  const oldSlug = existingPost.slug;
  const categoryId = categoryIdValue ? Number(categoryIdValue) : null;

  let coverImage: string | null = existingPost.coverImage;

  try {
    if (removeCoverImage) {
      coverImage = null;
    }

    if (coverFile instanceof File && coverFile.size > 0) {
      coverImage = await uploadCoverImage(coverFile, slug);
    }
  } catch (error) {
    console.error("Cover image upload failed:", error);
    redirect(`/admin/blog/${id}/edit?error=upload-failed`);
  }

  let publishedAt = existingPost.publishedAt;

  if (status === "published" && !publishedAt) {
    publishedAt = new Date();
  }

  if (status === "draft") {
    publishedAt = null;
  }

  try {
    await prisma.blogPost.update({
      where: {
        id,
      },
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
    console.error("Update blog post failed:", error);
    redirect(`/admin/blog/${id}/edit?error=update-failed`);
  }

  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}/edit`);
  revalidatePath("/blog");
  revalidatePath(`/blog/${oldSlug}`);
  revalidatePath(`/blog/${slug}`);

  redirect(`/admin/blog/${id}/edit?updated=1`);
}

function getErrorMessage(error?: string) {
  if (error === "missing-required-fields") {
    return "标题和正文不能为空。";
  }

  if (error === "upload-failed") {
    return "封面图上传失败。请确认图片是 JPG、PNG、WEBP 或 GIF，且大小不超过 5MB。";
  }

  if (error === "update-failed") {
    return "文章更新失败。请检查 Slug 是否重复，或稍后再试。";
  }

  return "操作失败，请稍后再试。";
}

export default async function EditBlogPostPage({
  params,
  searchParams,
}: EditBlogPostPageProps) {
  const { id } = await params;
  const pageParams = searchParams ? await searchParams : {};
  const error = pageParams?.error;
  const updated = pageParams?.updated === "1";
  const postId = Number(id);

  if (!postId) {
    notFound();
  }

  const [post, categories] = await Promise.all([
    prisma.blogPost.findUnique({
      where: {
        id: postId,
      },
      include: {
        category: true,
      },
    }),
    prisma.blogCategory.findMany({
      orderBy: {
        id: "asc",
      },
    }),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] px-6 py-10 font-sans md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 text-sm font-semibold text-[#B8915D]">
              Blog 后台管理
            </div>
            <h1 className="text-3xl font-bold text-[#1F4E4C] md:text-4xl">
              编辑 Blog 文章
            </h1>
            <p className="mt-3 text-gray-600">
              支持基础富文本排版、修改分类、发布状态和替换封面图。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {post.status === "published" && (
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
              >
                查看前台文章
              </Link>
            )}
            <Link
              href="/admin/blog"
              className="inline-flex justify-center rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173D3B]"
            >
              返回文章管理
            </Link>
          </div>
        </div>

        {updated && (
          <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            文章更新成功。
          </div>
        )}

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-semibold text-red-700">
            {getErrorMessage(error)}
          </div>
        )}

        <form
          action={updateBlogPost}
          encType="multipart/form-data"
          className="rounded-3xl border border-[#F0E8DD] bg-white p-6 shadow-sm md:p-8"
        >
          <input type="hidden" name="id" value={post.id} />

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
                  defaultValue={post.title}
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
                  required
                  defaultValue={post.slug}
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                />
                <p className="mt-2 text-xs text-gray-500">
                  修改 Slug 后，文章前台链接也会改变。
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  文章摘要
                </label>
                <textarea
                  name="excerpt"
                  rows={4}
                  defaultValue={post.excerpt ?? ""}
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  文章正文 <span className="text-red-500">*</span>
                </label>
                <RichTextEditor name="content" defaultValue={post.content} />
                <p className="mt-2 text-xs text-gray-500">
                  可使用标题、加粗、斜体、列表、引用和链接。保存后正文会以 HTML 格式存入数据库。
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
                  defaultValue={post.categoryId ?? ""}
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F]"
                >
                  <option value="">请选择分类</option>
                  {categories.map((category) => (
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
                  defaultValue={post.status}
                  className="w-full rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-[#1F4E4C] outline-none transition focus:border-[#D6B37F]"
                >
                  <option value="draft">草稿</option>
                  <option value="published">发布</option>
                </select>
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <div className="mb-3 text-sm font-semibold text-[#1F4E4C]">
                  当前封面图
                </div>

                {post.coverImage ? (
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-2xl border border-[#F0E8DD] bg-[#EFE7DA]">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-[4/3] items-center justify-center rounded-2xl border border-[#F0E8DD] bg-[#EFE7DA] text-sm font-semibold text-[#1F4E4C]">
                    暂无封面图
                  </div>
                )}

                <label className="mb-2 block text-sm font-semibold text-[#1F4E4C]">
                  替换封面图
                </label>
                <input
                  name="coverImageFile"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="w-full rounded-2xl border border-dashed border-[#D6B37F] bg-white px-4 py-3 text-sm text-[#1F4E4C] file:mr-4 file:rounded-full file:border-0 file:bg-[#1F4E4C] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#173D3B]"
                />
                <p className="mt-2 text-xs text-gray-500">
                  支持 JPG、PNG、WEBP、GIF，最大 5MB。选择新图片后保存即可替换。
                </p>

                {post.coverImage && (
                  <label className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-red-600">
                    <input name="removeCoverImage" type="checkbox" />
                    移除当前封面图
                  </label>
                )}
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                <label className="flex items-center gap-3 text-sm font-semibold text-[#1F4E4C]">
                  <input
                    name="isFeatured"
                    type="checkbox"
                    defaultChecked={post.isFeatured}
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
              保存修改
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
