import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import PageHero from "../../components/PageHero";
import SharePanel from "../../components/SharePanel";

export const metadata: Metadata = {
  title: "Contact Us | Jiahua Postpartum Meals",
  description:
    "Book a consultation with Jiahua Postpartum Meals to learn about suitable postpartum meal programs, delivery areas, and postpartum nutrition support services.",
};

const directContacts = [
  {
    label: "WeChat",
    value: "hotmummyclub",
    note: "Scan the QR code or add us on WeChat",
  },
  {
    label: "Phone",
    value: "(647)-727-3202",
    note: "Best for families who prefer quick communication",
  },
  {
    label: "Email",
    value: "jiahuamealca@gmail.com",
    note: "Useful for sending detailed questions or information",
  },
];

const qrCards = [
  {
    label: "WeChat Consultation",
    caption: "Scan to add us on WeChat",
    src: "/images/wechat-qr.png",
    alt: "WeChat consultation QR code",
  },
  {
    label: "WhatsApp",
    caption: "Scan to start a consultation",
    src: "/images/whatsapp-qr.png",
    alt: "WhatsApp consultation QR code",
  },
];

const orderingSteps = [
  "Consultation",
  "Choose Program",
  "Pay Deposit",
  "Confirm Start Date",
  "Begin Delivery",
  "Pay Balance",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Tell Us What You Need,
            <br />
            We’ll Help You Find a Suitable Program.
          </>
        }
        description="After you submit the form, Jiahua Postpartum Meals will review your recovery stage, delivery area, and service needs, then contact you as soon as possible."
      />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            {/* Compact Ordering Process */}
            <section className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-6 shadow-sm">
              <div className="mb-5 text-center">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A18A]">
                  Ordering Process
                </div>

                <h2 className="text-xl font-bold text-[#1F4E4C]">
                  Six-Step Ordering Process
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {orderingSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex flex-col items-center rounded-2xl bg-white px-3 py-4 text-center shadow-sm"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <span className="text-sm font-medium text-[#1F4E4C]">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                A CAD $100 deposit is required after order confirmation. The remaining balance is due on the first delivery day.
              </p>
            </section>

            <section className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1F4E4C]">
                What to Prepare Before Consultation
              </h2>
              <ul className="mt-5 space-y-3 leading-8 text-gray-600">
                <li>• Due date or delivery date</li>
                <li>• City or neighborhood</li>
                <li>• Whether it is a C-section, breastfeeding stage, or any dietary restrictions</li>
                <li>• Meal program or delivery arrangement you would like to learn about</li>
              </ul>
            </section>

            <section className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-[#1F4E4C]">
                You Can Also Contact Us Directly
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                If you prefer faster communication, you can contact us directly through WeChat, WhatsApp, phone, or email.
              </p>

              <div className="mt-6 grid gap-4">
                {directContacts.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-[#B8915D]">
                      {item.label}
                    </div>
                    <div className="mt-1 text-lg font-bold text-[#1F4E4C]">
                      {item.value}
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <ContactForm />

            <section className="grid gap-6 md:grid-cols-2">
              {qrCards.map((qr) => (
                <article
                  key={qr.label}
                  className="rounded-[2rem] border border-[#E8DCC9] bg-white p-6 text-center shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[#1F4E4C]">
                    {qr.label}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {qr.caption}
                  </p>

                  <div className="relative mx-auto mt-5 aspect-square max-w-[220px] overflow-hidden rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]">
                    <Image
                      src={qr.src}
                      alt={qr.alt}
                      fill
                      className="object-contain p-3"
                      sizes="220px"
                    />
                  </div>
                </article>
              ))}
            </section>
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
              If this consultation page is helpful, feel free to share it with expecting mothers, new moms, and family members preparing for postpartum recovery.
            </p>
          </div>

          <SharePanel title="Contact Us | Jiahua Postpartum Meals" />
        </div>
      </section>
    </>
  );
}
