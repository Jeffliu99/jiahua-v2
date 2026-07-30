import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "实用妈妈工具｜加华月子餐｜孕期与宝宝工具中心",
  description:
    "加华月子餐妈妈工具中心，提供预产期计算器、宝宝中文起名、宝宝英文名推荐和宝宝未来身高预测等实用工具，帮助备孕、孕期和新手家庭快速获得参考信息。",
};

type ToolItem = {
  icon: string;
  title: string;
  description: string;
  suitableFor: string;
  href: string;
  badge: string;
};

const tools: ToolItem[] = [
  {
    icon: "📅",
    title: "预产期计算器",
    description: "输入末次月经日期，快速估算预产期、当前孕周和孕期关键时间点。",
    suitableFor: "适合刚确认怀孕、想快速了解孕期时间线的家庭。",
    href: "/tools/due-date-calculator",
    badge: "已上线",
  },
  {
    icon: "🖋️",
    title: "宝宝中文起名",
    description: "根据姓氏、宝宝性别和名字风格，生成中文名建议和寓意说明。",
    suitableFor: "适合正在准备中文名、想获得名字灵感的家庭。",
    href: "/tools/chinese-name-generator",
    badge: "已上线",
  },
  {
    icon: "🌎",
    title: "宝宝英文名推荐",
    description: "按性别和风格推荐英文名，包含发音提示、含义解释和使用建议。",
    suitableFor: "适合希望英文名自然、好读、适合加拿大环境的家庭。",
    href: "/tools/english-name-generator",
    badge: "已上线",
  },
  {
    icon: "📏",
    title: "宝宝未来身高预测",
    description: "根据父母身高和宝宝性别，估算宝宝未来成年身高参考范围。",
    suitableFor: "适合想根据父母身高获得成年身高参考范围的家庭。",
    href: "/tools/baby-height-predictor",
    badge: "已上线",
  },
];

const highlights = [
  {
    title: "快速参考",
    text: "无需注册，打开即可使用，适合孕期和产后家庭快速查询。",
  },
  {
    title: "双语家庭友好",
    text: "特别加入中文起名和英文名推荐，更适合加拿大华人家庭。",
  },
  {
    title: "持续更新",
    text: "后续可继续扩展宝宝成长记录、饮食偏好和产后恢复工具。",
  },
];

export default function ToolsPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('/images/hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5">
              <span aria-hidden="true">✦</span>
              <span>妈妈工具中心</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">
              实用妈妈工具
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              为备孕、孕期和新手妈妈准备的实用小工具，帮助您快速计算预产期、参考宝宝身高、寻找中英文名字灵感。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#tools-list"
                className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-8 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(31,78,76,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-[0_12px_28px_rgba(31,78,76,0.24)]"
              >
                查看工具
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center rounded-full border border-[#D6B37F]/55 bg-white/70 px-8 py-3.5 font-semibold text-[#1F4E4C] transition hover:bg-white"
              >
                预约咨询
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-[#F0E8DD] bg-white/80 p-5 shadow-sm"
              >
                <h2 className="text-lg font-bold text-[#1F4E4C] mb-2">{item.title}</h2>
                <p className="text-sm leading-6 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools-list" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 md:mb-10">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">全部工具</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight">
                按照孕期和宝宝成长场景整理
              </h2>
            </div>
            <p className="max-w-md text-gray-600 leading-7">
              从预产期、起名到成长参考，帮助家庭更方便地获得实用信息。
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {tools.map((tool) => (
              <article
                key={tool.title}
                className="group flex h-full flex-col rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B37F]/70 hover:shadow-[0_18px_44px_rgba(31,78,76,0.12)]"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    <span aria-hidden="true">{tool.icon}</span>
                  </div>
                  <span className="rounded-full border border-[#F0E8DD] bg-white px-3 py-1 text-xs font-semibold text-[#B8915D]">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">{tool.title}</h3>
                <p className="text-sm leading-7 text-gray-600 mb-4">{tool.description}</p>

                <div className="mt-auto">
                  <div className="rounded-2xl bg-white/75 border border-[#F0E8DD] p-4 mb-5">
                    <div className="text-xs font-semibold text-[#B8915D] mb-1">适合谁</div>
                    <p className="text-sm leading-6 text-gray-600">{tool.suitableFor}</p>
                  </div>

                  <Link
                    href={tool.href}
                    className="inline-flex w-full justify-center rounded-full bg-[#1F4E4C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-[0_10px_24px_rgba(31,78,76,0.20)]"
                  >
                    开始使用
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">温馨提醒</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                工具结果仅供家庭参考
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                这些工具适合帮助您快速建立初步参考，但不能替代医生、营养师或专业医疗建议。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">孕期健康</h3>
                  <p className="text-gray-600 leading-7">
                    如果涉及孕期检查、身体不适、胎儿发育或高风险情况，请优先咨询医生或专业医疗人员。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">宝宝成长</h3>
                  <p className="text-gray-600 leading-7">
                    身高预测和名字推荐属于参考性质，实际成长和最终选择可结合家庭情况、成长曲线和专业建议。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">餐食建议</h3>
                  <p className="text-gray-600 leading-7">
                    如需更具体的孕期、产后或月子餐建议，建议结合身体状况、饮食习惯和医生建议进行安排。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">需要更具体的孕期或产后餐食建议？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的预产期、所在区域和饮食偏好，我们会为您推荐适合的月子餐方案。
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
            >
              预约咨询
            </Link>
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              查看服务方案
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
