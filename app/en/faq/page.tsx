import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import SharePanel from "../../components/SharePanel";

export const metadata: Metadata = {
  title: "FAQ | Jiahua Postpartum Meals",
  description:
    "Frequently asked questions about Jiahua Postpartum Meals, including ordering, GTA delivery areas, postpartum nutrition, payment, dietary adjustments, and consultation details.",
};

const faqGroups = [
  {
    title: "Service & Ordering",
    description: "Questions about when to order, how long to order for, and how to choose a suitable program.",
    faqs: [
      {
        question: "How far in advance should I order postpartum meals?",
        answer:
          "We recommend starting your consultation and reservation 1 to 2 months before your due date. This gives enough time to confirm your delivery area, start date, meal program, dietary restrictions, and special needs before delivery begins.",
      },
      {
        question: "Can I order for only two weeks?",
        answer:
          "Yes. The service period can be discussed based on your recovery stage and family arrangements. Every family’s needs are different, so we recommend contacting us first to understand the most suitable duration and service option.",
      },
      {
        question: "What information should I prepare for the first consultation?",
        answer:
          "Please prepare your due date or delivery date, city or neighborhood, whether the delivery is vaginal or C-section, breastfeeding status, dietary restrictions, the meal program you are interested in, and your contact information.",
      },
      {
        question: "What if I am not sure which program to choose?",
        answer:
          "You can submit a consultation request first. We will recommend a suitable postpartum meal program based on your recovery stage, delivery area, and service needs.",
      },
      {
        question: "Can I start service on short notice?",
        answer:
          "If your delivery area and our schedule allow, we will do our best to help arrange service as soon as possible. We recommend contacting us as early as possible so we can confirm the menu and delivery arrangement.",
      },
    ],
  },
  {
    title: "Delivery Areas",
    description: "Questions about GTA delivery coverage, timing, and address changes.",
    faqs: [
      {
        question: "Which areas does Jiahua deliver to?",
        answer:
          "We mainly serve families across the Greater Toronto Area. Common service areas include Markham, Richmond Hill, North York, Scarborough, Vaughan, Aurora, Newmarket, and nearby communities. Please contact us with your specific address so we can confirm availability.",
      },
      {
        question: "Do you deliver to Aurora?",
        answer:
          "For Aurora addresses, please submit your address for confirmation. We will check the delivery route and service schedule before confirming whether delivery is available.",
      },
      {
        question: "Do you deliver to Markham and Richmond Hill?",
        answer:
          "Markham and Richmond Hill are common service areas. The specific delivery arrangement will depend on the address, date, and selected service program.",
      },
      {
        question: "Is the delivery time fixed?",
        answer:
          "Delivery time is arranged based on the daily route. We do our best to keep delivery timing stable so families can plan meals and care routines more easily.",
      },
      {
        question: "Can I change my delivery address during service?",
        answer:
          "If you need to change your delivery address, please contact us as early as possible. Whether the address can be changed depends on whether the new address is within our delivery area and whether the daily route can be adjusted.",
      },
    ],
  },
  {
    title: "Nutrition & Menu",
    description: "Questions about C-section recovery, vaginal delivery, breastfeeding, dietary restrictions, and menu adjustments.",
    faqs: [
      {
        question: "Is the menu the same for C-section and vaginal delivery?",
        answer:
          "Meals after a C-section usually place more focus on gentle, light, and easy-to-digest options. The actual menu can be discussed based on the mother’s recovery status and meal preferences.",
      },
      {
        question: "Are postpartum meals suitable during breastfeeding?",
        answer:
          "Yes. During breastfeeding, regular, balanced, and stable meals are especially important. We pay attention to the balance of grains, protein, vegetables, soups, and snacks.",
      },
      {
        question: "Can meals be adjusted for dietary restrictions or allergies?",
        answer:
          "Yes. Please tell us in advance about dietary restrictions, allergies, or ingredients you prefer to avoid. We will do our best to make suitable adjustments based on the actual situation.",
      },
      {
        question: "Should postpartum meals always be highly nourishing?",
        answer:
          "Not necessarily. Postpartum eating should progress gradually. Especially during the early recovery stage, gentle, light, and easy-to-digest meals are usually more suitable.",
      },
      {
        question: "Can soups replace regular meals?",
        answer:
          "We do not recommend relying only on soups. A more balanced approach is to combine grains, protein, vegetables, soups, and snacks into a complete meal structure.",
      },
      {
        question: "Will the menu be the same every day?",
        answer:
          "We aim to maintain variety while following a clear stage-based structure. The actual menu may vary depending on the service program, seasonal ingredients, and individual needs.",
      },
    ],
  },
  {
    title: "Payment & Orders",
    description: "Questions about payment, order confirmation, cancellation, and adjustments.",
    faqs: [
      {
        question: "How do I confirm my order?",
        answer:
          "After you submit a consultation request, we will discuss the service program, delivery address, start date, and related details with you. Once everything is confirmed, we will proceed with the order confirmation process.",
      },
      {
        question: "How does payment work?",
        answer:
          "After confirming your order, a CAD $100 deposit is required to reserve your spot and arrange meal preparation and delivery. The remaining balance is due on the first delivery day. Payment can be made by EMT or cash. If you choose cash payment, the delivery driver may collect the remaining balance upon delivery.",
      },
      {
        question: "Can I modify my order after confirmation?",
        answer:
          "If you need to modify the start date, address, dietary restrictions, or service duration, please contact us as early as possible. Whether a change can be made depends on scheduling and delivery arrangements.",
      },
      {
        question: "What if my baby arrives earlier than expected?",
        answer:
          "This happens quite often. Please contact us as soon as possible, and we will help adjust the meal start date based on the actual delivery date and available schedule.",
      },
      {
        question: "What if my due date is delayed?",
        answer:
          "Please let us know in advance if your due date is delayed. We will help adjust the service start date based on the actual schedule.",
      },
    ],
  },
  {
    title: "Contact & Consultation",
    description: "Questions about how to contact us, response time, and online consultation forms.",
    faqs: [
      {
        question: "How soon will you contact me after I submit the form?",
        answer:
          "We will contact you as soon as possible by phone, WeChat, or WhatsApp. Our website also provides a WeChat QR code, WhatsApp QR code, phone number, and email for direct consultation.",
      },
      {
        question: "Can I contact you directly on WeChat?",
        answer:
          "Yes. You can contact us through the WeChat QR code or WeChat ID provided on the website.",
      },
      {
        question: "Can I contact you through WhatsApp?",
        answer:
          "Yes. The contact page provides a WhatsApp QR code that you can scan to start a consultation.",
      },
      {
        question: "Can I consult before delivery?",
        answer:
          "Yes, and we recommend consulting in advance. Understanding meal programs and delivery arrangements early can reduce last-minute preparation pressure after delivery.",
      },
      {
        question: "Can a family member help consult or place the order?",
        answer:
          "Yes. Many families have a family member help understand and arrange postpartum meal service in advance. Basic information is enough to begin the consultation process.",
      },
    ],
  },
];

