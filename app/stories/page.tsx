import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "妈妈故事｜加华月子餐｜来自GTA家庭的产后恢复体验",
  description:
    "阅读来自Markham、Richmond Hill、North York、Aurora等GTA家庭的月子餐体验，了解加华月子餐如何陪伴妈妈完成产后恢复旅程。",
};

export default function StoriesPage() {
  const stories = [
    {
      location: "Markham 妈妈",
      title: "把更多时间留给了宝宝",
      text: "产后最让我安心的是，不需要每天思考吃什么、买什么或怎么做。每天按时送达的月子餐省去了很多家务时间，也让我能够更专注地照顾宝宝和恢复身体。",
    },
    {
      location: "Richmond Hill 妈妈",
      title: "恢复过程比想象中轻松",
      text: "剖腹产后的前几周是最需要照顾的时候。餐食搭配丰富、营养均衡，每天加热即可享用，对于整个家庭来说都减轻了不少压力。",
    },
    {
      location: "North York 妈妈",
      title: "专业与美味兼顾",
      text: "原本担心月子餐会比较单调，但实际体验后非常惊喜。每一道餐食都兼顾营养与口味，不仅吃得舒服，也让我对恢复身体更有信心。",
    },
    {
      location: "Aurora 家庭",
      title: "一份让家人放心的照顾",
      text: "从咨询到配送都非常细致。对于第一次成为父母的家庭来说，能够获得专业的饮食支持，让整个恢复过程变得更加安心。",
    },
  ];

  const values = [
    {
      number: "01",
      title: "少一些准备压力",
      text: "产后家庭需要面对许多新的节奏。稳定、准时、清晰的餐食安排，能让家人把更多精力留给妈妈和宝宝。",
    },
    {
      number: "02",
      title: "多一份恢复支持",
      text: "每一餐不只是方便，更是围绕身体恢复阶段所设计的营养支持。",
    },
    {
      number: "03",
      title: "让家庭更安心",
      text: "从方案咨询到每日配送，我们希望让整个服务过程更清楚、更可靠。",
    },
  ];

  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-14 md:pt-16 pb-10 md:pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
            妈妈故事
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-6">
            来自真实家庭的，
            <br />
            恢复体验与安心选择。
          </h1>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            每一位妈妈的恢复旅程都不相同，而被认真照顾的感受却总是相似。
            加华月子餐希望用专业营养、贴心服务与稳定配送，陪伴每一个家庭更从容地走过产后恢复阶段。
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              恢复体验
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">
              被认真照顾的恢复时光
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              从身体恢复到适应新生活，从照顾宝宝到重新关注自己，我们希望每一份餐食都能成为家庭日常中的安心支持。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <div
                key={story.location}
                className="bg-[#FAF8F5] rounded-3xl p-6 md:p-8 border border-[#F0E8DD] hover:shadow-lg transition"
              >
                <div className="text-[#D6B37F] text-lg mb-4">
                  ★★★★★
                </div>

                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {story.title}
                </h3>

                <p className="text-gray-600 leading-8 mb-6">
                  {story.text}
                </p>

                <div className="text-[#1F4E4C] font-semibold">
                  — {story.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Reflection */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                不只是月子餐
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-6">
                恢复从来不是一个人的旅程
              </h2>

              <div className="space-y-5 text-gray-600 leading-8">
                <p>
                  产后的家庭生活，会因为新生命的到来变得珍贵，也会因为新的节奏带来许多挑战。
                </p>

                <p>
                  我们希望用专业营养与贴心服务，帮助妈妈获得更好的照顾，也让家庭拥有更多安心与从容。
                </p>

                <p className="text-[#1F4E4C] font-semibold">
                  为新生命而喜悦，为妈妈的恢复而用心。
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              {values.map((value) => (
                <div
                  key={value.number}
                  className="bg-white rounded-3xl p-6 md:p-7 border border-[#F0E8DD]"
                >
                  <div className="text-[#D6B37F] text-sm font-semibold mb-3">
                    {value.number}
                  </div>

                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            了解更多妈妈体验
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            给自己一段，
            <br />
            被认真照顾的恢复时光。
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
