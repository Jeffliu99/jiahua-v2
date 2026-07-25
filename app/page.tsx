export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
              加拿大专业产后营养服务
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#1F4E4C]">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
              加华月子餐融合传统产后调理智慧与现代营养科学，
              根据身体恢复进程设计阶段化营养方案。
              每日新鲜制作配送，让妈妈专注休养与陪伴宝宝，
              把恢复交给专业。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#173D3B] transition">
                预约营养顾问
              </button>

              <button className="border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full font-medium hover:bg-[#D6B37F]/10 transition">
                了解服务方案
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16">
              <div>
                <div className="text-[#D6B37F] font-bold text-xl">01</div>
                <h3 className="text-[#1F4E4C] font-semibold mt-2">
                  阶段化营养规划
                </h3>
              </div>

              <div>
                <div className="text-[#D6B37F] font-bold text-xl">02</div>
                <h3 className="text-[#1F4E4C] font-semibold mt-2">
                  每日新鲜制作
                </h3>
              </div>

              <div>
                <div className="text-[#D6B37F] font-bold text-xl">03</div>
                <h3 className="text-[#1F4E4C] font-semibold mt-2">
                  专业恢复支持
                </h3>
              </div>

              <div>
                <div className="text-[#D6B37F] font-bold text-xl">04</div>
                <h3 className="text-[#1F4E4C] font-semibold mt-2">
                  GTA覆盖配送
                </h3>
              </div>
            </div>

          </div>

          {/* Right Visual */}
          <div>
            <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">
              https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}