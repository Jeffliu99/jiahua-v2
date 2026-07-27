export default function AboutPage() {
  const values = [
    {
      number: "01",
      title: "专业营养支持",
      text: "我们关注产后不同阶段的身体需求，通过更科学的营养搭配，为妈妈提供稳定、安心的恢复支持。",
    },
    {
      number: "02",
      title: "每日新鲜制作",
      text: "从食材选择到制作流程，我们坚持品质与口感兼顾，让每一餐都更值得信赖。",
    },
    {
      number: "03",
      title: "贴心配送服务",
      text: "服务覆盖大多伦多地区多个社区，帮助家庭减少采购、备餐与照护压力。",
    },
  ];

  const serviceAreas = [
    "Toronto",
    "North York",
    "Markham",
    "Richmond Hill",
    "Scarborough",
    "Vaughan",
    "Aurora",
    "Mississauga",
  ];

  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
            关于加华
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#1F4E4C] mb-6">
            为新生命而喜悦，
            <br />
            为妈妈的恢复而用心。
          </h1>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            加华月子餐希望用专业营养、每日新鲜制作与贴心配送服务，
            为加拿大华人家庭提供更安心、更从容的产后恢复支持。
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                品牌故事
              </div>

              <h2 className="text-4xl font-bold text-[#1F4E4C] mb-6">
                一段恢复旅程，值得被认真照顾
              </h2>

              <div className="space-y-5 text-gray-600 leading-8">
                <p>
                  产后恢复不仅是身体的调养，也是一段家庭重新建立节奏的重要时期。
                  在迎接新生命的喜悦里，妈妈同样需要被细致照顾。
                </p>

                <p>
                  加华月子餐的服务理念，来自对传统产后饮食智慧的尊重，也来自对现代营养科学的理解。
                  我们希望通过阶段化营养规划，让每一餐都更贴合身体恢复的真实需要。
                </p>

                <p>
                  从咨询、菜单规划、每日制作到配送到家，我们希望减少家庭在产后阶段的照护压力，
                  让妈妈更安心地休养，也让家人更从容地陪伴。
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-3xl p-10 border border-[#F0E8DD]">
              <div className="text-[#D6B37F] text-lg font-semibold mb-4">
                Jiahua Postpartum Nutrition
              </div>

              <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                不是简单送餐，而是恢复支持
              </h3>

              <p className="text-gray-600 leading-8">
                我们希望加华月子餐呈现的不只是餐食本身，而是一套围绕产后恢复、家庭照护与日常安心体验而设计的服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="contact" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              我们的坚持
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              用专业、品质与温度支持恢复
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              我们相信，好的产后服务应该让家庭觉得清楚、安心、可靠。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.number}
                className="bg-white rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition"
              >
                <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                  {value.number}
                </div>

                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {value.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">
                服务范围
              </div>

              <h2 className="text-4xl font-bold text-[#1F4E4C] mb-6">
                服务大多伦多地区家庭
              </h2>

              <p className="text-lg leading-8 text-gray-600">
                加华月子餐为 GTA 多个社区提供配送服务。具体配送范围、时间安排与服务细节，可通过预约营养顾问进一步确认。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-[#FAF8F5] rounded-2xl px-5 py-4 border border-[#F0E8DD] text-[#1F4E4C] font-semibold"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              联系我们
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              与加华月子餐取得联系
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              如果您想了解月子餐方案、配送范围或预约营养顾问，欢迎通过以下方式联系我们。
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#F0E8DD]">
              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">电话咨询</h3>
              <p className="text-gray-600 leading-7">905-XXX-XXXX</p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#F0E8DD]">
              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">邮箱联系</h3>
              <p className="text-gray-600 leading-7">info@jiahuameal.ca</p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#F0E8DD]">
              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">微信咨询</h3>
              <p className="text-gray-600 leading-7">微信客服咨询</p>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#F0E8DD]">
              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3">服务地区</h3>
              <p className="text-gray-600 leading-7">Greater Toronto Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">
 
          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            让专业营养，
            <br />
            成为恢复路上的安心陪伴。
          </h2>

          <p className="text-lg text-white leading-8 max-w-2xl mx-auto mb-8">
            如需了解更适合自己的产后营养方案，欢迎预约咨询，我们将根据您的恢复阶段与家庭需求提供建议。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
              <a href="/about#contact" className="bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold">
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
