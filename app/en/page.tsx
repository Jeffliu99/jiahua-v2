import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiahua Confinement Meal | Postpartum Meal Delivery in Toronto & GTA",
  description:
    "Jiahua Confinement Meal provides Chinese-style postpartum meal delivery across Toronto and the GTA for English-speaking families.",
  alternates: { canonical: "https://jiahuameal.com/en" },
};

const features = [
  "Nearly 10 Years of Experience",
  "Four-Stage Recovery Program",
  "Freshly Prepared Daily",
  "Reliable GTA Delivery",
  "Nourishing Soups & Desserts",
  "English-Friendly Service",
];

const stages = [
  ["Stage 1", "Recovery", "Gentle and easy-to-digest meals focused on early recovery."],
  ["Stage 2", "Rebuilding", "Additional protein and nutrient-rich ingredients."],
  ["Stage 3", "Nourishment", "More variety and strengthening recipes."],
  ["Stage 4", "Maintenance", "Balanced nutrition and transition toward daily eating habits."],
];

const gallery = [
  "/images/meal-plans/steamed-fish-meal.jpg",
  "/images/meal-plans/shrimp-rice-meal.jpg",
  "/images/meal-plans/salmon-set-meal.jpg",
  "/images/meal-plans/daily-meal-collage.jpg",
  "/images/meal-plans/strawberry-dessert-cups.jpg",
  "/images/meal-plans/premium-cupcake-gift-box.jpg",
];

const areas = ["Toronto", "Markham", "Richmond Hill", "Vaughan", "Aurora", "Newmarket", "North York", "Scarborough", "Mississauga"];

export default function EnglishHomePage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="relative isolate overflow-hidden bg-[#153D3B]">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/meal-plans/hero.jpg" alt="Jiahua Confinement Meal daily production" fill priority className="object-cover opacity-55" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#153D3B]/95 via-[#153D3B]/75 to-[#153D3B]/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D6B37F]">
            Chinese-Style Postpartum Meal Delivery in Toronto & the GTA
          </p>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Traditional Postpartum Care, Made Easy for Modern Families
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-white/90">
            Carefully prepared Chinese-style postpartum meals, nourishing soups, healthy desserts, fresh fruit, and reliable daily delivery for English-speaking families throughout Toronto and the GTA.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/en/meal-plans" className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F4E4C] hover:bg-[#F7EDEA]">
              View Meal Plans
            </Link>
            <Link href="/en/contact" className="inline-flex justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Supporting Families Through Every Stage of Recovery</h2>
          <p className="mx-auto mt-7 max-w-4xl leading-8 text-gray-600">
            For nearly a decade, Jiahua Confinement Meal has helped families across the Greater Toronto Area with thoughtfully prepared Chinese-style postpartum meals. Our programs combine recovery-focused nutrition with the convenience of modern meal delivery.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Why Families Choose Jiahua</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-[#E8DCC9] bg-white p-8 text-center shadow-sm">
                <h3 className="font-semibold text-[#1F4E4C]">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Prepared Fresh Every Day</h2>
            <p className="mt-6 leading-8 text-gray-600">
              Meals are prepared daily according to scheduled deliveries, helping ensure freshness, consistency, and quality. Each order may include balanced meals, nourishing soups, healthy desserts, fresh fruit, handmade snacks, and baked treats.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9]">
            <Image src="/images/meal-plans/daily-production-line.jpg" alt="Fresh daily meal production" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">A Four-Stage Recovery Meal Program</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {stages.map(([stage, title, desc]) => (
              <div key={stage} className="rounded-3xl border border-[#E8DCC9] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase text-[#D6B37F]">{stage}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#1F4E4C]">{title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">A Look at Our Daily Meals</h2>
            <p className="mx-auto mt-5 max-w-3xl text-gray-600">Every delivery is designed to provide variety, balance, and convenience throughout the recovery journey.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]">
                <Image src={image} alt="Jiahua postpartum meal example" fill className="object-contain" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Serving Families Across the GTA</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {areas.map((area) => (
              <span key={area} className="rounded-full border border-[#E8DCC9] bg-white px-5 py-3 text-[#1F4E4C]">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {["What is included in a daily meal package?", "How does delivery work?", "Can meals be customized?", "How early should I place my order?"].map((faq) => (
              <div key={faq} className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-6 font-medium text-[#1F4E4C]">{faq}</div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/en/faq" className="inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white hover:bg-[#173D3B]">View All FAQs</Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">Ready to Learn More?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Whether you are preparing for your postpartum journey or already welcoming your baby home, our team is here to help.</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/en/meal-plans" className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">View Meal Plans</Link>
            <Link href="/en/contact" className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
