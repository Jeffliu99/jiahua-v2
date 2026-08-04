import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Jiahua Confinement Meal",
  description: "Frequently asked questions about Jiahua Confinement Meal postpartum meal delivery in Toronto and the GTA.",
  alternates: { canonical: "https://jiahuameal.com/en/faq" },
};

const faqs = [
  ["What is included in a daily meal package?", "A daily package may include meals, nourishing soups, fresh fruit, healthy desserts, handmade snacks, and baked treats depending on the program."],
  ["How does delivery work?", "Meals are prepared according to scheduled deliveries and delivered to families across the GTA service area."],
  ["Can meals be customized?", "Please contact our team to discuss preferences, allergies, and special considerations."],
  ["How early should I place my order?", "We recommend contacting us before your expected due date so that delivery and meal planning can be arranged in advance."],
];

export default function EnglishFAQPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A18A]">FAQ</p>
          <h1 className="text-4xl font-bold text-[#1F4E4C] md:text-6xl">Frequently Asked Questions</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-5xl space-y-5 px-6 md:px-8">
          {faqs.map(([q, a]) => (
            <div key={q} className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7">
              <h2 className="text-xl font-bold text-[#1F4E4C]">{q}</h2>
              <p className="mt-4 leading-8 text-gray-600">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
