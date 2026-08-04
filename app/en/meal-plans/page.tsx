import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meal Plans | Chinese-Style Postpartum Meal Delivery in Toronto & GTA",
  description:
    "Explore Jiahua Confinement Meal's four-stage Chinese-style postpartum meal program for English-speaking families across Toronto and the GTA.",
  alternates: {
    canonical: "https://jiahuameal.com/en/meal-plans",
    languages: {
      "zh-CA": "https://jiahuameal.com/meal-plans",
      "en-CA": "https://jiahuameal.com/en/meal-plans",
    },
  },
};

const stages = [
  ["Stage 1 · Recovery", "Light, gentle, and easy-to-digest meals for early recovery."],
  ["Stage 2 · Rebuilding", "Increased protein and nutrient-rich ingredients."],
  ["Stage 3 · Nourishment", "More variety, strengthening recipes, and balanced meals."],
  ["Stage 4 · Maintenance", "Balanced nutrition and transition toward daily eating habits."],
];

export default function EnglishMealPlansPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A18A]">Meal Plans</p>
          <h1 className="max-w-5xl text-4xl font-bold text-[#1F4E4C] md:text-6xl">
            Four-Stage Chinese-Style Postpartum Meal Program
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            Daily meals, nourishing soups, fresh fruit, healthy desserts, handmade snacks, and baked treats designed to support postpartum recovery.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stages.map(([title, desc]) => (
              <div key={title} className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7">
                <h2 className="text-xl font-bold text-[#1F4E4C]">{title}</h2>
                <p className="mt-4 leading-7 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Want to learn which plan fits your family?</h2>
          <p className="mt-5 leading-8 text-gray-600">Our team can help you understand delivery, menu options, and the best timing to start.</p>
          <Link href="/en/contact" className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
