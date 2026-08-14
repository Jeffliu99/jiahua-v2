import Image from "next/image";

export default function ProductionSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center"><div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Daily Production</p>
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            每日现煮 · 新鲜出餐</h2>
            <p className="mt-6 leading-8 text-gray-600">加华月子餐坚持每日现煮制作，根据当天订单安排生产与配送，确保餐食的新鲜度、口感与品质。</p>
            <p className="mt-4 leading-8 text-gray-600">成熟稳定的出餐与配送流程，让家庭在产后恢复期减少准备压力。</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] shadow-sm">
            <Image src="/images/meal-plans/salmon-set-meal.jpg" alt="加华月子餐每日现煮出餐现场" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            </div>
            </div>
    </section>
  );
}
