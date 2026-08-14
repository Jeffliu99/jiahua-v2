import Link from "next/link";

export default function DessertsHero() {
  return (
    <section className="relative overflow-hidden bg-[#1F4E4C] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,127,0.22),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
          Handmade Desserts
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          加华手作甜品精选
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
          从蛋糕卷、甜品杯、现烤蛋挞到提拉米苏、曲奇与节日礼盒，适合家庭聚会、生日派对、下午茶和团体订购。
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-white"
          >
            预约甜品咨询
          </Link>
          <a
            href="#dessert-categories"
            className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10"
          >
            查看甜品系列
          </a>
        </div>
      </div>
    </section>
  );
}
