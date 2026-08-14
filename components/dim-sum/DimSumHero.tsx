import Link from "next/link";

export default function DimSumHero() {
  return (
    <section className="relative overflow-hidden bg-[#1F4E4C] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,127,0.22),transparent_42%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
          Handmade Dim Sum
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          加华手工面点精选
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90">
          每日手工制作花卷、特色馒头、鲜肉包、烧麦与烧饼，适合早餐、家庭聚餐、社区团购和企业活动。
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-white"
          >
            预约面点订购
          </Link>
          <a
            href="#dim-sum-categories"
            className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10"
          >
            查看面点系列
          </a>
        </div>
      </div>
    </section>
  );
}
