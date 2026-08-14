import Image from "next/image";
import { bestSellers } from "@/data/desserts/bestSellers";

export default function BestSellers() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Best Sellers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            热门推荐
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#D6B37F] px-4 py-2 text-xs font-semibold text-[#1F4E4C]">
                  {item.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{item.name}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
