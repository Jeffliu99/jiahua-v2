import type { ServiceCardItem } from "@/types/service";

type ServiceCardsProps = {
  title: string;
  items: ServiceCardItem[];
};

export default function ServiceCards({ title, items }: ServiceCardsProps) {
  return (
    <section id="service-details" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#1F4E4C]">
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#1F4E4C]">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
