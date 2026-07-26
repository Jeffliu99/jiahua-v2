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
            /images/hero.png
          </div>

        </div>
      </section>

    </main>
  );
}