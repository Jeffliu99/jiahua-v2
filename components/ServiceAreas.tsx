import Link from "next/link";
import { serviceAreas } from "@/data/home/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Service Areas</p>
          <h2 className="mt-3 text-4xl font-bold text-[#1F4E4C] md:text-5xl">服务覆盖大多伦多地区（GTA）</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            我们为大多伦多地区华人家庭提供月子餐配送与产后营养支持服务。无论您位于市中心还是周边社区，都欢迎联系我们了解最新配送安排。
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((city) => (
            <div key={city.name} className="group relative overflow-hidden rounded-[28px] border border-[#E8DCC9] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B37F] hover:shadow-xl">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#D6B37F]/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FAF8F5] text-2xl">📍</div>
                <h3 className="text-2xl font-bold text-[#1F4E4C]">{city.name}</h3>
                <p className="mt-4 leading-7 text-gray-600">{city.description}</p>
                <div className="mt-6 text-sm font-semibold text-[#B8915D]">查看服务区域 →</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[32px] bg-[#1F4E4C] px-10 py-14 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">不确定是否在配送范围内？</h3>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">欢迎联系我们获取最新配送安排，我们会根据您的具体地址提供服务建议。</p>
          <div className="mt-8">
            <Link href="/contact" className="inline-flex rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-white">查看配送范围</Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">热门搜索</p>
          <p className="mt-3 text-sm leading-8 text-gray-600">
            Toronto 月子餐 · Markham 月子餐 · Richmond Hill 月子餐 · Vaughan 月子餐 · North York 月子餐 · Scarborough 月子餐 · Mississauga 月子餐 · Aurora 月子餐 · Newmarket 月子餐
          </p>
        </div>
      </div>
    </section>
  );
}
