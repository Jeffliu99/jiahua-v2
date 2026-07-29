import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "服务方案｜加华月子餐",
  description:
    "查看加华月子餐服务方案，包括 30 天月子餐、剖腹产恢复、哺乳期营养与高端定制方案。",
};

export default function ServicesPage() {
  const plans = [
    {
      title: "30天月子餐方案",
      tag: "完整恢复支持",
      image: "/images/service-30-days.png",
      alt: "30天月子餐方案餐食组合",
      text: "适合希望获得完整产后餐食安排的妈妈，覆盖产后恢复关键阶段。",
      points: ["阶段化菜单安排", "每日新鲜制作", "适合多数家庭的基础选择"],
    },
    {
      title: "剖腹产恢复方案",
      tag: "术后恢复关注",
      image: "/images/service-c-section.png",
      alt: "剖腹产恢复方案清淡月子餐",
      text: "针对剖腹产后的饮食舒适度与恢复节奏，提供更温和的餐食搭配。",
      points: ["重视清淡与易消化", "照顾术后恢复节奏", "减少家庭备餐压力"],
    },
    {
      title: "哺乳期营养方案",
      tag: "持续营养支持",
      image: "/images/service-breastfeeding.png",
      alt: "哺乳期营养方案餐食组合",
      text: "为哺乳阶段提供更持续的营养支持，帮助妈妈在新生活节奏中保持稳定。",
      points: ["关注持续营养补充", "适合哺乳期家庭", "菜单搭配更灵活"],
    },
    {
      title: "高端定制方案",
      tag: "个性化安排",
      image: "/images/service-premium.png",
      alt: "高端定制月子餐方案摆盘",
      text: "适合有特别口味、配送或家庭安排需求的客户，咨询后匹配更合适方案。",
      points: ["根据需求沟通安排", "适合个性化偏好", "可配合家庭节奏"],
    },
  ];

  const process = [
    "提交预约咨询",
    "了解生产阶段与所在区域",
    "匹配合适服务方案",
    "确认餐食与配送安排",
  ];

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="服务方案"
        title={
          <>
            为不同恢复阶段，
            <br />
            提供合适的月子餐方案。
          </>
        }
        description="从完整月子餐到剖腹产恢复、哺乳期营养与高端定制，加华月子餐为家庭提供灵活选择。"
      />

      {/* Service Plans */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-7">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="group overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#B8915D] mb-4">
                    {plan.tag}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] mb-4">
                    {plan.title}
                  </h2>

                  <p className="text-gray-600 leading-8 mb-6">{plan.text}</p>

                  <ul className="space-y-3 mb-7">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-600 leading-7">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-[11px] font-bold text-white">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
                  >
                    咨询此方案
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-[#D6B37F] font-medium mb-3">预约流程</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">
              从咨询到确认，流程清楚简单
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {process.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-[#F0E8DD] bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="font-bold text-[#1F4E4C] leading-7">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">不确定选哪一个？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的需要，我们半小时内为您匹配合适方案。
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
