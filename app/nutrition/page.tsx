export default function NutritionPage() {
  const stages = [
    {
      number: "01",
      title: "产后初期调理",
      subtitle: "帮助身体从生产后的消耗中逐步恢复。",
      text: "产后初期的饮食重点在于温和调理、补充基础营养，并减少身体额外负担。我们更关注餐食的清淡、易消化与均衡搭配，让妈妈能够更安心地开始恢复。",
    },
    {
      number: "02",
      title: "体力恢复阶段",
      subtitle: "支持身体逐步恢复日常活力。",
      text: "随着身体状态逐渐稳定，营养重点会从温和调理转向体力恢复与营养补充。菜单搭配会更加丰富，帮助妈妈获得稳定、持续的能量支持。",
    },
    {
      number: "03",
      title: "营养巩固阶段",
      subtitle: "为后续恢复与哺乳期需求提供支持。",
      text: "在恢复进入稳定阶段后，我们进一步关注营养巩固、母乳喂养支持与长期身体状态。通过更完整的膳食组合，陪伴妈妈更从容地进入新的生活节奏。",
    },
  ];

  const standards = [
    {
      title: "精选优质食材",
      text: "坚持选择可靠来源的食材，重视新鲜度、品质与适合产后恢复阶段的营养价值。",
    },
    {
      title: "每日新鲜制作",
      text: "餐食每日制作，兼顾口感与营养，让妈妈每天都能享用安心、温暖且均衡的一餐。",
    },
    {
      title: "均衡营养搭配",
      text: "每一份菜单都关注主食、蛋白质、蔬菜、汤品与补充营养之间的平衡。",
    },
    {
      title: "适合恢复节奏",
      text: "根据不同恢复阶段调整餐食重点，让饮食更贴合身体真实需要。",
    },
  ];

  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
            营养理念
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#1F4E4C] mb-6">
            科学恢复，
            <br />
            从每日营养开始。
          </h1>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            产后的每一个阶段，身体都有不同的恢复重点。加华月子餐融合传统产后调理智慧与现代营养科学，通过阶段化营养规划，帮助妈妈更安心、更从容地完成恢复过程。
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                我们的理念
              </div>

              <h2 className="text-4xl font-bold text-[#1F4E4C] mb-6">
                恢复身体，不应该靠将就。
              </h2>

              <div className="space-y-5 text-gray-600 leading-8">
                <p>
                  我们相信，产后恢复不是简单地吃得多，而是吃得对。
                </p>

                <p>
                  每一个恢复阶段都有不同的营养重点，每一道餐食都应服务于身体真正的需求。
                </p>

                <p>
                  通过更科学的营养规划、更严格的品质标准和更贴心的服务体验，我们希望帮助每一位妈妈更从容地度过人生重要的恢复阶段。
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] text-lg font-semibold mb-4">
                传统调理 × 现代营养
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                用更科学的方式理解产后饮食
              </h3>

              <p className="text-gray-600 leading-8">
                加华月子餐尊重传统产后调理经验，同时结合现代营养科学对食材、搭配与恢复节奏的理解。我们希望每一餐都不仅是方便的配送服务，更是对身体恢复的认真支持。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recovery Stages */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              阶段化恢复规划
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              不同阶段，不同营养重点
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              产后恢复是一个循序渐进的过程。我们根据恢复节奏设计不同阶段的营养重点，让饮食更贴合身体的真实需要。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage) => (
              <div
                key={stage.number}
                className="bg-white rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition"
              >
                <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                  {stage.number}
                </div>

                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-3">
                  {stage.title}
                </h3>

                <p className="text-[#1F4E4C] font-medium mb-4">
                  {stage.subtitle}
                </p>

                <p className="text-gray-600 leading-8">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Standards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              食材与品质标准
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              每一餐，都从认真选择开始
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              产后饮食需要的不只是味道，更是对品质、搭配与制作流程的持续坚持。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {standards.map((standard) => (
              <div
                key={standard.title}
                className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD]"
              >
                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {standard.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {standard.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            专业营养支持
          </div>

          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            让每一天的饮食，
            <br />
            都成为恢复路上的安心陪伴。
          </h2>

          <p className="text-lg text-white leading-8 max-w-2xl mx-auto mb-8">
            如果您希望了解更适合自己的产后营养方案，欢迎预约营养顾问，获得更清晰的服务建议。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
              <a href="/about#contact" className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full">
                预约营养顾问
              </a>
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              <a href="/services" className="text-white">
                查看服务方案
              </a>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
