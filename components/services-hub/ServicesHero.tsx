import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#153d3b]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero-mother-baby-meal.jpg"
          alt="加华月子餐专业营养餐服务"
          fill
          priority
          className="object-cover opacity-72"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#153d3b]/95 via-[#153d3b]/82 to-[#153d3b]/35" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 text-white md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
          Services
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          专业营养餐服务
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
          从月子餐、剖腹产恢复餐、哺乳期营养餐，到小产调理餐与家庭营养餐，加华为 GTA 华人家庭提供每日现煮、稳定配送的营养餐支持。
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F4E4C] shadow-sm transition hover:bg-[#F7EDEA]"
          >
            预约咨询
          </Link>
          <a
            href="#service-categories"
            className="inline-flex justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            查看服务方案
          </a>
        </div>
      </div>
    </section>
  );
}
