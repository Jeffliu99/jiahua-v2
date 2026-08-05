import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "常见问题｜加华月子餐",
  description:
    "加华月子餐常见问题，包含月子餐预订、GTA 配送范围、产后营养、付款方式、忌口调整与预约咨询说明。",
};

const faqGroups = [
  {
    title: "服务与预订",
    description: "关于什么时候预订、可以订多久、如何选择方案等问题。",
    faqs: [
      {
        question: "月子餐需要提前多久预订？",
        answer:
          "建议在预产期前 1-2 个月开始咨询和预订。这样可以提前确认配送区域、开始日期、服务方案、饮食忌口和特殊需求，产后会更从容。",
      },
      {
        question: "可以只订两周吗？",
        answer:
          "可以根据实际恢复阶段和家庭安排沟通。不同家庭需求不同，可以先咨询适合的周期和服务方式。",
      },
      {
        question: "第一次咨询需要准备什么信息？",
        answer:
          "建议准备预产期或生产日期、所在区域、顺产或剖腹产情况、是否哺乳、饮食忌口、想了解的服务方案和联系方式。",
      },
      {
        question: "不确定选哪一个方案怎么办？",
        answer:
          "可以先提交预约咨询。我们会根据生产阶段、所在区域和服务需求，为您匹配更合适的月子餐方案。",
      },
      {
        question: "可以临时开始服务吗？",
        answer:
          "如果配送区域和排期允许，可以尽快协助安排。建议越早沟通越好，方便确认菜单和配送。",
      },
    ],
  },
  {
    title: "配送范围",
    description: "关于 GTA 各区域配送、时间安排和地址变更的问题。",
    faqs: [
      {
        question: "加华月子餐配送到哪些区域？",
        answer:
          "我们主要服务 GTA 华人家庭。常见咨询区域包括 Markham、Richmond Hill、North York、Scarborough、Vaughan、Aurora、Newmarket 等。具体地址请预约咨询确认。",
      },
      {
        question: "Aurora 可以配送吗？",
        answer:
          "Aurora 区域可以先提交地址咨询，我们会根据当天路线和服务安排确认是否可配送。",
      },
      {
        question: "Markham 和 Richmond Hill 可以配送吗？",
        answer:
          "Markham 和 Richmond Hill 是常见服务区域。具体配送安排会根据地址、日期和服务方案确认。",
      },
      {
        question: "配送时间固定吗？",
        answer:
          "配送时间会根据路线安排确认。我们会尽量保持稳定，让家庭更方便安排用餐和照护。",
      },
      {
        question: "中途可以更改配送地址吗？",
        answer:
          "如果需要更改地址，请尽早联系我们。是否可以变更取决于新地址是否在配送范围内，以及当天路线安排。",
      },
    ],
  },
  {
    title: "营养与菜单",
    description: "关于剖腹产、顺产、哺乳期、忌口和菜单调整的问题。",
    faqs: [
      {
        question: "剖腹产和顺产的菜单一样吗？",
        answer:
          "剖腹产后的饮食通常更注重温和、清淡和易消化。具体菜单安排可以根据妈妈的恢复情况和饮食感受沟通。",
      },
      {
        question: "哺乳期妈妈适合吃月子餐吗？",
        answer:
          "适合。哺乳期更需要规律、均衡和稳定的日常餐食。我们会关注主食、蛋白质、蔬菜、汤品和点心的搭配。",
      },
      {
        question: "有忌口或过敏可以调整吗？",
        answer:
          "可以提前说明忌口、过敏或不喜欢的食材。我们会根据实际情况尽量协助调整。",
      },
      {
        question: "月子餐是不是越补越好？",
        answer:
          "不一定。产后饮食应循序渐进，特别是产后初期，温和、清淡、易消化通常更重要。",
      },
      {
        question: "汤品可以代替正餐吗？",
        answer:
          "不建议只依靠汤品。更合理的方式是让主食、蛋白质、蔬菜、汤品和点心形成完整搭配。",
      },
      {
        question: "菜单会每天一样吗？",
        answer:
          "我们会尽量保持菜单搭配的丰富度和阶段逻辑，让餐食既有稳定性，也有变化。具体安排以实际服务方案为准。",
      },
    ],
  },
  {
    title: "付款与订单",
    description: "关于付款、订单确认、取消或调整相关问题。",
    faqs: [
      {
        question: "如何确认订单？",
        answer:
          "提交预约咨询后，我们会与您沟通服务方案、配送地址、开始日期和相关安排。确认无误后再进入订单确认流程。",
      },
      {
        question: "如何付款？",
        answer:
          "付款方式会在咨询和确认订单时说明。您可以通过微信、WhatsApp、电话或邮箱与我们确认具体安排。",
      },
      {
        question: "订单确认后可以修改吗？",
        answer:
          "如需修改开始日期、地址、忌口或服务周期，请尽早联系我们。是否可以调整取决于排期和配送安排。",
      },
      {
        question: "如果宝宝提前出生怎么办？",
        answer:
          "这种情况很常见。请尽快联系我们，我们会根据实际生产日期和服务排期协助调整开始时间。",
      },
      {
        question: "如果预产期延后怎么办？",
        answer:
          "可以提前联系我们说明情况，我们会根据实际排期协助调整服务开始日期。",
      },
    ],
  },
  {
    title: "联系与咨询",
    description: "关于如何联系、多久回复、线上提交表单等问题。",
    faqs: [
      {
        question: "提交表单后多久会联系我？",
        answer:
          "我们会尽快通过电话、微信或 WhatsApp 与您联系。网站上也提供微信二维码、WhatsApp 二维码、电话和邮箱，方便您直接咨询。",
      },
      {
        question: "可以直接加微信咨询吗？",
        answer:
          "可以。您可以通过网站上的微信二维码或微信号联系我们。",
      },
      {
        question: "可以通过 WhatsApp 咨询吗？",
        answer:
          "可以。网站联系页面提供 WhatsApp 二维码，您可以扫码进入咨询。",
      },
      {
        question: "我还没生产，可以先咨询吗？",
        answer:
          "可以，而且建议提前咨询。提前了解方案和配送安排，可以减少产后临时准备的压力。",
      },
      {
        question: "家人可以代为咨询和预订吗？",
        answer:
          "可以。很多时候家人会提前帮妈妈了解月子餐服务，只需要提供基本信息即可开始沟通。",
      },
    ],
  },
];

