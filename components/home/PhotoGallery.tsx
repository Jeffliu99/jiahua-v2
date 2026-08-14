import Image from "next/image";
import Link from "next/link";
import { photoCards } from "@/data/home/photoCards";

export default function PhotoGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Real Meals & Service</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">真实餐食与服务场景</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            从完整月子餐、温润汤品到打包配送，我们希望让妈妈和家人在产后恢复期更安心、更省心。
          </p>
          <Link href="/services" className="mt-6 inline-flex rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C]">查看服务方案</Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {photoCards.map((card) => (
            <article key={card.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={card.image} alt={card.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{card.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
