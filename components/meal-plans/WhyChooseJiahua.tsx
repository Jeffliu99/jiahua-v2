import Image from "next/image";

export default function WhyChooseJiahua() 
    { return <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
                <Image src="/images/meal-plans/home-meal-set-alt.jpg" alt="加华月子餐真实出餐与餐食组合" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div><div><p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Why Jiahua</p><h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">为什么妈妈选择加华月子餐</h2><ul className="mt-8 space-y-4 leading-8 text-gray-700"><li>✓ 四阶段科学调理体系</li><li>✓ 每日三餐三点</li><li>✓ 每日养生煲汤</li><li>✓ 新鲜水果与养生甜品</li><li>✓ 手工面点与现烤糕点</li><li>✓ GTA 多地区配送</li></ul></div></div></div></section>; }
