import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "营养理念｜加华月子餐",
  description:
    "了解加华月子餐的产后营养理念、阶段化月子餐安排与传统调理智慧。",
};

export default function NutritionPage() {
  const stages = [
    {
      title: "产后初期",
      image: "/images/soups/home-soup.jpg",
      alt: "温润滋补汤品",
      text: "以温和、清淡、易消化为重点，帮助妈妈逐步适应恢复节奏。",
    },
    {
      title: "恢复调整期",
      image: "/images/meal-plans/home-meal-set.jpg",
      alt: "完整月子餐套餐",
      text: "在饮食舒适的基础上，逐步加强营养搭配，支持体力恢复。",
    },
    {
      title: "哺乳支持期",
      image: "/images/hero/hero-mother-baby-meal.jpg",
      alt: "哺乳期营养月子餐组合",
      text: "关注持续营养补充与日常用餐稳定性，让妈妈更从容进入新生活。",
    },
  ];

  const principles = [
    "尊重传统产后饮食经验",
    "结合现代家庭生活节奏",
    "重视食材新鲜与口味舒适",
    "根据不同恢复阶段调整重点",
  ];

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="营养理念"
        title={
          <>
            传统调理智慧，
            <br />
            结合现代营养科学。
          </>
        }
        description="产后恢复是循序渐进的过程，我们根据不同阶段设计营养重点，让饮食更贴合身体真实需要。"
      />

      {/* Nutrition Stages */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start mb-10">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">阶段化设计</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                不同阶段，有不同饮食重点。
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                加华月子餐不会把产后饮食简单地做成固定菜单，而是根据恢复节奏调整餐食思路，让妈妈在不同阶段都能获得更贴合的支持。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                阶段化营养支持
              </h3>
              <p className="text-gray-600 leading-8">
                从温和适应、营养恢复到哺乳期持续支持，我们希望每一餐都更贴合妈妈当下的身体状态和家庭生活节奏。
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {stages.map((stage) => (
              <div
                key={stage.title}
                className="group overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 leading-7">{stage.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center">
              <div>
                <div className="text-[#D6B37F] font-medium mb-3">核心原则</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                  好的月子餐，要让身体和家庭都更容易适应。
                </h2>
                <p className="text-gray-600 leading-8 mb-6">
                  我们希望每一份餐食既有熟悉感，也有清晰的阶段逻辑，让家庭在产后恢复期少一点准备压力。
                </p>

                <ul className="grid sm:grid-cols-2 gap-4">
                  {principles.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5 text-[#1F4E4C] font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/services/service-30-days.jpg"
                    alt="丰富均衡的月子餐组合"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">
                    均衡搭配，稳定支持
                  </h3>
                  <p className="text-gray-600 leading-7">
                    从主食、汤品到配菜和点心，搭配思路更清楚，也更适合家庭日常安排。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">想了解更适合自己的菜单？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            根据您的生产阶段，我们半小时内为您匹配合适方案。
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
