"use server";

import { RedditLeadStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function optionalText(formData: FormData, name: string) {
  const value = formData.get(name)?.toString().trim();
  return value || null;
}

function numberValue(formData: FormData, name: string, fallback = 0) {
  const value = Number(formData.get(name));
  return Number.isFinite(value) ? value : fallback;
}

function scoreValue(formData: FormData, name: string) {
  return Math.min(10, Math.max(0, numberValue(formData, name)));
}

export async function updateRedditLeadAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title")?.toString().trim() || "";
  const url = formData.get("url")?.toString().trim() || "";
  const subreddit = formData.get("subreddit")?.toString().trim() || "";
  const statusValue = formData.get("status")?.toString() || "NEW";

  if (!id || !title || !url || !subreddit) {
    redirect(`/admin/reddit-leads/${id}/edit?error=missing`);
  }

  try {
    new URL(url);
  } catch {
    redirect(`/admin/reddit-leads/${id}/edit?error=url`);
  }

  const duplicate = await prisma.redditLead.findFirst({
    where: {
      url,
      NOT: { id },
    },
    select: { id: true },
  });

  if (duplicate) {
    redirect(`/admin/reddit-leads/${id}/edit?error=duplicate`);
  }

  const status = Object.values(RedditLeadStatus).includes(
    statusValue as RedditLeadStatus
  )
    ? (statusValue as RedditLeadStatus)
    : RedditLeadStatus.NEW;

  await prisma.redditLead.update({
    where: { id },
    data: {
      title,
      url,
      subreddit: subreddit.replace(/^r\//i, ""),
      author: optionalText(formData, "author")?.replace(/^u\//i, "") || null,
      upvotes: Math.max(0, numberValue(formData, "upvotes")),
      commentCount: Math.max(0, numberValue(formData, "commentCount")),
      intentScore: scoreValue(formData, "intentScore"),
      matchScore: scoreValue(formData, "matchScore"),
      problemSummary: optionalText(formData, "problemSummary"),
      aiAnalysis: optionalText(formData, "aiAnalysis"),
      replyDraft: optionalText(formData, "replyDraft"),
      finalReply: optionalText(formData, "finalReply"),
      keyword: optionalText(formData, "keyword"),
      city: optionalText(formData, "city"),
      category: optionalText(formData, "category"),
      notes: optionalText(formData, "notes"),
      status,
      repliedAt:
        status === RedditLeadStatus.REPLIED
          ? new Date()
          : status === RedditLeadStatus.NEW
            ? null
            : undefined,
    },
  });

  revalidatePath("/admin/reddit-leads");
  revalidatePath(`/admin/reddit-leads/${id}/edit`);
  redirect(`/admin/reddit-leads/${id}/edit?updated=1`);
}

export async function deleteRedditLeadAction(formData: FormData) {
  const id = Number(formData.get("id"));
  if (!id) redirect("/admin/reddit-leads");

  await prisma.redditLead.delete({ where: { id } });
  revalidatePath("/admin/reddit-leads");
  redirect("/admin/reddit-leads?deleted=1");
}
