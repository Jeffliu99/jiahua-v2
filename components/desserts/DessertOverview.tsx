import Image from "next/image";

export default function DessertOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Signature Dessert Collection
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            精选手作甜品总览
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            使用真实甜品实拍图展示产品系列，让顾客一眼了解加华手作甜品的主要选择。
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-xl">
          <div className="relative aspect-[1/1] md:aspect-[16/10]">
            <Image
              src="/images/desserts/handmade-desserts-all.png"
              alt="加华手作甜品总览照片墙"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
