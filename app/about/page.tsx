import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "关于加华｜加华月子餐",
  description:
    "了解加华月子餐的品牌理念、服务初心与产后营养支持方式，为 GTA 华人家庭提供安心月子餐服务。",
};

export default function AboutPage() {
  const values = [
    {
      title: "以妈妈恢复为中心",
      text: "我们关注产后不同阶段的身体需要，也关注家庭在照护过程中的真实压力。",
    },
    {
      title: "用餐食减轻家庭负担",
      text: "从菜单设计、每日制作到配送安排，帮助家人把更多时间留给妈妈和宝宝。",
    },
    {
      title: "让传统更贴近现代生活",
      text: "尊重传统月子调理经验，同时结合现代营养理念，让月子餐更清晰、更安心。",
    },
  ];

  const milestones = [
    "围绕产后初期、恢复期和哺乳期设计不同营养重点。",
    "根据 GTA 华人家庭饮食习惯，提供更熟悉、更容易接受的餐食体验。",
    "通过清晰咨询和配送安排，让第一次经历产后恢复的家庭更从容。",
  ];

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="关于加华"
        title={
          <>
            用专业营养，
            <br />
            陪伴每一位妈妈安心恢复。
          </>
        }
        description="加华月子餐专注于 GTA 华人家庭的产后营养支持，将传统调理智慧与现代营养理念结合。"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">品牌初心</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                让产后恢复这段时间，少一点慌乱，多一点安心。
              </h2>
              <p className="text-lg leading-8 text-gray-600 mb-6">
                产后恢复不是简单的一日三餐，而是身体、作息和家庭照护共同调整的过程。加华月子餐希望用更清楚的阶段化餐食方案，帮助妈妈和家人减少准备压力。
              </p>
              <p className="text-lg leading-8 text-gray-600">
                我们相信，好的月子餐应该既有熟悉的味道，也有清晰的营养逻辑；既照顾妈妈，也让家人更容易安排每天的生活。
              </p>
            </div>

            <div className="grid gap-5">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-7"
                >
                  <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-7">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">我们的方式</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                从咨询、餐食到配送，尽量让每一步都清楚。
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                我们会根据妈妈的阶段、所在区域和家庭需求，协助了解更适合的服务方案。每一份餐食都以恢复支持、口味舒适和家庭可执行性为重点。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
              <ul className="space-y-4">
                {milestones.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-600 leading-7">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">准备了解适合您的方案？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            我们半小时内为您匹配合适方案。
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
