import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "加华月子餐｜GTA专业产后营养支持与月子餐服务",
  description:
    "加华月子餐为大多伦多地区华人家庭提供专业产后营养支持、阶段化月子餐方案与贴心配送服务，陪伴妈妈安心度过产后恢复期。",
};
export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-flex px-3 py-1.5 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-5">
              加拿大专业产后营养服务
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1F4E4C]">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              专业产后营养支持，
              陪伴每一位妈妈从恢复走向焕发。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full">
                <a href="/contact" className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full">
                  预约营养顾问
                </a>
              </button>

              <button className="border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full">
                <a href="/services" className="text-[#1F4E4C]">
                  了解服务方案
                </a>
              </button>

            </div>

          </div>

          <div>
            <img src="/images/hero.png" alt="Hero Image" className="rounded-3xl shadow-lg" />
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="text-[#D6B37F] font-medium mb-4">
              为什么选择加华
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-6">
              为什么越来越多家庭选择加华
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              产后的恢复不仅关乎身体调养，更影响未来的生活品质与育儿体验。
              加华月子餐融合传统产后调理智慧与现代营养科学，
              根据不同恢复阶段制定营养方案。
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-3xl p-8 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">01</div>
              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                阶段化营养规划
              </h3>
              <p className="text-gray-600 leading-8">
                根据不同恢复阶段科学设计菜单，
                让营养更精准地服务于身体恢复。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">02</div>
              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                每日新鲜制作
              </h3>
              <p className="text-gray-600 leading-8">
                精选优质食材，坚持每日现做配送，
                确保每一餐兼顾营养与品质。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">03</div>
              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                专业恢复支持
              </h3>
              <p className="text-gray-600 leading-8">
                结合现代营养学与产后饮食经验，
                提供更科学的恢复支持。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">04</div>
              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                GTA覆盖配送
              </h3>
              <p className="text-gray-600 leading-8">
                覆盖大多伦多地区，
                让家庭把更多时间留给妈妈和宝宝。
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="text-[#D6B37F] font-medium mb-3">
              服务方案
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              为不同恢复阶段提供更适合的营养支持
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              每一位妈妈的身体状况、恢复节奏和营养需求都不尽相同。
              加华月子餐根据产后不同阶段的恢复重点，
              提供多元化营养方案，帮助妈妈更安心、更科学地度过重要的恢复时期。
            </p>

          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                01
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                30天月子餐方案
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                为产后恢复关键期精心设计的阶段化营养菜单，
                从产后初期调理到体力恢复与营养补充，
                帮助身体循序渐进恢复活力。
              </p>

              <div className="text-sm text-gray-500 mb-6">
                适合对象：
                <ul className="mt-3 space-y-2">
                  <li>• 顺产妈妈</li>
                  <li>• 初次坐月子妈妈</li>
                  <li>• 希望获得全面营养支持的家庭</li>
                </ul>
              </div>

              <button className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition">
                了解更多 →
              </button>

            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                02
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                剖腹产恢复方案
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                针对术后恢复特点制定营养规划，
                兼顾恢复期间的饮食需求与身体调养，
                让恢复过程更加安心从容。
              </p>

              <div className="text-sm text-gray-500 mb-6">
                适合对象：
                <ul className="mt-3 space-y-2">
                  <li>• 剖腹产妈妈</li>
                  <li>• 术后恢复阶段妈妈</li>
                  <li>• 需要额外恢复支持的家庭</li>
                </ul>
              </div>

              <button className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition">
                了解更多 →
              </button>

            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                03
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                哺乳期营养方案
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                为母乳喂养阶段提供科学营养补充，
                帮助满足产后恢复与哺乳阶段的双重需求，
                提供持续的营养支持。
              </p>

              <div className="text-sm text-gray-500 mb-6">
                适合对象：
                <ul className="mt-3 space-y-2">
                  <li>• 哺乳期妈妈</li>
                  <li>• 母乳喂养家庭</li>
                  <li>• 需要持续营养支持的妈妈</li>
                </ul>
              </div>

              <button className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition">
                了解更多 →
              </button>

            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                04
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                高端定制方案
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                根据个人体质、恢复进度与饮食习惯进行专属规划，
                提供更个性化、更高品质的营养支持与服务体验。
              </p>

              <div className="text-sm text-gray-500 mb-6">
                适合对象：
                <ul className="mt-3 space-y-2">
                  <li>• 特殊饮食需求</li>
                  <li>• 高品质恢复需求</li>
                  <li>• 个性化营养规划需求</li>
                </ul>
              </div>

              <button className="text-[#1F4E4C] font-semibold hover:text-[#D6B37F] transition">
                预约咨询 →
              </button>

            </div>

          </div>

          {/* Bottom Statement */}
          <div className="text-center max-w-3xl mx-auto mt-12">

            <p className="text-lg text-[#1F4E4C] leading-9">
              恢复没有标准答案，但专业营养能够帮助身体走得更从容。
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              我们希望通过更科学的规划、更安心的服务与更细致的照护，
              陪伴每一位妈妈完成这段重要的恢复旅程。
            </p>

          </div>

        </div>
      </section>
      {/* Stories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">

            <div className="text-[#D6B37F] font-medium mb-3">
              妈妈故事
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              来自真实家庭的恢复体验
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              每一位妈妈的恢复旅程都独一无二，
              而被认真照顾的感受却总是相似。
              从身体恢复到适应新生活，
              从照顾宝宝到重新关注自己，
              加华月子餐希望用更专业的营养支持与更贴心的服务，
              陪伴每一段重要的成长经历。
            </p>

          </div>

          {/* Story Cards */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Story 1 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg mb-4">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                把更多时间留给了宝宝
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                产后最让我安心的是，
                不需要每天思考吃什么、买什么或怎么做。
                每天按时送达的月子餐不仅省去了很多家务时间，
                也让我能够更专注地照顾宝宝和恢复身体。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Markham 妈妈
              </div>

            </div>

            {/* Story 2 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg mb-4">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                恢复过程比想象中轻松
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                剖腹产后的前几周是最需要照顾的时候。
                餐食搭配丰富、营养均衡，
                每天加热即可享用，
                对于整个家庭来说都减轻了不少压力。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Richmond Hill 妈妈
              </div>

            </div>

            {/* Story 3 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg mb-4">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                专业与美味兼顾
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                原本担心月子餐会比较单调，
                但实际体验后非常惊喜。
                每一道餐食都兼顾营养与口味，
                不仅吃得舒服，
                也让我对恢复身体更有信心。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — North York 妈妈
              </div>

            </div>

            {/* Story 4 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition">

              <div className="text-[#D6B37F] text-lg mb-4">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                一份让家人放心的照顾
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                从咨询到配送都非常细致。
                对于第一次成为父母的家庭来说，
                能够获得专业的饮食支持，
                让整个恢复过程变得更加安心。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Aurora 家庭
              </div>

            </div>

          </div>

          {/* Bottom Statement */}
          <div className="max-w-4xl mx-auto text-center mt-12">

            <h3 className="text-3xl font-bold text-[#1F4E4C] mb-5">
              恢复从来不是一个人的旅程
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              我们希望用专业营养与贴心服务，
              陪伴每一位妈妈走过产后恢复的重要阶段，
              让身体获得更好的照顾，
              也让家庭拥有更多安心与从容。
            </p>

            <p className="text-[#1F4E4C] font-semibold text-lg mt-6">
              为新生命而喜悦，为妈妈的恢复而用心。
            </p>

          </div>

        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">

          {/* Small Title */}
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            开启恢复之旅
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            因为照顾新生命的同时，
            <br />
            妈妈也值得被认真照顾。
          </h2>

          {/* Description */}
          <p className="text-xl text-white font-medium leading-9 max-w-3xl mx-auto mb-8">
            专业产后营养支持，
            陪伴每一位妈妈更安心、更从容地走过恢复的重要阶段。
          </p>

          {/* Brand Statement */}
          <div className="mb-8">

            <p className="text-[#F4D7A7] text-2xl font-bold">
              为新生命而喜悦，
            </p>

            <p className="text-[#F4D7A7] text-2xl font-bold">
              为妈妈的恢复而用心。
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
              <a href="/contact" className="bg-[#F4D7A7] text-[#173D3B] font-semibold">
                预约营养顾问
              </a>
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition">
              <a href="/services" className="text-white">
                了解服务方案
              </a>  
            </button>

          </div>

          {/* Footer Note */}
          <div className="mt-6 text-white text-sm font-medium">
            免费咨询 ｜ GTA地区配送服务 ｜ 个性化营养规划
          </div>

        </div>
      </section>
    </main>
  );
}