import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import BrandStory from "@/components/about/BrandStory";
import RealWorkPhotos from "@/components/about/RealWorkPhotos";
import HowWeWork from "@/components/about/HowWeWork";
import AboutShare from "@/components/about/AboutShare";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "关于加华｜加华月子餐",
  description:
    "了解加华月子餐的品牌理念、服务初心与产后营养支持方式，为 GTA 华人家庭提供安心月子餐服务。",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <RealWorkPhotos />
      <HowWeWork />
      <AboutShare />
      <AboutCTA />
    </>
  );
}
