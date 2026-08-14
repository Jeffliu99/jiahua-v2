import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SharePanel from "../../components/SharePanel";

export const metadata: Metadata = {
  title: "About Jiahua | Jiahua Postpartum Meals",
  description:
    "Learn about Jiahua Postpartum Meals, our brand philosophy, service values, and postpartum nutrition support for families across the Greater Toronto Area.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Centered on Mother's Recovery",
      text: "We focus on the changing needs of postpartum recovery while recognizing the real pressure families face during this important time.",
    },
    {
      title: "Reducing the Burden on Families",
      text: "From menu planning and daily preparation to delivery arrangements, we help families spend more time focusing on mother and baby.",
    },
    {
      title: "Bringing Tradition Into Modern Life",
      text: "We respect traditional postpartum recovery practices while incorporating modern nutrition principles, making postpartum meals clearer, more practical, and more reassuring.",
    },
  ];

  const milestones = [
    "Nutrition priorities designed for early recovery, continued healing, and breastfeeding support.",
    "Meals created to suit the tastes and preferences of Chinese families across the GTA.",
    "Clear consultation and delivery arrangements that help families feel more confident during postpartum recovery.",
  ];

  return (
    <>
      <PageHero
        eyebrow="About Jiahua"
        title={
          <>
            Professional Nutrition,
            <br />
            Supporting Every Mother's Recovery.
          </>
        }
        description="Jiahua Postpartum Meals focuses on postpartum nutrition support for families across the GTA, combining traditional recovery wisdom with modern nutrition principles."
      />

      {/* Brand Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Our Story
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Making Postpartum Recovery Feel Calmer and More Supported.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Postpartum recovery is more than three meals a day. It is a period of physical recovery, changing routines, and family adjustment. Jiahua Postpartum Meals was created to provide clear, stage-based meal support that helps mothers and families reduce preparation pressure.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We believe a good postpartum meal should offer both familiar comfort and clear nutrition logic. It should support the mother while also making daily care easier for the family.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#1F4E4C]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Work Photos */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Preparation & Delivery
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Every Step Matters, From Ingredients to Delivery.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Through clear, organized, and consistent preparation, we aim to deliver each postpartum meal with care and confidence.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                <Image
                  src="/images/about/about-kitchen-preparation.jpg"
                  alt="Jiahua kitchen preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#1F4E4C]">
                  Fresh Ingredients, Carefully Prepared
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  From ingredient handling to meal pairing, we pay attention to the details that help make each day's meals steady, clean, and comforting.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
              <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                <Image
                  src="/images/delivery/about-meal-packing.jpg"
                  alt="Jiahua postpartum meal packing and delivery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-bold text-[#1F4E4C]">
                  Carefully Packed and Delivered
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  Meal packing, delivery timing, and handoff arrangements are kept as clear as possible, helping families feel more at ease during postpartum recovery.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                How We Work
              </div>

              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                From Consultation to Meals and Delivery, We Keep Every Step Clear.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Based on the mother's recovery stage, location, and family needs, we help families understand which service program may be the best fit. Each meal is designed with recovery support, comfortable taste, and practical family routines in mind.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm">
              <ul className="space-y-5">
                {milestones.map((item) => (
                  <li key={item} className="flex gap-3 leading-8 text-gray-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
              If you found this information helpful, feel free to share it with expecting mothers, new moms, and family members preparing for postpartum recovery.
            </p>
          </div>

          <SharePanel title="About Jiahua | Jiahua Postpartum Meals" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Ready to Learn More?
          </div>

          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">
            We'll Help You Choose a Program That Fits Your Needs.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Tell us your due date, delivery area, and service preferences. We'll help match you with a suitable postpartum meal program.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white transition hover:bg-[#173D3B]"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
