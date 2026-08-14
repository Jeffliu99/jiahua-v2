import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "./ContactForm";
import OrderingProcess from "@/components/contact/OrderingProcess";
import ConsultationPrep from "@/components/contact/ConsultationPrep";
import DirectContactCards from "@/components/contact/DirectContactCards";
import QRContactCards from "@/components/contact/QRContactCards";
import ContactShare from "@/components/contact/ContactShare";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "预约咨询｜加华月子餐",
  description:
    "预约加华月子餐营养顾问，了解适合您的产后月子餐方案、配送范围与营养支持服务。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="告诉我们您的需要，我们尽快为您匹配合适方案。"
        description="填写表单后，加华月子餐会根据您的生产阶段、所在区域与服务需求，尽快与您联系。"
        height="md"
      />

      <OrderingProcess />
      <ConsultationPrep />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Contact Form
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                预约营养顾问
              </h2>
              <p className="mt-5 leading-8 text-gray-600">
                请填写基本信息，我们会根据您的预产期、所在城市、恢复需求与配送安排，为您提供更合适的方案建议。
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="space-y-8">
            <DirectContactCards />
            <QRContactCards />
          </aside>
        </div>
      </section>

      <ContactShare />
      <ContactCTA />
    </>
  );
}
