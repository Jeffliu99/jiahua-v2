import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "妈妈工具｜加华月子餐",
  description:
    "加华月子餐妈妈工具中心，提供预产期计算器、宝宝身高预测、中文起名、英文名推荐等孕产实用工具。",
};

const tools = [
  {
    title: "预产期计算器",
    href: "/tools/due-date-calculator",
    status: "已上线",
    tag: "孕期准备",
    description:
      "输入最后一次月经日期，快速估算预产期和当前孕周，帮助家庭提前规划月子餐和产后安排。",
    features: ["估算预产期", "查看当前孕周", "提前规划月子餐"],
  },
  {
    title: "宝宝未来身高预测",
    href: "/tools/baby-height-predictor",
    status: "已上线",
    tag: "宝宝成长",
    description:
      "根据爸爸身高、妈妈身高和宝宝性别，提供一个未来成年身高的参考范围。结果仅供娱乐和一般参考。",
    features: ["输入父母身高", "选择宝宝性别", "生成参考身高范围"],
  },
  {
    title: "宝宝中文起名",
    href: "/tools/chinese-name-generator",
    status: "已上线",
    tag: "起名参考",
    description:
      "输入姓氏、宝宝性别和喜欢的名字风格，生成中文名字建议，并提供简单寓意说明。",
    features: ["中文名建议", "寓意说明", "多种名字风格"],
  },
  {
    title: "宝宝英文名推荐",
    href: "/tools/english-name-generator",
    status: "已上线",
    tag: "起名参考",
    description:
      "根据宝宝性别和英文名风格，推荐经典、现代、国际化或加拿大常见英文名。",
    features: ["英文名推荐", "名字含义", "风格筛选"],
  },
];

const benefits = [
  {
    title: "更早规划",
    text: "从预产期开始规划产后服务，让月子餐、配送和家庭照护安排更从容。",
  },
  {
    title: "更有参与感",
    text: "通过宝宝成长、起名和孕期工具，让家庭成员更自然地参与到准备过程中。",
  },
  {
    title: "持续更新",
    text: "工具中心会从简单版本开始，后续根据用户反馈持续优化和增加功能。",
  },
];

export default function ToolsPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="妈妈工具"
        title={
          <>
            给准妈妈和家庭的
            <br />
            实用小工具。
          </>
        }
        description="从预产期计算、宝宝身高预测到中文名和英文名推荐，加华月子餐希望用简单实用的工具，陪伴家庭更从容地准备产后生活。"
      />

      {/* Tool Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
            <div className="max-w-3xl">
              <div className="text-[#D6B37F] font-medium mb-3">工具列表</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-4">
                先做简单版，再不断升级。
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                工具中心会先上线基础版本，帮助妈妈和家人快速获得参考信息。后续可以加入保存记录、会员中心和个性化推荐。
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-full md:w-auto justify-center rounded-full border border-[#D6B37F] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              预约咨询
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-7">
            {tools.map((tool) => (
              <article
                key={tool.title}
                className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#B8915D]">
                    {tool.tag}
                  </span>
                  <span className="rounded-full bg-[#1F4E4C]/8 px-4 py-1.5 text-sm font-semibold text-[#1F4E4C]">
                    {tool.status}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] leading-tight mb-4">
                  {tool.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-6">{tool.description}</p>

                <ul className="space-y-3 mb-7">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-gray-600 leading-7">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-[11px] font-bold text-white">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tool.href}
                  className="inline-flex rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  查看工具
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
              <div>
                <div className="text-[#D6B37F] font-medium mb-3">为什么要做工具中心？</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                  不只提供月子餐，也陪伴家庭做准备。
                </h2>
                <p className="text-gray-600 leading-8">
                  加华月子餐希望网站不只是一个预约入口，也能成为准妈妈和家人查询信息、做计划、获得参考的小帮手。
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                    <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-7">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Member Center */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-3xl border border-[#F0E8DD] bg-[#1F4E4C] p-6 md:p-8 text-white">
            <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8 items-center">
              <div>
                <div className="text-[#F4D7A7] font-semibold mb-4">未来规划</div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                  工具结果未来可以保存到妈妈中心。
                </h2>
                <p className="text-white/80 leading-8">
                  后续上线登录系统后，用户可以保存预产期、宝宝资料、起名收藏和成长记录，形成更有粘性的妈妈中心体验。
                </p>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                  <div className="font-semibold text-[#F4D7A7] mb-1">下一步</div>
                  <div className="text-white/80">先开发预产期计算器 V1</div>
                </div>
                <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                  <div className="font-semibold text-[#F4D7A7] mb-1">随后上线</div>
                  <div className="text-white/80">身高预测、中文起名、英文名推荐</div>
                </div>
                <div className="rounded-2xl bg-white/8 border border-white/10 p-4">
                  <div className="font-semibold text-[#F4D7A7] mb-1">长期方向</div>
                  <div className="text-white/80">登录中心、会员记录、PWA App</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">准备为产后恢复做规划？</div>
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
