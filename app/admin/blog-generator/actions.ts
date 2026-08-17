"use server";

import { revalidatePath } from "next/cache";

import {
  generateBlogDraftFromKeyword,
} from "@/lib/ai/blog-generator";

export async function generateBlogDraftAction(
  formData: FormData
) {
  const keyword =
    formData.get("keyword")?.toString().trim() ?? "";

  const language =
    formData.get("language")?.toString() ?? "zh";

  const pillar =
    formData.get("pillar")?.toString() ?? "recovery";

  const targetSite =
    formData.get("targetSite")?.toString() ?? "jiahuameal";

  if (!keyword) {
    throw new Error("请输入关键词");
  }

  await generateBlogDraftFromKeyword({
    keyword,
    language: language as "zh" | "en",
    pillar: pillar as any,
    targetSite: targetSite as any,
  });

  revalidatePath("/admin/blog");
  revalidatePath("/admin/blog-generator");
}