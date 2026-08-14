import Image from "next/image";
import Link from "next/link";
import { serviceHubCategories } from "@/data/services-hub/categories";

export default function ServiceCategoryGrid() {
  return (
    <section id="service-categories" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {serviceHubCategories.map((category) => (
          <div key={category.title} className="mb-20 last:mb-0">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                {category.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                {category.title}
              </h2>
              <p className="mt-5 leading-8 text-gray-600">{category.description}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => {
                const content = (
                  <article className="group h-full overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {item.badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#D6B37F] px-4 py-2 text-xs font-semibold text-[#1F4E4C]">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A18A]">
                        {item.englishTitle}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-[#1F4E4C]">
                        {item.title}
                      </h3>
                      <p className="mt-4 leading-8 text-gray-600">{item.description}</p>
                      <p className="mt-6 font-semibold text-[#B8915D]">
                        {item.status === "coming-soon" ? "即将推出" : "查看详情 →"}
                      </p>
                    </div>
                  </article>
                );

                if (!item.href || item.status === "coming-soon") {
                  return <div key={item.title}>{content}</div>;
                }

                return (
                  <Link key={item.title} href={item.href} className="block h-full">
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
