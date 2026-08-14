import Image from "next/image";
import Link from "next/link";

export default function BreakfastComboSection() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Breakfast Combo
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            早餐组合与家庭常备
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            花卷、馒头、鲜肉包和烧饼都适合搭配鸡蛋、蔬菜、豆浆或粥品，作为方便又有饱腹感的中式早餐选择。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]"
          >
            咨询早餐组合
          </Link>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/dim-sum/handmade-dim-sum-overview.png"
              alt="加华手工面点早餐组合"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
