import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
};

type BlogCategoriesProps = {
  categories: Category[];
  activeCategory: string;
};

function getButtonClass(active: boolean) {
  return active
    ? "rounded-full bg-[#1F4E4C] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#173D3B]"
    : "rounded-full border border-[#D6B37F] bg-white px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10";
}

export default function BlogCategories({
  categories,
  activeCategory,
}: BlogCategoriesProps) {
  return (
    <section className="bg-[#FAF8F5] px-6 pt-10 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 md:justify-start">
        <Link href="/blog" className={getButtonClass(activeCategory === "all")}>
          全部文章
        </Link>

        {(categories ?? []).map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.slug}`}
            className={getButtonClass(activeCategory === category.slug)}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
