import Image from "next/image";
import Link from "next/link";

export default function MealHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#153d3b]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home/featured-postpartum-meals.png"
          alt="加华月子餐高端套餐展示"
          fill
          priority
          className="object-cover opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#153d3b]/95 via-[#153d3b]/80 to-[#153d3b]/38" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">Meal Plans</p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">四阶段科学月子餐体系</h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">每日三餐三点、养生煲汤、新鲜水果、养生甜品、手工面点与现烤糕点，根据妈妈不同恢复阶段科学搭配。</p>
        <div className="mt-8 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"><p className="text-lg leading-8 text-white/95">加华月子餐深耕 GTA 华人市场，坚持每日现煮配送与分阶段月子餐理念，为产后家庭提供专业月子餐服务。</p></div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F4E4C] shadow-sm transition hover:bg-[#F7EDEA]">预约咨询</Link><a href="#weekly-menu" className="inline-flex justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">查看四阶段菜单</a></div>
      </div>
    </section>
  );
}
