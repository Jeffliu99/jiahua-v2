export default function Home() {
  return (
    <main className="bg-[#FAF8F5]">

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
              加拿大专业产后营养服务
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-[#1F4E4C]">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-8 max-w-xl">
              专业产后营养支持，陪伴每一位妈妈从恢复走向焕发。
            </p>

            <div className="mt-10 flex gap-4">

              <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full">
                预约营养顾问
              </button>

              <button className="border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full">
                了解服务方案
              </button>

            </div>

          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/hero.png"
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />  
          </div>
        
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <div className="text-[#D6B37F] font-medium mb-4">
              为什么选择加华
            </div>

            <h2 className="text-5xl font-bold text-[#1F4E4C] mb-6">
              为什么越来越多家庭选择加华
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              产后的恢复不仅关乎身体调养，更影响未来的生活品质与育儿体验。
              加华月子餐融合传统产后调理智慧与现代营养科学，
              根据不同恢复阶段制定营养方案，让妈妈在照顾新生命的同时，
              也能获得专业而贴心的照护支持。
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 01 */}
            <div className="bg-white rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">

              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                01
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
                阶段化营养规划
              </h3>

              <p className="text-gray-600 leading-8">
                每位妈妈的恢复进程都不同，每个阶段的营养重点也各有差异。
                从产后初期调理、体能恢复到母乳喂养支持，
                我们根据恢复需求科学搭配餐食，
                让营养更精准地服务于身体恢复。
              </p>

            </div>

            {/* Card 02 */}
            <div className="bg-white rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">

              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                02
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
                每日新鲜制作
              </h3>

              <p className="text-gray-600 leading-8">
                精选优质食材，坚持每日现做配送，
                兼顾营养、品质与口感。
                从食材选择到制作流程，
                每一餐都严格把控，
                确保妈妈享受到安心且均衡的营养支持。
              </p>

            </div>

            {/* Card 03 */}
            <div className="bg-white rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">

              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                03
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
                专业恢复支持
              </h3>

              <p className="text-gray-600 leading-8">
                恢复并非单纯多吃，而是吃得科学、吃得适合。
                我们结合现代营养学理念与多年产后饮食经验，
                帮助妈妈在不同恢复阶段获得更全面的营养补充，
                让恢复过程更加从容安心。
              </p>

            </div>

            {/* Card 04 */}
            <div className="bg-white rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">

              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                04
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
                GTA覆盖配送
              </h3>

              <p className="text-gray-600 leading-8">
                覆盖大多伦多地区多个社区，
                为忙碌的家庭提供便捷配送服务。
                无需采购、备餐或清理厨房，
                让家人能把更多时间留给妈妈和宝宝，
                专注于恢复与陪伴。
              </p>

            </div>

          </div>

          <div className="text-center max-w-3xl mx-auto mt-20">

            <p className="text-xl text-[#1F4E4C] leading-9">
              我们相信，每一位迎接新生命的妈妈，
              都值得拥有一段被认真照顾的恢复时光。
            </p>

            <p className="text-gray-600 mt-4 leading-8">
              加华月子餐，希望用专业营养与贴心服务，
              陪伴每个家庭开启更安心的新生活。
            </p>

          </div>

        </div>
      </section>
      
      {/* Services Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-[#D6B37F] font-medium mb-4">
              服务方案
            </div>

            <h2 className="text-5xl font-bold text-[#1F4E4C] mb-6">
              为不同恢复阶段提供更适合的营养支持
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              每一位妈妈的身体状况、恢复节奏和营养需求都不尽相同。
              加华月子餐根据产后不同阶段的恢复重点，提供多元化营养方案，
              帮助妈妈更安心、更科学地度过重要的恢复时期。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">
              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                01
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
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

              <button className="text-[#1F4E4C] font-semibold">
                了解更多 →
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">
              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                02
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
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

              <button className="text-[#1F4E4C] font-semibold">
                了解更多 →
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">
              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                03
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
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

              <button className="text-[#1F4E4C] font-semibold">
                了解更多 →
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD] hover:shadow-xl transition">
              <div className="text-[#D6B37F] text-sm font-semibold mb-4">
                04
              </div>

              <h3 className="text-3xl font-bold text-[#1F4E4C] mb-4">
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

              <button className="text-[#1F4E4C] font-semibold">
                预约咨询 →
              </button>
            </div>

          </div>

          <div className="text-center max-w-3xl mx-auto mt-20">
            <p className="text-xl text-[#1F4E4C] leading-9">
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
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">

            <div className="text-[#D6B37F] font-medium mb-4">
              妈妈故事
            </div>

            <h2 className="text-5xl font-bold text-[#1F4E4C] mb-6">
              来自真实家庭的恢复体验
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              每一位妈妈的恢复旅程都独一无二，而被认真照顾的感受却总是相似。
              从身体恢复到适应新生活，从照顾宝宝到重新关注自己，
              加华月子餐希望用更专业的营养支持与更贴心的服务，
              陪伴每一段重要的成长经历。
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Story 1 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">

              <div className="text-[#D6B37F] text-xl mb-6">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                把更多时间留给了宝宝
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                产后最让我安心的是，不需要每天思考吃什么、买什么或怎么做。
                每天按时送达的月子餐不仅省去了很多家务时间，
                也让我能够更专注地照顾宝宝和恢复身体。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Markham 妈妈
              </div>

            </div>

            {/* Story 2 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">

              <div className="text-[#D6B37F] text-xl mb-6">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                恢复过程比想象中轻松
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                剖腹产后的前几周是最需要照顾的时候。
                餐食搭配丰富、营养均衡，每天加热即可享用，
                对于整个家庭来说都减轻了不少压力。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Richmond Hill 妈妈
              </div>

            </div>

            {/* Story 3 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">

              <div className="text-[#D6B37F] text-xl mb-6">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                专业与美味兼顾
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                原本担心月子餐会比较单调，但实际体验后非常惊喜。
                每一道餐食都兼顾营养与口味，
                不仅吃得舒服，也让我对恢复身体更有信心。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — North York 妈妈
              </div>

            </div>

            {/* Story 4 */}
            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">

              <div className="text-[#D6B37F] text-xl mb-6">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                一份让家人放心的照顾
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                从咨询到配送都非常细致。
                对于第一次成为父母的我们来说，
                能够获得专业的饮食支持，
                让整个恢复过程变得更加安心。
              </p>

              <div className="text-[#1F4E4C] font-semibold">
                — Aurora 家庭
              </div>

            </div>

          </div>

          {/* Bottom Statement */}
          <div className="max-w-4xl mx-auto text-center mt-20">

            <h3 className="text-4xl font-bold text-[#1F4E4C] mb-6">
              恢复从来不是一个人的旅程
            </h3>

            <p className="text-lg leading-9 text-gray-600">
              我们希望用专业营养与贴心服务，
              陪伴每一位妈妈走过产后恢复的重要阶段，
              让身体获得更好的照顾，也让家庭拥有更多安心与从容。
            </p>

            <p className="text-[#1F4E4C] font-semibold text-xl mt-8">
              为新生命而喜悦，为妈妈的恢复而用心。
            </p>

          </div>

        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-28 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <div className="text-[#D6B37F] font-medium mb-6">
            开启恢复之旅
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            因为照顾新生命的同时，
            <br />
            妈妈也值得被认真照顾。
          </h2>

          <p className="text-xl text-white/80 leading-9 mb-12 max-w-3xl mx-auto">
            产后恢复不仅关乎身体调养，更是一段值得被温柔对待的重要旅程。
            从恢复体力、支持母乳喂养，到重新找回属于自己的状态，
            每一个阶段都需要更科学的营养支持与更细致的照顾。
          </p>

          <p className="text-lg text-white/70 leading-8 mb-12 max-w-3xl mx-auto">
            加华月子餐融合传统产后调理智慧与现代营养科学，
            通过阶段化营养规划、每日新鲜制作与贴心配送服务，
            陪伴每一位妈妈更安心、更从容地走过这段珍贵时光。
          </p>

          <div className="mb-12">
            <p className="text-[#D6B37F] text-2xl font-semibold mb-2">
              为新生命而喜悦，
            </p>

            <p className="text-[#D6B37F] text-2xl font-semibold">
              为妈妈的恢复而用心。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-[#D6B37F] text-[#1F4E4C] px-10 py-4 rounded-full font-semibold hover:opacity-90 transition">
              预约营养顾问
            </button>

            <button className="border border-white/30 text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition">
              了解服务方案
            </button>

          </div>

          <div className="mt-10 text-white/60 text-sm">
            免费咨询 ｜ GTA地区配送服务 ｜ 个性化营养规划
          </div>

        </div>
      </section>
    </main>
  );
}