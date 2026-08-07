import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "Handmade Dim Sum | Jiahua",
  description:
    "Freshly handmade steamed rolls, specialty steamed buns, meat buns, siu mai and savory pastries.",
};

const categories = [
  {
    title: "Steamed Roll Series",
    description: "Pumpkin rolls, purple yam rolls and red bean rolls made fresh daily.",
    image: "/images/dim-sum/steamed-roll-series.png",
  },
  {
    title: "Specialty Steamed Buns",
    description: "A variety of handcrafted steamed buns prepared fresh every day.",
    image: "/images/dim-sum/specialty-steamed-buns-series.png",
  },
  {
    title: "Meat Bun Series",
    description: "Handmade pork and beef buns with soft fermented dough.",
    image: "/images/dim-sum/pork-bun-series.png",
  },
  {
    title: "Mushroom Pork Siu Mai",
    description: "Traditional Cantonese-style siu mai with pork and mushroom filling.",
    image: "/images/dim-sum/siu-mai-series.png",
  },
  {
    title: "Savory Meat Pastry Series",
    description: "Golden flaky pastries filled with savory meat filling and baked fresh.",
    image: "/images/dim-sum/savory-meat-pastry-series.png",
  },
];

export default function HandmadeDimSumPage() {
  return (
    <>
      <PageHero
        eyebrow="Handmade Dim Sum"
        title="Handmade Dim Sum"
        description="Freshly Made • Naturally Fermented • Steamed Daily"
        height="lg"
      />

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Daily Handmade
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Handmade Dim Sum Collection
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              From steamed rolls and specialty buns to siu mai,
              meat buns and savory pastries, each item is
              handcrafted and prepared fresh daily.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-xl">
            <div className="relative aspect-[16/10]">
            <Image
                src="/images/dim-sum/handmade-dim-sum-overview.png"
                alt="handmade dim-sum overview"
                fill
                className="object-cover"
            />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Our Selection
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Handmade Dim Sum Series
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Why Choose Jiahua
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Crafted Fresh Every Day
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center">
              <div className="text-4xl">🥟</div>

              <h3 className="mt-4 font-bold text-[#1F4E4C]">
                Handmade Daily
              </h3>

              <p className="mt-3 text-gray-600">
                Prepared fresh every day using traditional methods.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center">
              <div className="text-4xl">🌾</div>

              <h3 className="mt-4 font-bold text-[#1F4E4C]">
                Quality Ingredients
              </h3>

              <p className="mt-3 text-gray-600">
                Carefully selected ingredients for authentic flavor.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#FAF8F5] p-8 text-center">
              <div className="text-4xl">❤️</div>

              <h3 className="mt-4 font-bold text-[#1F4E4C]">
                Family Friendly
              </h3>

              <p className="mt-3 text-gray-600">
                Perfect for breakfast, tea time and sharing with family.
              </p>
            </div>
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
        If you like our handmade Dim Sum, feel free to share this page with family and friends.
      </p>
    </div>
    <SharePanel title="Handmade Dim Sum | Jiahua" />
  </div>
</section>
``

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-12 shadow-sm">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Order & Inquiry
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Freshly Prepared for Your Family
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              Contact us to learn more about our handmade dim sum,
              meal plans and special orders.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/en/contact" className="inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white">
                Book Consultation
              </Link>

              <Link href="/en/meal-plans" className="inline-flex rounded-full bg-[#C9A18A] px-8 py-4 font-semibold text-white">
                View Meal Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
