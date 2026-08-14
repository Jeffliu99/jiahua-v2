import Link from "next/link";

export default function NutritionSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Nutrition Philosophy</p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">传统调理智慧，结合现代营养科学</h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
          根据产后恢复节奏设计营养重点，让每一餐更贴合身体真实需要。
        </p>
        <Link href="/nutrition" className="mt-8 inline-flex rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]">了解营养理念</Link>
      </div>
    </section>
  );
}
