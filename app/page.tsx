export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              加华月子餐
            </h2>

            <p className="text-xs tracking-widest text-[#D6B37F] uppercase">
              Jiahua Postpartum Nutrition
            </p>
          </div>

          <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full">
            预约营养顾问
          </button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
              加拿大专业产后营养服务
            </div>

            <h1 className="text-6xl font-bold leading-tight text-[#1F4E4C]">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              专业产后营养支持，陪伴每一位妈妈从恢复走向焕发。
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full">
                预约营养顾问
              </button>

              <button className="border border-[#D6B37F] px-8 py-4 rounded-full">
                了解服务方案
              </button>
            </div>
          </div>

          <div>
            <img
              src="/images/hero.png"
              alt="加华月子餐"
              className="w-full rounded-[40px] shadow-xl"
            />
          </div>

        </div>
      </section>
    </main>
  );
}