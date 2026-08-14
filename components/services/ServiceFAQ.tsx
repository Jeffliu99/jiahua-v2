import type { ServiceFAQItem } from "@/types/service";

type ServiceFAQProps = {
  items: ServiceFAQItem[];
};

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#1F4E4C]">
          常见问题
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
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
