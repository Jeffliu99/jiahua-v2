import FAQAccordion from "./FAQAccordion";
import { faqGroups } from "@/data/faq/faqData";

export default function FAQSections() {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      {faqGroups.map((group) => (
        <div key={group.title} className="mb-10">
          <h2 className="mb-5 text-3xl font-bold">
            {group.title}
          </h2>

          <div className="space-y-3">
            {group.items.map((item) => (
              <FAQAccordion
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}