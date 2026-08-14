import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQClient from "@/components/faq/FAQClient";
import FAQSchema from "@/components/faq/FAQSchema";
import OrderingProcessFAQ from "@/components/faq/OrderingProcessFAQ";
import FAQShare from "@/components/faq/FAQShare";
import FAQCTA from "@/components/faq/FAQCTA";

export const metadata: Metadata = {
  title: "常见问题｜加华月子餐",
  description:
    "加华月子餐常见问题，涵盖预订、套餐价格、配送范围、菜单营养、忌口定制、付款订单和咨询方式，帮助 GTA 家庭快速了解服务。",
};

export default function FAQPage() {
  return (
    <>
      <FAQSchema />

      <PageHero
        eyebrow="常见问题"
        title="关于月子餐，您关心的问题都在这里。"
        description="整理加华月子餐预订、配送、菜单、营养、付款和预约咨询相关问题，帮助 GTA 家庭更清楚地了解服务。"
        height="md"
      />

      <OrderingProcessFAQ />
      <FAQClient />
      <FAQShare />
      <FAQCTA />
    </>
  );
}
