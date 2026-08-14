import { serviceHubFaqs } from "@/data/services-hub/faq";

export default function ServiceHubFAQ() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            服务常见问题
          </h2>
        </div>

        <div className="space-y-5">
          {serviceHubFaqs.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-6"
            >
              <summary className="cursor-pointer font-semibold text-[#1F4E4C]">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
