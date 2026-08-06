import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SharePanel from "@/components/SharePanel";

export const metadata: Metadata = {
  title: "Meal Programs | Jiahua Postpartum Meals",
  description:
    "Explore Jiahua postpartum meal programs, including our 30-day recovery program, C-section recovery support, breastfeeding nutrition support, and premium customized plans.",
};

export default function ServicesPage() {
  const plans = [
    {
      title: "30-Day Postpartum Meal Program",
      tag: "Complete Recovery Support",
      image: "/images/services/service-30-days-new.png",
      alt: "30-day postpartum meal program meal set",
      text: "Designed for mothers who want comprehensive postpartum meal support throughout the most important stages of recovery.",
      points: [
        "Stage-based meal planning",
        "Freshly prepared every day",
        "A practical choice for most families",
      ],
    },
    {
      title: "C-Section Recovery Program",
      tag: "Focused Post-Surgery Support",
      image: "/images/services/service-c-section-new.png",
      alt: "Gentle postpartum meal support for C-section recovery",
      text: "Designed with post-surgery comfort and recovery rhythm in mind, offering gentler meal combinations that are easier to enjoy.",
      points: [
        "Focus on gentle and easy-to-digest meals",
        "Supports post-surgery recovery rhythm",
        "Helps reduce meal preparation pressure at home",
      ],
    },
    {
      title: "Breastfeeding Nutrition Program",
      tag: "Ongoing Nutrition Support",
      image: "/images/services/service-breastfeeding-new.png",
      alt: "Breastfeeding nutrition postpartum meal set",
      text: "Provides ongoing nutrition support during breastfeeding, helping mothers maintain stability while adjusting to a new daily routine.",
      points: [
        "Focus on continued nutrition support",
        "Suitable for breastfeeding families",
        "More flexible meal pairing options",
      ],
    },
    {
      title: "Premium Customized Program",
      tag: "Personalized Planning",
      image: "/images/services/service-premium-new.png",
      alt: "Premium customized postpartum meal program",
      text: "Ideal for clients with special taste preferences, delivery needs, or family arrangements. We help recommend a suitable plan after consultation.",
      points: [
        "Planned around individual needs",
        "Suitable for personalized preferences",
        "Can be coordinated with family routines",
      ],
    },
  ];

  const process = [
    {
      title: "Consultation",
      description:
        "Contact us through our website, WeChat, WhatsApp, or phone to discuss your due date, location, and service needs.",
    },
    {
      title: "Choose a Program",
      description:
        "Based on your recovery stage, dietary preferences, delivery area, and family needs, we will recommend the most suitable postpartum meal program.",
    },
    {
      title: "Pay the Deposit",
      description:
        "A CAD $100 deposit is required to reserve your spot and schedule meal preparation and delivery.",
    },
    {
      title: "Confirm Start Date",
      description:
        "After your baby is born, please contact us as soon as possible to confirm your meal start date. We recommend providing at least 12 hours' notice to ensure timely preparation and delivery.",
    },
    {
      title: "Meal Delivery Begins",
      description:
        "Meals are delivered according to your confirmed start date, including three meals, three snacks, nourishing soups, fresh fruit, desserts, and handmade specialties.",
    },
    {
      title: "Pay the Remaining Balance",
      description:
        "The remaining balance is due on the first delivery day. Payment can be made by EMT or cash. Cash payments may be collected by the delivery driver.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Meal Programs"
        title={
          <>
            Nutrition Support Designed
            <br />
            For Every Stage of Recovery.
          </>
        }
        description="From complete postpartum meal programs to C-section recovery support, breastfeeding nutrition, and customized services, Jiahua offers flexible options for every family."
      />

      {/* Service Plans */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={plan.image}
                    alt={plan.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="p-7 md:p-8">
                  <div className="mb-4 inline-flex rounded-full bg-[#F7EDEA] px-4 py-2 text-sm font-semibold text-[#B8915D]">
                    {plan.tag}
                  </div>

                  <h2 className="text-2xl font-bold text-[#1F4E4C]">
                    {plan.title}
                  </h2>

                  <p className="mt-4 leading-8 text-gray-600">
                    {plan.text}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.points.map((point) => (
                      <li key={point} className="flex gap-3 text-gray-700">
                        <span className="text-[#B8915D]">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex rounded-full bg-[#1F4E4C] px-6 py-3 font-semibold text-white transition hover:bg-[#173D3B]"
                  >
                    Ask About This Program
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Ordering Process
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Six-Step Ordering Process
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              From your first consultation to the start of meal delivery, every step is designed to be clear, simple, and reassuring for mothers and their families.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F4E4C] text-lg font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#1F4E4C]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {step.description}
                </p>
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
              If these postpartum meal programs are helpful, feel free to share them with expecting mothers, new moms, and family members.
            </p>
          </div>

          <SharePanel title="Meal Programs | Jiahua Postpartum Meals" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Not Sure Which Program Is Right For You?
          </div>

          <h2 className="text-4xl font-bold text-[#1F4E4C] md:text-5xl">
            Tell Us About Your Needs, and We’ll Help You Choose.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Share your due date, delivery area, recovery needs, and meal preferences. We will help recommend a suitable postpartum meal program.
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
