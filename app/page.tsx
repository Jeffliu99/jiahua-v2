import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "加华月子餐｜GTA专业产后营养支持与月子餐服务",
  description:
    "加华月子餐为大多伦多地区华人家庭提供专业产后营养支持、阶段化月子餐方案与贴心配送服务，陪伴妈妈安心度过产后恢复期。",
};

export default function HomePage() {
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

  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
              GTA 专业产后营养支持
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1F4E4C] mb-6">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="text-lg leading-8 text-gray-600 max-w-3xl mb-8">
              加华月子餐融合传统产后调理智慧与现代营养科学，为大多伦多地区华人家庭提供阶段化月子餐方案、专业营养支持与贴心配送服务。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#1F4E4C] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-[#173D3B] transition"
              >
                预约营养顾问
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full font-bold text-center hover:bg-[#D6B37F]/10 transition"
              >
                查看服务方案
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-[#F0E8DD] shadow-sm">
            <div className="rounded-[1.5rem] bg-[#FAF8F5] border border-[#F0E8DD] p-6 md:p-8">
              <div className="text-[#D6B37F] font-semibold mb-4">
                Jiahua Postpartum Nutrition
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] leading-tight mb-5">
                从每日营养开始，陪伴妈妈更安心地恢复。
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                不同阶段需要不同的照顾。我们通过清晰的方案、稳定的制作与配送，为家庭提供更省心的产后饮食支持。
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-[#F0E8DD]">
                  <div className="text-2xl font-bold text-[#1F4E4C]">30+</div>
                  <div className="text-sm text-gray-500 mt-1">阶段化餐食规划</div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-[#F0E8DD]">
                  <div className="text-2xl font-bold text-[#1F4E4C]">GTA</div>
                  <div className="text-sm text-gray-500 mt-1">多社区配送服务</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              为什么选择加华
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">
              专业、安心、贴近家庭需求
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              我们关注的不只是餐食本身，更是妈妈恢复过程中的真实体验与家庭照护压力。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#F0E8DD] hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                服务方案
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C]">
                为不同恢复阶段提供支持
              </h2>
            </div>

            <Link
              href="/services"
              className="w-full md:w-auto text-center border border-[#D6B37F] text-[#1F4E4C] px-6 py-3 rounded-full font-semibold hover:bg-[#D6B37F]/10 transition"
            >
              查看全部方案
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-6 md:p-8 border border-[#F0E8DD]"
              >
                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-6">
                  {service.text}
                </p>

                <Link
                  href="/services"
                  className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition"
                >
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                营养理念
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-6">
                传统调理智慧，结合现代营养科学
              </h2>

              <p className="text-lg leading-8 text-gray-600 mb-8">
                产后恢复是一个循序渐进的过程。加华月子餐根据恢复节奏设计不同阶段的营养重点，让饮食更贴合身体真实需要。
              </p>

              <Link
                href="/nutrition"
                className="inline-flex w-full sm:w-auto justify-center bg-[#1F4E4C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#173D3B] transition"
              >
                了解营养理念
              </Link>
            </div>

            <div className="grid gap-5">
              <div className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#F0E8DD]">
                <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">
                  产后初期调理
                </h3>
                <p className="text-gray-600 leading-7">
                  温和、清淡、易消化，帮助身体逐步从生产后的消耗中恢复。
                </p>
              </div>

              <div className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#F0E8DD]">
                <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">
                  营养恢复支持
                </h3>
                <p className="text-gray-600 leading-7">
                  从基础营养补充到体力恢复，帮助妈妈更稳定地进入新的生活节奏。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              妈妈故事
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">
              来自真实家庭的恢复体验
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              每一位妈妈的恢复旅程都不相同，而被认真照顾的感受却总是相似。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {storyCards.map((story) => (
              <div
                key={story.location}
                className="bg-white rounded-3xl p-6 md:p-8 border border-[#F0E8DD]"
              >
                <div className="text-[#D6B37F] text-lg mb-4">★★★★★</div>
                <p className="text-gray-600 leading-8 mb-6">{story.text}</p>
                <div className="text-[#1F4E4C] font-semibold">— {story.location}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/stories"
              className="inline-flex w-full sm:w-auto justify-center border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full font-bold hover:bg-[#D6B37F]/10 transition"
            >
              查看妈妈故事
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            开始预约咨询
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            让专业营养，
            <br />
            成为恢复路上的安心陪伴。
          </h2>

          <p className="text-lg text-white leading-8 max-w-2xl mx-auto mb-8">
            如果您正在为产后恢复做准备，欢迎预约营养顾问，了解更适合自己的服务方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition text-center"
            >
              预约营养顾问
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-center"
            >
              查看服务方案
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
