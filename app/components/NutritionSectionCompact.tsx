import Link from "next/link";

export default function NutritionSectionCompact() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-7 lg:gap-10 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="text-[#D6B37F] font-medium mb-2">营养理念</div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-4">
              传统调理智慧，结合现代营养科学
            </h2>

            <p className="text-base leading-7 text-gray-600 mb-5 max-w-xl">
              根据产后恢复节奏设计营养重点，让每一餐更贴合身体真实需要。
            </p>

            <Link
              href="/nutrition"
              className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
            >
              了解营养理念
            </Link>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] mb-2">
                产后初期调理
              </h3>
              <p className="text-gray-600 leading-7">
                温和、清淡、易消化，帮助身体逐步从生产后的消耗中恢复。
              </p>
            </div>

            <div className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#1F4E4C] mb-2">
                营养恢复支持
              </h3>
              <p className="text-gray-600 leading-7">
                从基础营养补充到体力恢复，帮助妈妈更稳定地进入新的生活节奏。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
