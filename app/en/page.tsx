import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "Jiahua Postpartum Meals | Professional Postpartum Nutrition Support in the GTA",
  description:
    "Jiahua Postpartum Meals provides professional postpartum meal delivery, stage-based nutrition programs, and reliable delivery services for families across the Greater Toronto Area.",
};

const highlights = [
  {
    title: "Stage-Based Nutrition Planning",
    text: "Meals are adjusted according to different stages of postpartum recovery, helping each meal better support the body's changing needs.",
  },
  {
    title: "Freshly Prepared Daily",
    text: "Selected ingredients are prepared fresh each day with a focus on nutrition, quality, and comforting taste.",
  },
  {
    title: "GTA Delivery Service",
    text: "Serving families across multiple communities in the Greater Toronto Area, helping reduce meal preparation and caregiving pressure at home.",
  },
];

const services = [
  {
    title: "30-Day Postpartum Meal Program",
    text: "Designed for mothers who want comprehensive postpartum nutrition support throughout the key recovery period.",
  },
  {
    title: "C-Section Recovery Program",
    text: "Designed with post-surgery recovery in mind, balancing gentle nourishment, comfort, and digestive ease.",
  },
  {
    title: "Breastfeeding Nutrition Program",
    text: "Provides ongoing nutrition support during breastfeeding, helping mothers recover with more confidence and stability.",
  },
];

const storyCards = [
  {
    location: "Markham Family",
    text: "The meals arrived on time every day, which reduced a lot of preparation pressure at home and allowed more time for recovery and baby care.",
  },
  {
    location: "Richmond Hill Family",
    text: "The consultation, meals, and delivery arrangements were all very clear. For a family going through postpartum recovery for the first time, that clarity felt very reassuring.",
  },
];

const heroFeatures = [
  { icon: "♨", title: "Stage-Based Nutrition", text: "Designed by Recovery Phase" },
  { icon: "⌂", title: "Fresh Daily Meals", text: "Cooked and Delivered Fresh" },
  { icon: "♡", title: "Recovery Support", text: "Thoughtful Guidance" },
  { icon: "▣", title: "GTA Delivery", text: "Reliable and Convenient" },
];

