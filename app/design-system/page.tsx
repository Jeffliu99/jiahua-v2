export default function DesignSystemPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">

      {/* Page Header */}
      <section className="py-16 border-b border-[#F0E8DD]">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-[#D6B37F] font-medium mb-3">
            Design System
          </div>

          <h1 className="text-5xl font-bold text-[#1F4E4C] mb-4">
            加华月子餐设计系统
          </h1>

          <p className="text-lg text-gray-600">
            品牌颜色、字体、按钮、卡片与页面组件统一展示。
          </p>

        </div>
      </section>

      {/* Colors */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-[#1F4E4C] mb-8">
            品牌颜色
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <div className="h-32 rounded-2xl bg-[#1F4E4C]" />
              <p className="mt-3 font-semibold">深墨绿</p>
              <p className="text-gray-500">#1F4E4C</p>
            </div>

            <div>
              <div className="h-32 rounded-2xl bg-[#173D3B]" />
              <p className="mt-3 font-semibold">深绿色</p>
              <p className="text-gray-500">#173D3B</p>
            </div>

            <div>
              <div className="h-32 rounded-2xl bg-[#EAC89A]" />
              <p className="mt-3 font-semibold">香槟金</p>
              <p className="text-gray-500">#EAC89A</p>
            </div>

            <div>
              <div className="h-32 rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5]" />
              <p className="mt-3 font-semibold">暖白色</p>
              <p className="text-gray-500">#FAF8F5</p>
            </div>

          </div>

        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-[#1F4E4C] mb-8">
            字体层级
          </h2>

          <div className="space-y-6">

            <h1 className="text-5xl font-bold text-[#1F4E4C]">
              Hero 标题
            </h1>

            <h2 className="text-4xl font-bold text-[#1F4E4C]">
              Section 标题
            </h2>

            <h3 className="text-2xl font-bold text-[#1F4E4C]">
              Card 标题
            </h3>

            <p className="text-lg text-gray-600">
              这是正文示例，用于品牌介绍、服务方案和说明文字。
            </p>

            <p className="text-sm text-gray-500">
              这是辅助说明文字。
            </p>

          </div>

        </div>
      </section>

      {/* Buttons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-[#1F4E4C] mb-8">
            按钮样式
          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full font-semibold">
              主按钮
            </button>

            <button className="border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full font-semibold">
              次按钮
            </button>

            <button className="bg-[#EAC89A] text-[#173D3B] px-8 py-4 rounded-full font-bold">
              CTA按钮
            </button>

          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-[#1F4E4C] mb-8">
            卡片组件
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">01</div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                Why Choose Us
              </h3>

              <p className="text-gray-600">
                为什么选择加华卡片示例。
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#F0E8DD]">
              <div className="text-[#D6B37F] mb-3">02</div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                服务方案
              </h3>

              <p className="text-gray-600">
                服务方案卡片示例。
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-8 rounded-3xl border border-[#F0E8DD]">
              <div className="text-[#D6B37F] text-lg mb-3">
                ★★★★★
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                妈妈故事
              </h3>

              <p className="text-gray-600">
                客户评价卡片示例。
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Preview */}
      <section className="py-16 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">

          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            CTA Preview
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            因为照顾新生命的同时，
            <br />
            妈妈也值得被认真照顾。
          </h2>

          <p className="text-xl text-white font-medium leading-9 max-w-3xl mx-auto mb-8">
            专业产后营养支持，
            陪伴每一位妈妈更安心、更从容地走过恢复的重要阶段。
          </p>

          <div className="mb-8">

            <p className="text-[#F4D7A7] text-2xl font-bold">
              为新生命而喜悦，
            </p>

            <p className="text-[#F4D7A7] text-2xl font-bold">
              为妈妈的恢复而用心。
            </p>

          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold">
              预约营养顾问
            </button>

            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold">
              了解服务方案
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}