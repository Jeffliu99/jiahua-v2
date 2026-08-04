import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "加华月子餐｜GTA专业产后营养支持与月子餐服务",
  description:
    "加华月子餐为大多伦多地区华人家庭提供专业产后营养支持、阶段化月子餐方案与贴心配送服务，陪伴妈妈安心度过产后恢复期。",
};

const highlights = [
  {
    title: "阶段化营养规划",
    text: "根据产后不同恢复阶段调整餐食重点，让饮食更贴合身体真实需要。",
  },
  {
    title: "每日新鲜制作",
    text: "精选食材，当日制作，兼顾营养、品质与口感，让每一餐都更安心。",
  },
  {
    title: "GTA 配送服务",
    text: "服务覆盖大多伦多地区多个社区，帮助家庭减少备餐和照护压力。",
  },
];

const services = [
  {
    title: "30天月子餐方案",
    text: "适合希望获得完整产后营养支持的妈妈，覆盖恢复关键阶段。",
  },
  {
    title: "剖腹产恢复方案",
    text: "针对术后恢复特点设计，兼顾身体调养与饮食舒适度。",
  },
  {
    title: "哺乳期营养方案",
    text: "为哺乳阶段提供持续营养支持，帮助妈妈更从容地恢复。",
  },
];

const storyCards = [
  {
    location: "Markham 妈妈",
    text: "每天按时送达的餐食，让家庭少了很多准备压力，也让我能把更多时间留给宝宝和恢复。",
  },
  {
    location: "Richmond Hill 家庭",
    text: "咨询、餐食和配送安排都很清楚，对于第一次经历产后恢复的家庭来说非常安心。",
  },
];

const heroFeatures = [
  { icon: "♨", title: "阶段化营养", text: "按阶段搭配" },
  { icon: "⌂", title: "每日新鲜", text: "现做现送" },
  { icon: "♡", title: "恢复支持", text: "贴心建议" },
  { icon: "▣", title: "GTA配送", text: "准时省心" },
];

const photoCards = [
  {
    title: "完整月子餐套餐",
    text: "主食、汤品、蛋白质、蔬菜与点心搭配，照顾产后不同阶段的日常营养需求。",
    image: "/images/meal-plans/home-meal-set.jpg",
    alt: "加华月子餐完整套餐展示",
  },
  {
    title: "温润汤品支持",
    text: "以温和、舒适、易入口为重点，为产后恢复期提供稳定的餐食支持。",
    image: "/images/soups/home-soup.jpg",
    alt: "加华月子餐养生汤品展示",
  },
  {
    title: "打包配送到家",
    text: "每日新鲜制作并妥善打包，帮助家庭减少备餐压力，让照护更从容。",
    image: "/images/delivery/about-meal-packing.jpg",
    alt: "加华月子餐打包配送场景",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#E8DCC9] bg-[#FAF8F5]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/hero/hero-mother-baby-meal.jpg"
            alt="加华月子餐母婴与餐食主视觉"
            fill
            priority
            className="object-cover object-center opacity-85"
            sizes="58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/72 to-[#FAF8F5]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/75 via-transparent to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E8DCC9] bg-white/90 px-5 py-3 text-sm font-semibold text-[#B8915D] shadow-sm">
              <span>★</span>
              <span>GTA 专业产后营养支持</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1F4E4C] md:text-6xl lg:text-7xl">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#334155] md:text-xl">
              融合传统产后调理智慧与现代营养科学，为 GTA 华人家庭提供月子餐、营养支持与贴心配送。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1F4E4C] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1F4E4C]/15 transition hover:-translate-y-0.5 hover:bg-[#173D3B]"
              >
                预约咨询 →
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#D6B37F] bg-white/80 px-8 py-4 text-base font-semibold text-[#1F4E4C] transition hover:-translate-y-0.5 hover:bg-[#D6B37F]/10"
              >
                服务方案 →
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-[#E8DCC9] bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-2xl text-[#C9A18A]">{feature.icon}</div>
                  <h3 className="mt-2 font-bold text-[#1F4E4C]">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Why Jiahua
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              为什么选择加华
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              我们关注的不只是餐食本身，更是妈妈恢复过程中的真实体验与家庭照护压力。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{item.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Photos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Real Meals & Service
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                真实餐食与服务场景
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                从完整月子餐、温润汤品到打包配送，我们希望让妈妈和家人在产后恢复期更安心、更省心。
              </p>
            </div>
            <Link
              href="/services"
              className="w-fit rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              查看服务方案
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {photoCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] bg-[#FAF8F5]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">{card.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Services
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                服务方案
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                为不同恢复阶段提供支持。
              </p>
            </div>
            <Link
              href="/services"
              className="w-fit rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              查看全部方案
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{service.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{service.text}</p>
                <Link href="/services" className="mt-6 inline-flex font-semibold text-[#B8915D]">
                  了解更多 →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Nutrition Philosophy
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              传统调理智慧，结合现代营养科学
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              根据产后恢复节奏设计营养重点，让每一餐更贴合身体真实需要。
            </p>
            <Link
              href="/nutrition"
              className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white transition hover:bg-[#173D3B]"
            >
              了解营养理念
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
            <Image
              src="/images/about/about-kitchen-preparation.jpg"
              alt="加华月子餐食材准备与厨房工作场景"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Stories
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              妈妈故事
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              每一位妈妈的恢复旅程都不相同，而被认真照顾的感受却总是相似。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {storyCards.map((story) => (
              <article key={story.location} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm">
                <div className="mb-4 text-[#D6B37F]">★★★★★</div>
                <p className="leading-8 text-gray-600">{story.text}</p>
                <p className="mt-5 font-semibold text-[#1F4E4C]">— {story.location}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/stories"
              className="inline-flex rounded-full border border-[#D6B37F] px-7 py-3 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
            >
              查看妈妈故事
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-soft-minimal-table.jpg"
            alt="加华月子餐柔和品牌背景"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            开始预约咨询
          </div>
          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">
            让专业营养，
            <br />
            成为恢复路上的安心陪伴。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            如果您正在为产后恢复做准备，欢迎预约营养顾问，了解更适合自己的服务方案。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">
              预约营养顾问
            </Link>
            <Link href="/services" className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">
              查看服务方案
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