const orderingSteps = [
  {
    title: "Consultation",
    description:
      "Contact us through our website, WeChat, WhatsApp, or phone to discuss your due date, location, and service needs.",
  },
  {
    title: "Choose a Program",
    description:
      "Based on the mother’s recovery stage, dietary preferences, delivery area, and family needs, we will recommend a suitable postpartum meal program.",
  },
  {
    title: "Pay the Deposit",
    description:
      "A CAD $100 deposit is required after order confirmation to reserve your spot and arrange meal preparation and delivery.",
  },
  {
    title: "Confirm Start Date",
    description:
      "After your baby is born, please contact us as soon as possible to confirm your meal start date. We recommend at least 12 hours’ notice to help ensure timely preparation and delivery.",
  },
  {
    title: "Meal Delivery Begins",
    description:
      "Meals are delivered according to the confirmed start date, including three meals, three snacks, nourishing soups, fresh fruit, healthy desserts, and handmade specialties.",
  },
  {
    title: "Pay the Remaining Balance",
    description:
      "The remaining balance is due on the first delivery day. Payment can be made by EMT or cash. If paying by cash, the delivery driver may collect the balance upon delivery.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Questions About Postpartum Meals,
            <br />
            Answered Clearly.
          </>
        }
        description="Find answers about Jiahua postpartum meal ordering, delivery, menus, nutrition, payment, and consultation so your family can prepare with more confidence."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 lg:gap-12 items-start">
            <aside className="lg:sticky lg:top-24 rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-7">
              <div className="text-[#D6B37F] font-medium mb-3">FAQ Categories</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] leading-tight mb-5">
                Quickly Find What You Need
              </h2>
              <div className="grid gap-2">
                {faqGroups.map((group) => (
                  <a
                    key={group.title}
                    href={`#${group.title}`}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#D6B37F]/10"
                  >
                    {group.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="grid gap-7">
              {faqGroups.map((group) => (
                <section
                  key={group.title}
                  id={group.title}
                  className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 scroll-mt-28"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1F4E4C] mb-3">
                      {group.title}
                    </h2>
                    <p className="text-gray-600 leading-7">{group.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {group.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-2xl border border-[#F0E8DD] bg-white p-5 open:shadow-sm"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#1F4E4C]">
                          <span>{faq.question}</span>
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] text-[#B8915D] transition group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <p className="mt-4 text-gray-600 leading-8">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Process */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Ordering Process
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Six-Step Ordering Process
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              From consultation to the first delivery, every step is designed to be clear, simple, and reassuring for mothers and families.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orderingSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
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
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="text-[#D6B37F] font-semibold mb-3">
              SHARE
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              Share With More Families
            </h2>
            <p className="mt-4 text-gray-600">
              If these postpartum meal and recovery answers are helpful, feel free to share them with expecting mothers, new moms, and family members.
            </p>
          </div>
          <SharePanel title="FAQ | Jiahua Postpartum Meals" />
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">Still Have Questions?</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            Tell Us What You Need, and We’ll Help You Find a Suitable Program.
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
