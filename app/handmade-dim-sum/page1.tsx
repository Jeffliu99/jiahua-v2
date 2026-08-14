import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SharePanel from "@/components/SharePanel";
import { handmadeDimSumSchema } from "@/lib/schema/handmade-dim-sum-service-schema";
import { handmadeDimSumBreadcrumbSchema} from "@/lib/schema/handmade-dim-sum-breadcrumb-schema";

export const metadata: Metadata = {
  title: "加华手工面点 | Handmade Dim Sum",
  description: "每日手工制作花卷、特色馒头、鲜肉包、烧麦与烧饼。",
};

const categories = [
  { title: "花卷系列", description: "南瓜花卷、紫薯花卷与红豆花卷。", image: "/images/dim-sum/steamed-roll-series.png" },
  { title: "特色馒头系列", description: "多款特色风味馒头，每日新鲜制作。", image: "/images/dim-sum/specialty-steamed-buns-series.png" },
  { title: "鲜肉包系列", description: "精选猪肉馅料，手工包制。", image: "/images/dim-sum/pork-bun-series.png" },
  { title: "香菇鲜肉烧麦系列", description: "传统粤式烧麦，新鲜现蒸。", image: "/images/dim-sum/siu-mai-series.png" },
  { title: "鲜肉烧饼系列", description: "金黄酥香外皮搭配鲜肉馅料。", image: "/images/dim-sum/savory-meat-pastry-series.png" },
  { title: "牛肉烧饼系列", description: "酥香外皮搭配牛肉馅料。", image: "/images/dim-sum/savory-beef-pastry-series.png" },
];

export default function HandmadeDimSumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
        __html: JSON.stringify(
        handmadeDimSumSchema
        ).replace(/</g, "\\u003c"),
        }}
      />

      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          handmadeDimSumBreadcrumbSchema
        ).replace(/</g, "\\u003c"),
      }}
      />
      <PageHero
        eyebrow="Handmade Dim Sum"
        title="加华手工面点"
        description="每日手工制作 · 自然发酵 · 新鲜现蒸"
        height="lg"
      />
  
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">手工面点精选</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              从花卷、馒头、鲜肉包到烧麦与烧饼，坚持每日手工制作与新鲜供应。
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-[#E8DCC9] shadow-xl">
            <Image src="/images/dim-sum/handmade-dim-sum-overview.png" alt="手工面点总览" fill className="object-cover" />
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center"><h3 className="font-bold">手工制作</h3><p className="mt-3 text-gray-600">坚持传统工艺与每日现做。</p></div>
            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center"><h3 className="font-bold">精选食材</h3><p className="mt-3 text-gray-600">兼顾品质与口感。</p></div>
            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center"><h3 className="font-bold">家庭共享</h3><p className="mt-3 text-gray-600">适合早餐与家庭聚餐。</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1F4E4C]">分享给家人和朋友</h2>
          <p className="mt-4 text-gray-600">喜欢我们的手工面点？欢迎分享给家人、朋友和妈妈群。</p>
          <div className="mt-8"><SharePanel title="加华手工面点 | Handmade Dim Sum" /></div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1F4E4C]">预约咨询与预订</h2>
            <p className="mt-6 text-gray-600">欢迎咨询手工面点、月子套餐与团体订购服务。</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white">预约咨询</Link>
              <Link href="/meal-plans" className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]">查看月子套餐</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
