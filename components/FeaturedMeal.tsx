import Image from "next/image";

const featuredMeal = {
  image: "/images/home/featured-postpartum-meals.png",
  alt: "加华月子餐明星月子餐展示",
};

export default function FeaturedMeal() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Featured Meals</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">明星月子餐</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            真实每日制作，科学配餐，为妈妈提供均衡且温和的产后营养支持。
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-xl">
          <div className="relative aspect-[16/9] bg-[#FAF8F5]">
            <Image src={featuredMeal.image} alt={featuredMeal.alt} fill className="object-cover" sizes="100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
