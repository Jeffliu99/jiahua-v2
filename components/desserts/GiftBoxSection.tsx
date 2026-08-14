import Image from "next/image";
import Link from "next/link";

export default function GiftBoxSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/desserts/handmade-desserts-overview.png"
              alt="加华手作甜品礼盒与甜品组合"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Gift Box & Party Desserts
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            节日礼盒与聚会甜品
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            适合节日送礼、生日派对、百天宴、下午茶和家庭聚会。可根据人数与场景搭配不同甜品组合。
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>甜品杯组合</li>
            <li>蛋糕卷与蛋挞搭配</li>
            <li>曲奇与糕点礼盒</li>
            <li>企业下午茶与团购咨询</li>
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]"
          >
            咨询礼盒与聚会甜品
          </Link>
        </div>
      </div>
    </section>
  );
}
