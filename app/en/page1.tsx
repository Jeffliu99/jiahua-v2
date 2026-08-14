import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jiahua Confinement Meal | Postpartum Meal Delivery in Toronto & GTA",
  description:
    "Chinese-style postpartum meal delivery for English-speaking families across Toronto and the GTA. Daily meals, nourishing soups, healthy desserts, fresh fruit, and reliable delivery for postpartum recovery.",
  alternates: {
    canonical: "https://jiahuameal.com/en",
    languages: {
      "zh-CA": "https://jiahuameal.com",
      "en-CA": "https://jiahuameal.com/en",
    },
  },
  openGraph: {
    title: "Jiahua Confinement Meal | Postpartum Meal Delivery in Toronto & GTA",
    description:
      "Chinese-style postpartum meal delivery for English-speaking families across Toronto and the GTA.",
    url: "https://jiahuameal.com/en",
    siteName: "Jiahua Confinement Meal",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://jiahuameal.com/images/home/hero-mother-baby.jpg",
        width: 1200,
        height: 630,
        alt: "Jiahua Confinement Meal",
      },
    ],
  },
};

const heroImage = "/images/home/hero-mother-baby.jpg";

const features = [
  "Nearly 10 Years of Experience",
  "Four-Stage Recovery Program",
  "Freshly Prepared Daily",
  "Reliable GTA Delivery",
  "Nourishing Soups & Desserts",
  "English-Friendly Service",
];

const stages = [
  {
    label: "Stage 1",
    title: "Recovery",
    description: "Gentle and easy-to-digest meals focused on early recovery.",
  },
  {
    label: "Stage 2",
    title: "Rebuilding",
    description: "Additional protein and nutrient-rich ingredients for rebuilding strength.",
  },
  {
    label: "Stage 3",
    title: "Nourishment",
    description: "More variety, balanced recipes, and nourishing meal combinations.",
  },
  {
    label: "Stage 4",
    title: "Maintenance",
    description: "Balanced nutrition and transition toward daily eating habits.",
  },
];

const gallery = [
  "/images/meal-plans/steamed-fish-meal.jpg",
  "/images/meal-plans/shrimp-rice-meal.jpg",
  "/images/meal-plans/salmon-set-meal.jpg",
  "/images/meal-plans/daily-meal-collage.jpg",
  "/images/meal-plans/strawberry-dessert-cups.jpg",
  "/images/meal-plans/premium-cupcake-gift-box.jpg",
];

const serviceAreas = [
  "Toronto",
  "Markham",
  "Richmond Hill",
  "Vaughan",
  "Aurora",
  "Newmarket",
  "North York",
  "Scarborough",
  "Mississauga",
];

export default function EnglishHomePage() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero - matched with the Chinese homepage visual style */}
      <section className="relative overflow-hidden border-b border-[#E8DCC9] bg-[#FAF8F5]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/home-hero-bg.png"
            alt="Postpartum meal support for new mothers"
            fill
            priority
            className="object-cover object-center opacity-80"
            sizes="58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/72 to-[#FAF8F5]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/75 via-transparent to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[740px] max-w-7xl items-center px-6 py-20 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E8DCC9] bg-white/90 px-5 py-3 text-sm font-semibold text-[#B8915D] shadow-sm">
              <span>★</span>
              <span>Trusted Postpartum Nutrition Support Across the GTA</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1F4E4C] md:text-6xl lg:text-7xl">
              Celebrating New Life,
              <br />
              Supporting Every Mother&apos;s Recovery.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#334155] md:text-xl">
              Combining traditional postpartum care principles with modern nutrition, Jiahua Confinement Meal provides thoughtfully prepared meals, nourishing soups, healthy desserts, and reliable delivery for English-speaking families across Toronto and the GTA.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/en/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1F4E4C] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1F4E4C]/15 transition hover:-translate-y-0.5 hover:bg-[#173D3B]"
              >
                Book Consultation →
              </Link>

              <Link
                href="/en/meal-plans"
                className="inline-flex items-center justify-center rounded-full border border-[#D6B37F] bg-white/80 px-8 py-4 text-base font-semibold text-[#1F4E4C] transition hover:-translate-y-0.5 hover:bg-[#D6B37F]/10"
              >
                View Meal Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            Supporting Families Through Every Stage of Recovery
          </h2>
          <p className="mx-auto mt-7 max-w-4xl leading-8 text-gray-600">
            For nearly a decade, Jiahua Confinement Meal has helped families across the Greater Toronto Area with thoughtfully prepared Chinese-style postpartum meals. Our programs combine recovery-focused nutrition with the convenience of modern meal delivery.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Why Jiahua
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Why Families Choose Jiahua
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-[#E8DCC9] bg-white p-8 text-center shadow-sm"
              >
                <h3 className="font-semibold text-[#1F4E4C]">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Production */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Fresh Daily
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Prepared Fresh Every Day
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Meals are prepared daily according to scheduled deliveries, helping ensure freshness, consistency, and quality. Each order may include balanced meals, nourishing soups, healthy desserts, fresh fruit, handmade snacks, and baked treats.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
            <Image
              src="/images/meal-plans/daily-production-line.png"
              alt="Fresh daily meal production"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Meal Program
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              A Four-Stage Recovery Meal Program
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {stages.map((stage) => (
              <div key={stage.label} className="rounded-3xl border border-[#E8DCC9] bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase text-[#D6B37F]">{stage.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-[#1F4E4C]">{stage.title}</h3>
                <p className="mt-4 leading-7 text-gray-600">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Real Meals
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              A Look at Our Daily Meals
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-gray-600">
              Every delivery is designed to provide variety, balance, and convenience throughout the recovery journey.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image) => (
              <div key={image} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]">
                <Image
                  src={image}
                  alt="Jiahua postpartum meal example"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            Serving Families Across the GTA
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-[#E8DCC9] bg-white px-5 py-3 text-[#1F4E4C]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {[
              "What is included in a daily meal package?",
              "How does delivery work?",
              "Can meals be customized?",
              "How early should I place my order?",
            ].map((faq) => (
              <div key={faq} className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-6 font-medium text-[#1F4E4C]">
                {faq}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/en/faq" className="inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white hover:bg-[#173D3B]">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">
            Ready to Learn More?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you are preparing for your postpartum journey or already welcoming your baby home, our team is here to help.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/en/meal-plans" className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">
              View Meal Plans
            </Link>
            <Link href="/en/contact" className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
