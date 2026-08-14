import Link from "next/link";

export default function DessertCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <div className="rounded-[2rem] bg-[#1F4E4C] p-12 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D6B37F]">
            Order Handmade Desserts
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            想订购手作甜品或礼盒？
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/80">
            欢迎联系我们了解甜品口味、数量、礼盒搭配与团购安排。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]"
            >
              预约咨询
            </Link>
            <Link
              href="/meal-plans"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white"
            >
              查看月子套餐
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
