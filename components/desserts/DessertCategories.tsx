import Image from "next/image";
import { dessertCategories } from "@/data/desserts/categories";

export default function DessertCategories() {
  return (
    <section id="dessert-categories" className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Dessert Categories
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            手作甜品系列
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            从轻盈蛋糕卷到现烤蛋挞，再到甜品杯与手作曲奇，满足不同聚会与分享场景。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dessertCategories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A18A]">
                  {category.englishTitle}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#1F4E4C]">
                  {category.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
