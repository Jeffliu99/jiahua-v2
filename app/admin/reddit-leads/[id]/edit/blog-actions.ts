"use server";

import { RedditLeadStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateBlogDraftFromKeyword } from "@/lib/ai/blog-generator";
import type { BlogContentPillar } from "@/lib/ai/blog-prompt";
import { prisma } from "@/lib/prisma";

function categoryToPillar(category: string | null): BlogContentPillar {
  switch (category) {
    case "POSTPARTUM_MEALS":
      return "nutrition";
    case "BREASTFEEDING":
    case "MILK_SUPPLY":
      return "breastfeeding";
    case "NEWBORN_CARE":
    case "SLEEP":
      return "babycare";
    case "CONFINEMENT":
      return "traditions";
    case "RECOVERY":
    case "C_SECTION":
    case "MENTAL_HEALTH":
    case "GENERAL":
    default:
      return "recovery";
  }
}

export async function generateBlogFromLeadAction(formData: FormData) {
  const leadId = Number(formData.get("leadId"));

  if (!Number.isInteger(leadId) || leadId <= 0) {
    redirect("/admin/reddit-leads?error=invalid-lead");
  }

  const lead = await prisma.redditLead.findUnique({
    where: { id: leadId },
    select: {
      id: true,
      title: true,
      keyword: true,
      problemSummary: true,
      category: true,
      blogPostId: true,
    },
  });

  if (!lead) {
    redirect("/admin/reddit-leads?error=not-found");
  }

  if (lead.blogPostId) {
    redirect(`/admin/reddit-leads/${lead.id}/edit?error=blog-exists`);
  }

  const keyword =
    lead.keyword?.trim() ||
    lead.problemSummary?.trim() ||
    lead.title.trim();

  try {
    const result = await generateBlogDraftFromKeyword({
      keyword,
      language: "zh",
      pillar: categoryToPillar(lead.category),
      targetSite: "jiahuameal",
      generateCover: true,
    });

    await prisma.redditLead.update({
      where: { id: lead.id },
      data: {
        blogPostId: result.blogPost.id,
        status: RedditLeadStatus.BLOG_CREATED,
      },
    });

    revalidatePath("/admin/reddit-leads");
    revalidatePath(`/admin/reddit-leads/${lead.id}/edit`);
    revalidatePath("/admin/blog");

    redirect(`/admin/reddit-leads/${lead.id}/edit?blog=created`);
  } catch (error) {
    console.error("Generate blog from Reddit lead failed:", error);
    redirect(`/admin/reddit-leads/${lead.id}/edit?error=blog-generation`);
  }
}
