import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "Handmade Desserts | Jiahua",
  description:
    "Freshly made roll cakes, dessert cups, egg tarts, tiramisu, matcha mochi and handcrafted pastries.",
};

const categories = [
  { title: "Roll Cake Series", description: "Classic matcha, chocolate and specialty roll cakes.", image: "/images/desserts/roll-cake-series.png" },
  { title: "Dessert Cup Series", description: "Strawberry, mango and purple yam dessert cups.", image: "/images/desserts/dessert-cup-series.png" },
  { title: "Fresh Egg Tart Series", description: "Flaky pastry shells with rich creamy filling.", image: "/images/desserts/egg-tarts-series.png" },
  { title: "Castella Cake Series", description: "Traditional castella cakes with red bean and chocolate flavors.", image: "/images/desserts/castella-cake-series.png" },
  { title: "Tiramisu Series", description: "Classic tiramisu with rich cream and cocoa flavors.", image: "/images/desserts/tiramisu-series.png" },
  { title: "Seaweed Pork Floss Cake Series", description: "Soft cake layered with savory pork floss and seaweed.", image: "/images/desserts/pork-floss-cake-series.png" },
  { title: "Matcha Mochi Series", description: "Soft mochi with matcha cream and cheese filling.", image: "/images/desserts/matcha-mochi-series.png" },
  { title: "Cookie Series", description: "Chocolate cookies and specialty sandwich cookies.", image: "/images/desserts/cookie-series.png" },
];

export default function HandmadeDessertsPage() {
  return (
    <>
      <PageHero
        eyebrow="Handmade Desserts"
        title="Handmade Desserts"
        description="Freshly Made • Handcrafted • Limited Availability"
        height="lg"
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Jiahua Handmade Desserts</h2>
            <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
              From roll cakes and dessert cups to egg tarts, tiramisu and handcrafted pastries.
            </p>
          </div>

          <div className="relative aspect-[16/12] overflow-hidden rounded-[2rem] border border-[#E8DCC9]">
            <Image src="/images/desserts/handmade-desserts-overview.png" alt="Handmade Desserts" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {categories.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
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
        If you like our handmade desserts, feel free to share this page with family and friends.
      </p>
    </div>
    <SharePanel title="Handmade Desserts | Jiahua" />
  </div>
</section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">Gift Boxes & Group Orders</h2>
            <p className="mt-6 text-gray-600">Available for family gatherings, seasonal gift boxes and special occasions.</p>
            <Link href="/en/contact" className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white">Book Consultation →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
