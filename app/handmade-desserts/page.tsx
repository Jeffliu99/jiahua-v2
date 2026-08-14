import type { Metadata } from "next";
import DessertsHero from "@/components/desserts/DessertsHero";
import DessertOverview from "@/components/desserts/DessertOverview";
import DessertCategories from "@/components/desserts/DessertCategories";
import DessertGallery from "@/components/desserts/DessertGallery";
import BestSellers from "@/components/desserts/BestSellers";
import GiftBoxSection from "@/components/desserts/GiftBoxSection";
import CorporateOrders from "@/components/desserts/CorporateOrders";
import DessertFAQ from "@/components/desserts/DessertFAQ";
import DessertSchema from "@/components/desserts/DessertSchema";
import DessertShare from "@/components/desserts/DessertShare";
import DessertCTA from "@/components/desserts/DessertCTA";

export const metadata: Metadata = {
  title: "加华手作甜品｜Toronto Handmade Desserts",
  description:
    "加华手作甜品提供蛋糕卷、甜品杯、现烤蛋挞、提拉米苏、抹茶大福、曲奇与节日礼盒，适合家庭聚会、生日派对、下午茶与企业团购。",
};

export default function HandmadeDessertsPage() {
  return (
    <>
      <DessertSchema />
      <DessertsHero />
      <DessertOverview />
      <DessertCategories />
      <DessertGallery />
      <BestSellers />
      <GiftBoxSection />
      <CorporateOrders />
      <DessertFAQ />
      <DessertShare />
      <DessertCTA />
    </>
  );
}
