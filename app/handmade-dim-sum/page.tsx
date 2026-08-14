import type { Metadata } from "next";

import DimSumHero from "@/components/dim-sum/DimSumHero";
import DimSumOverview from "@/components/dim-sum/DimSumOverview";
import DimSumCategories from "@/components/dim-sum/DimSumCategories";
import BestSellerSection from "@/components/dim-sum/BestSellerSection";
import BreakfastComboSection from "@/components/dim-sum/BreakfastComboSection";
import FamilyPackSection from "@/components/dim-sum/FamilyPackSection";
import CateringSection from "@/components/dim-sum/CateringSection";
import DimSumFAQ from "@/components/dim-sum/DimSumFAQ";
import DimSumSchema from "@/components/dim-sum/DimSumSchema";
import DimSumShare from "@/components/dim-sum/DimSumShare";
import DimSumCTA from "@/components/dim-sum/DimSumCTA";

export const metadata: Metadata = {
  title: "加华手工面点 | Handmade Dim Sum Toronto",
  description:
    "Toronto Handmade Dim Sum，包括鲜肉包、烧麦、花卷、特色馒头、鲜肉烧饼和牛肉烧饼，适合早餐、家庭聚餐、社区团购和企业活动。",
};

export default function HandmadeDimSumPage() {
  return (
    <>
      <DimSumSchema />
      <DimSumHero />
      <DimSumOverview />
      <DimSumCategories />
      <BestSellerSection />
      <BreakfastComboSection />
      <FamilyPackSection />
      <CateringSection />
      <DimSumFAQ />
      <DimSumShare />
      <DimSumCTA />
    </>
  );
}
