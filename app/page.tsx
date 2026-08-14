import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import HeroActionCard from "@/components/home/HeroActionCard";
import BrandVideo from "@/components/home/BrandVideo";
import Highlights from "@/components/home/Highlights";
import FeaturedMeal from "@/components/home/FeaturedMeal";
import PhotoGallery from "@/components/home/PhotoGallery";
import ServicesPreview from "@/components/home/ServicesPreview";
import ServiceAreas from "@/components/home/ServiceAreas";
import NutritionSection from "@/components/home/NutritionSection";
import Stories from "@/components/home/Stories";
import ShareSection from "@/components/home/ShareSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "加华月子餐｜GTA专业产后营养支持与月子餐服务",
  description:
    "加华月子餐为大多伦多地区华人家庭提供专业产后营养支持、阶段化月子餐方案与贴心配送服务，陪伴妈妈安心度过产后恢复期。",
};

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Jiahua Postpartum Meals"
        title="为新生命而喜悦，为妈妈的恢复而用心。"
        description="融合传统产后调理智慧与现代营养科学，为 GTA 华人家庭提供月子餐、营养支持与贴心配送服务。"
        height="lg"
      />

      <HeroActionCard />
      <BrandVideo />
      <Highlights />
      <FeaturedMeal />
      <PhotoGallery />
      <ServicesPreview />
      <ServiceAreas />
      <NutritionSection />
      <Stories />
      <ShareSection />
      <CTASection />
    </>
  );
}
