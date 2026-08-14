import Image from "next/image";
import Link from "next/link";

export default function CustomPlanSection() {
  return (
    <section className="py-20"><div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center"><div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] bg-white shadow-sm"><Image src="/images/hero/hero-premium-eel-postpartum-meal-card-4x3.jpg" alt="加华月子餐高端定制方案展示" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Custom Support</p><h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">根据恢复阶段与家庭需求搭配</h2><p className="mt-6 leading-8 text-gray-600">每位妈妈的生产方式、恢复节奏、哺乳情况和口味偏好都不同。我们会根据咨询信息，协助了解更适合的月子餐方案。</p><Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">预约营养顾问</Link></div></div></section>
  );
}