const orderingSteps = [
  {
    title: "预约咨询",
    description:
      "通过网站、微信、WhatsApp 或电话联系我们，了解预产期、所在区域及服务需求。",
  },
  {
    title: "确认服务方案",
    description:
      "根据妈妈的生产阶段、饮食习惯、配送区域及家庭需求，为您匹配合适的月子餐方案。",
  },
  {
    title: "支付订金",
    description:
      "确认订餐后需支付 CAD $100 订金，用于预留名额、安排生产计划及配送服务。",
  },
  {
    title: "通知开餐",
    description:
      "宝宝出生后，请尽快与我们联系确认开餐时间。为确保餐食能够准时送达，建议至少提前 12 小时通知我们安排制作与配送服务。",
  },
  {
    title: "开始配送",
    description:
      "按照确认日期正式开餐，每日配送三餐三点，并搭配养生煲汤、新鲜水果、养生甜品及手工面点。",
  },
  {
    title: "支付尾款",
    description:
      "开餐当天支付剩余餐费。可通过 EMT 电子转账或现金支付。如选择现金支付，可由配送司机上门收取尾款。",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="常见问题"
        title={
          <>
            关于月子餐，
            <br />
            您关心的问题都在这里。
          </>
        }
        description="整理加华月子餐预订、配送、菜单、营养、付款和预约咨询相关问题，帮助 GTA 家庭更清楚地准备产后服务。"
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
            <aside className="lg:sticky lg:top-24 rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-7">
              <div className="text-[#D6B37F] font-medium mb-3">FAQ 分类</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] leading-tight mb-5">
                快速找到您想了解的内容
              </h2>
              <div className="grid gap-2">
                {faqGroups.map((group) => (
                  <a
                    key={group.title}
                    href={`#${group.title}`}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
                  >
                    {group.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="grid gap-7">
              {faqGroups.map((group) => (
                <section
                  key={group.title}
                  id={group.title}
                  className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 scroll-mt-28"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] mb-3">
                      {group.title}
                    </h2>
                    <p className="text-gray-600 leading-7">{group.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {group.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-2xl border border-[#F0E8DD] bg-white p-5 open:shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#1F4E4C]">
                          <span>{faq.question}</span>
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] text-[#B8915D] transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 text-gray-600 leading-8">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Ordering Process */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Ordering Process
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              六步订餐流程
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              从预约咨询到正式开餐，每一步都清楚简单，让妈妈和家人更安心。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orderingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F4E4C] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#1F4E4C]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
{/* Share */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="text-[#D6B37F] font-semibold mb-3">
              SHARE
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              分享给更多妈妈
            </h2>

            <p className="mt-4 text-gray-600">
              如果这些月子餐和产后恢复问题对您有帮助，
              欢迎分享给正在备产或产后恢复的家人朋友。
            </p>
          </div>

          <SharePanel
            title="常见问题｜加华月子餐"
          />
        </div>
      </section>
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">还有其他问题？</div>
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
