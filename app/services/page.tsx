import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "服务方案｜加华月子餐｜30天月子餐与产后恢复营养支持",
  description:
    "了解加华月子餐的服务方案，包括30天月子餐、剖腹产恢复方案、哺乳期营养方案与高端定制产后营养服务，适合不同恢复阶段的妈妈。",
};

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "30天月子餐方案",
      description:
        "为产后恢复关键期精心设计的阶段化营养菜单。从产后初期调理，到体力恢复与营养补充，每日均衡搭配，让身体循序渐进地恢复活力。",
      suitableFor: ["顺产妈妈", "初次坐月子妈妈", "希望获得全面营养支持的家庭"],
      action: "了解更多",
      href: "/services",
    },
    {
      number: "02",
      title: "剖腹产恢复方案",
      description:
        "针对术后恢复特点制定营养规划，兼顾恢复期间的饮食需求与身体调养，帮助恢复过程更加安心从容。",
      suitableFor: ["剖腹产妈妈", "术后恢复阶段妈妈", "需要额外恢复支持的家庭"],
      action: "了解更多",
      href: "/services",
    },
    {
      number: "03",
      title: "哺乳期营养方案",
      description:
        "为母乳喂养阶段提供科学营养补充，帮助满足产后恢复与哺乳阶段的双重需求，提供持续的营养支持。",
      suitableFor: ["哺乳期妈妈", "母乳喂养家庭", "需要持续营养支持的妈妈"],
      action: "了解更多",
      href: "/services",
    },
    {
      number: "04",
      title: "高端定制方案",
      description:
        "根据个人体质、恢复进度与饮食习惯进行专属规划，从营养搭配到配送安排，提供更具个性化的服务体验。",
      suitableFor: ["特殊饮食需求", "高品质恢复需求", "个性化营养规划需求"],
      action: "预约咨询",
      href: "/contact",
    },
  ];

  const processSteps = [
    { number: "01", title: "预约咨询", text: "了解妈妈的恢复阶段、饮食习惯与家庭需求。" },
    { number: "02", title: "确认方案", text: "根据产后阶段与个人需求，选择合适的营养方案。" },
    { number: "03", title: "每日制作", text: "精选食材，当日制作，兼顾营养、品质与口感。" },
    { number: "04", title: "配送到家", text: "覆盖 GTA 多个区域，让家庭照护更加轻松省心。" },
  ];

  return (
    <main className="bg-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-14 md:pt-16 pb-10 md:pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
            服务方案
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-6">
            为不同恢复阶段，<br />提供更适合的营养支持。
          </h1>
          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            每一位妈妈的身体状况、恢复节奏和营养需求都不尽相同。加华月子餐根据产后不同阶段的恢复重点，提供多元化营养方案，帮助妈妈更安心、更科学地度过重要的恢复时期。
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.number} className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#F0E8DD] hover:shadow-lg transition">
                <div className="text-[#D6B37F] text-lg font-semibold mb-3">{service.number}</div>
                <h2 className="text-2xl font-bold text-[#1F4E4C] mb-4">{service.title}</h2>
                <p className="text-gray-600 leading-8 mb-6">{service.description}</p>
                <div className="text-sm text-gray-500 mb-6">
                  适合对象：
                  <ul className="mt-3 space-y-2">
                    {service.suitableFor.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
                <Link href={service.href} className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition">
                  {service.action} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">服务流程</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">从咨询到配送，每一步都更省心</h2>
            <p className="text-lg leading-8 text-gray-600">我们希望用更清晰的流程与更贴心的服务，让家庭在产后恢复阶段少一些压力，多一份安心。</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-white rounded-3xl p-6 md:p-7 border border-[#F0E8DD]">
                <div className="text-[#D6B37F] text-sm font-semibold mb-3">{step.number}</div>
                <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-7 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">开启恢复之旅</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            恢复没有标准答案，<br />但专业营养能让身体走得更从容。
          </h2>
          <p className="text-lg text-white leading-8 max-w-2xl mx-auto mb-8">
            如果您正在为产后恢复、月子餐选择或配送服务做准备，欢迎预约营养顾问，了解更适合自己的方案。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="w-full sm:w-auto bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition text-center">预约营养顾问</Link>
            <Link href="/" className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-center">返回首页</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
