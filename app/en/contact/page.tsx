import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Jiahua Confinement Meal | Toronto & GTA Postpartum Meal Delivery",
  description: "Contact Jiahua Confinement Meal to learn about Chinese-style postpartum meal delivery across Toronto and the GTA.",
  alternates: {
    canonical: "https://jiahuameal.com/en/contact",
    languages: {
      "zh-CA": "https://jiahuameal.com/contact",
      "en-CA": "https://jiahuameal.com/en/contact",
    },
  },
};

export default function EnglishContactPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A18A]">Contact Us</p>
          <h1 className="max-w-4xl text-4xl font-bold text-[#1F4E4C] md:text-6xl">
            Let&apos;s Find the Right Meal Program for Your Family
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            Whether you are planning ahead or already welcoming your baby home, our team is here to help.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:px-8">
          {[
            ["Phone", "Contact us by phone for delivery and meal plan questions."],
            ["Email", "Send us your expected due date, location, and meal preferences."],
            ["Service Area", "Serving Toronto, Markham, Richmond Hill, Vaughan, Aurora, North York, Scarborough, Mississauga, and nearby areas."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7">
              <h2 className="text-xl font-bold text-[#1F4E4C]">{title}</h2>
              <p className="mt-4 leading-7 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
