import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "加华手作甜品 | Handmade Desserts",
  description: "每日新鲜制作的蛋糕、甜品杯、蛋挞与手作糕点。",
};

const categories = [
  { title: "蛋糕卷系列", description: "抹茶、巧克力等经典蛋糕卷。", image: "/images/desserts/roll-cake-series.png" },
  { title: "甜品杯系列", description: "草莓、芒果、紫薯等人气甜品杯。", image: "/images/desserts/dessert-cup-series.png" },
  { title: "现烤蛋挞", description: "香酥挞皮与浓郁内馅。", image: "/images/desserts/egg-tarts-series.png" },
  { title: "古早蛋糕系列", description: "红豆古早蛋糕与巧克力古早蛋糕。", image: "/images/desserts/castella-cake-series.png" },
  { title: "提拉米苏系列", description: "细腻奶香与经典可可风味。", image: "/images/desserts/tiramisu-series.png" },
  { title: "海苔肉松蛋糕系列", description: "松软蛋糕体结合海苔与肉松风味。", image: "/images/desserts/pork-floss-cake-series.png" },
  { title: "抹茶大福系列", description: "Q弹外皮搭配抹茶奶油与芝士内馅。", image: "/images/desserts/matcha-mochi-series.png" },
  { title: "曲奇系列", description: "巧克力曲奇与特色夹心曲奇。", image: "/images/desserts/cookie-series.png" },
];

export default function HandmadeDessertsPage() {
  return (
    <>
      <PageHero
        eyebrow="Handmade Desserts"
        title="加华手作甜品"
        description="每日新鲜制作 · 手工烘焙 · 限量供应"
        height="lg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">加华手作甜品精选</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              从蛋糕卷、甜品杯、葡式蛋挞到节日礼盒，每一份甜品均坚持手工制作与当天烘焙。
            </p>
          </div>

          <div className="relative aspect-[16/12] overflow-hidden rounded-[2rem] border border-[#E8DCC9]">
            <Image src="/images/desserts/handmade-desserts-overview.png" alt="手作甜品总览" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F4E4C]">分享给家人和朋友</h2>
          <p className="mt-4 text-gray-600">如果您喜欢我们的手作甜品，欢迎分享给家人、朋友或妈妈群。</p>
          <div className="mt-8">
            <SharePanel title="加华手作甜品 | Handmade Desserts" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">节日礼盒与团体订购</h2>
            <p className="mt-6 text-gray-600">支持家庭聚会、节日礼盒与企业订购咨询。</p>
            <Link href="/contact" className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white">预约咨询 →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
