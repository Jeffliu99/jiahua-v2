import { prepItems } from "@/data/contact/contactData";

export default function ConsultationPrep() {
  return (
    <section className="bg-[#FAF8F5] py-16">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Before Consultation
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C]">
                咨询前可以准备
              </h2>
              <p className="mt-4 leading-8 text-gray-600">
                简单准备以下信息，可以帮助我们更快判断适合您的月子餐方案与配送安排。
              </p>
            </div>

            <ul className="space-y-3">
              {prepItems.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-gray-700">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-xs text-white">
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
  );
}
