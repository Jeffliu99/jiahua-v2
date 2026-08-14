import type { Metadata } from "next";

import PageHero from "@/components/PageHero";
import SharePanel from "@/components/SharePanel";
import ServiceCategoryGrid from "@/components/services-hub/ServiceCategoryGrid";
import WhyChooseJiahua from "@/components/services-hub/WhyChooseJiahua";
import BookingProcess from "@/components/services-hub/BookingProcess";
import ServiceHubFAQ from "@/components/services-hub/ServiceHubFAQ";
import ServiceHubCTA from "@/components/services-hub/ServiceHubCTA";
import ServiceHubSchema from "@/components/services-hub/ServiceHubSchema";

export const metadata: Metadata = {
  title:
    "GTA专业营养餐服务｜月子餐、小产调理餐、家庭营养餐｜加华月子餐",

  description:
    "加华月子餐为 GTA 华人家庭提供月子餐、剖腹产恢复餐、哺乳期营养餐、小产调理餐、家庭营养餐、高端定制及团体订餐服务。",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <ServiceHubSchema />

      <PageHero
        eyebrow="Services"
        title="从产后恢复到家庭营养 一站式专业餐食服务"
        description="月子餐、剖腹产恢复餐、哺乳期营养餐、小产调理餐与家庭营养餐，帮助 GTA 华人家庭减少备餐压力，享受更安心的营养支持。"
        backgroundImage="/images/hero/hero-mother-baby-meal.jpg"
        height="lg"
        primaryButton={{
          text: "立即咨询",
          href: "/contact",
        }}
        secondaryButton={{
          text: "查看服务方案",
          href: "#service-categories",
        }}
      />

      <ServiceCategoryGrid />
      <WhyChooseJiahua />
      <BookingProcess />
      <ServiceHubFAQ />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Share
            </p>
            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              分享给家人朋友
            </h2>
            <p className="mt-4 leading-8 text-gray-600">
              如果这些服务对您有帮助，欢迎分享给正在备产、产后恢复或需要营养餐支持的家人朋友。
            </p>
          </div>
          <SharePanel title="专业营养餐服务｜加华月子餐" />
        </div>
      </section>

      <ServiceHubCTA />
    </main>
  );
}
