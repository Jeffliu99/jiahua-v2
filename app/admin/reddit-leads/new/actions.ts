"use server";

import { RedditLeadStatus } from "@prisma/client";
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

export async function createRedditLeadAction(formData: FormData) {
  const title = formData.get("title")?.toString().trim() || "";
  const url = formData.get("url")?.toString().trim() || "";
  const subreddit = formData.get("subreddit")?.toString().trim() || "";

  if (!title || !url || !subreddit) {
    redirect("/admin/reddit-leads/new?error=missing");
  }

  try {
    new URL(url);
  } catch {
    redirect("/admin/reddit-leads/new?error=url");
  }

  const existing = await prisma.redditLead.findUnique({
    where: { url },
    select: { id: true },
  });

  if (existing) {
    redirect(`/admin/reddit-leads/${existing.id}/edit?duplicate=1`);
  }

  const lead = await prisma.redditLead.create({
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
      keyword: optionalText(formData, "keyword"),
      city: optionalText(formData, "city"),
      category: optionalText(formData, "category"),
      notes: optionalText(formData, "notes"),
      status: RedditLeadStatus.NEW,
    },
  });

  redirect(`/admin/reddit-leads/${lead.id}/edit?created=1`);
}