const photoCards = [
  {
    title: "Complete Postpartum Meal Set",
    text: "Balanced combinations of grains, soups, protein, vegetables, and snacks to support daily nutrition needs during different recovery stages.",
    image: "/images/meal-plans/home-meal-set.jpg",
    alt: "Complete Jiahua postpartum meal set",
  },
  {
    title: "Nourishing Soup Support",
    text: "Gentle, comforting, and easy-to-enjoy soups designed to provide steady meal support during postpartum recovery.",
    image: "/images/soups/home-soup.jpg",
    alt: "Jiahua nourishing postpartum soup",
  },
  {
    title: "Packed and Delivered to Your Door",
    text: "Freshly prepared meals are carefully packed and delivered each day, helping families reduce preparation pressure and focus more on care.",
    image: "/images/delivery/about-meal-packing.jpg",
    alt: "Jiahua postpartum meal packing and delivery",
  },
];
const featuredMeal =  {
  image: "/images/home/featured-postpartum-meals.png",
  alt: "Jiahua Signature Postpartum Meals",
};
export default function HomePage() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#E8DCC9] bg-[#FAF8F5]">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <Image
            src="/images/hero/hero-mother-baby-meal.jpg"
            alt="Jiahua postpartum meal service hero image"
            fill
            priority
            className="object-cover object-center opacity-85"
            sizes="58vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/72 to-[#FAF8F5]/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/75 via-transparent to-transparent" />
        </div>

        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center px-6 py-20 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#E8DCC9] bg-white/90 px-5 py-3 text-sm font-semibold text-[#B8915D] shadow-sm">
              <span>★</span>
              <span>Professional Postpartum Nutrition Support in the GTA</span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-[-0.04em] text-[#1F4E4C] md:text-6xl lg:text-7xl">
              Celebrating New Life,
              <br />
              Supporting Every Mother’s Recovery.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#334155] md:text-xl">
              Combining traditional postpartum nutrition wisdom with modern nutritional science, Jiahua provides postpartum meal delivery, recovery-focused nutrition support, and reliable service for families across the Greater Toronto Area.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1F4E4C] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#1F4E4C]/15 transition hover:-translate-y-0.5 hover:bg-[#173D3B]"
              >
                Book a Consultation →
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-[#D6B37F] bg-white/80 px-8 py-4 text-base font-semibold text-[#1F4E4C] transition hover:-translate-y-0.5 hover:bg-[#D6B37F]/10"
              >
                View Meal Programs →
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-[#E8DCC9] bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-2xl text-[#C9A18A]">{feature.icon}</div>
                  <h3 className="mt-2 font-bold text-[#1F4E4C]">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Why Jiahua
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Why Choose Jiahua
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We care about more than meals. We focus on each mother’s recovery experience and helping families reduce the stress of postpartum care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{item.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Featured Meals */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6 md:px-8">
    <div className="mb-10 text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
        Featured Meals
      </span>

      <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
        Signature Postpartum Meals
      </h2>

      <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
        Freshly prepared every day and thoughtfully designed to provide
        balanced, gentle, and nourishing nutrition throughout the postpartum
        recovery journey.
      </p>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] shadow-xl">
      <div className="relative aspect-[4/3] bg-[#FAF8F5]">
        <Image
          src={featuredMeal.image}
          alt={featuredMeal.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>
      {/* Real Photos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Real Meals & Service
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                Real Meals and Service Moments
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                From complete postpartum meal sets and nourishing soups to carefully packed daily deliveries, we strive to make recovery easier and more comfortable for mothers and their families.
              </p>
            </div>
            <Link
              href="/services"
              className="w-fit rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              View Our Programs
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {photoCards.map((card) => (
              <article key={card.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] bg-[#FAF8F5]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">{card.title}</h3>
                  <p className="mt-4 leading-8 text-gray-600">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Services
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                Meal Programs
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-gray-600">
                Nutrition support designed for different stages of postpartum recovery.
              </p>
            </div>
            <Link
              href="/services"
              className="w-fit rounded-full border border-[#D6B37F] px-6 py-3 font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
            >
              View All Programs
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{service.title}</h3>
                <p className="mt-4 leading-8 text-gray-600">{service.text}</p>
                <Link href="/services" className="mt-6 inline-flex font-semibold text-[#B8915D]">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Nutrition Philosophy
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Traditional Wisdom Meets Modern Nutrition
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Every meal is thoughtfully designed to match each stage of postpartum recovery and support mothers throughout their healing journey.
            </p>
            <Link
              href="/nutrition"
              className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white transition hover:bg-[#173D3B]"
            >
              Learn About Our Philosophy
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
            <Image
              src="/images/about/about-kitchen-preparation.jpg"
              alt="Jiahua kitchen preparation and ingredient handling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Stories
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Mothers’ Stories
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Every mother’s recovery journey is unique, but the comfort of being thoughtfully cared for is something many families share.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {storyCards.map((story) => (
              <article key={story.location} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm">
                <div className="mb-4 text-[#D6B37F]">★★★★★</div>
                <p className="leading-8 text-gray-600">{story.text}</p>
                <p className="mt-5 font-semibold text-[#1F4E4C]">— {story.location}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/stories"
              className="inline-flex rounded-full border border-[#D6B37F] px-7 py-3 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Share
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              Share With Family & Friends
            </h2>
            <p className="mt-4 text-gray-600">
              If you found this information helpful, feel free to share it with expecting mothers, new moms, and family members preparing for postpartum recovery.
            </p>
          </div>

          <SharePanel title="Jiahua Postpartum Meals | Professional Postpartum Nutrition Support in the GTA" />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero/hero-soft-minimal-table.jpg"
            alt="Jiahua soft brand background"
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Book Your Consultation Today
          </div>
          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">
            Let Professional Nutrition
            <br />
            Support Your Recovery Journey.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            If you are preparing for postpartum recovery, our nutrition consultants are here to help you choose the meal program that best fits your needs.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]">
              Book a Nutrition Consultation
            </Link>
            <Link href="/services" className="rounded-full border border-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">
              View Meal Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
