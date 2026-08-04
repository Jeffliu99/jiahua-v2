import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jiahua Confinement Meal | Chinese-Style Postpartum Meals in Toronto & GTA",
  description:
    "Learn about Jiahua Confinement Meal and our approach to postpartum nutrition for English-speaking families across Toronto and the GTA.",
  alternates: { canonical: "https://jiahuameal.com/en/about" },
};

const features = [
  ["Nearly 10 Years of Experience", "Serving families across the GTA with professional postpartum meal programs."],
  ["Four-Stage Recovery Program", "Meals designed to support different stages of postpartum recovery."],
  ["Freshly Prepared Daily", "Prepared according to scheduled deliveries to help maintain quality and freshness."],
  ["Reliable GTA Delivery", "Convenient delivery throughout Toronto and surrounding communities."],
  ["Variety and Balance", "A wide selection of meals, soups, desserts, fruits, and snacks."],
  ["English-Friendly Service", "Designed for families who prefer English communication and planning."],
];

export default function EnglishAboutPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A18A]">About Jiahua Confinement Meal</p>
          <h1 className="max-w-5xl text-4xl font-bold text-[#1F4E4C] md:text-6xl">Supporting Families Through Every Stage of Postpartum Recovery</h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">For nearly a decade, Jiahua Confinement Meal has been providing carefully prepared Chinese-style postpartum meals to families across the Greater Toronto Area.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C]">Our Story</h2>
          <div className="mt-6 space-y-5 leading-8 text-gray-600">
            <p>Jiahua Confinement Meal was founded with a simple goal: to help new mothers recover with greater comfort, convenience, and confidence.</p>
            <p>We understand that welcoming a new baby brings both joy and challenges. During this important period, proper nutrition can play a meaningful role in supporting recovery and overall well-being.</p>
            <p>Over the years, we have proudly served families throughout Toronto and the Greater Toronto Area with thoughtfully prepared postpartum meals inspired by traditional Chinese recovery principles and balanced nutritional practices.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Why Families Trust Jiahua</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, desc]) => (
              <div key={title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C]">Our Commitment</h2>
          <p className="mt-6 leading-8 text-gray-600">Every family's recovery journey is unique. Our goal is to provide dependable meal support that allows mothers and families to focus on rest, recovery, and spending time with their newborns.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/en/meal-plans" className="rounded-full bg-[#1F4E4C] px-7 py-3 text-center font-semibold text-white hover:bg-[#173D3B]">View Meal Plans</Link>
            <Link href="/en/contact" className="rounded-full border border-[#D6B37F] px-7 py-3 text-center font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
