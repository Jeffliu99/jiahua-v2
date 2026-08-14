type ServiceBenefitsProps = {
  title?: string;
  items: string[];
};

export default function ServiceBenefits({
  title = "服务特色",
  items,
}: ServiceBenefitsProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#1F4E4C]">
          {title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#E8DCC9] bg-white p-6 text-center shadow-sm"
            >
              <p className="font-semibold text-[#1F4E4C]">✓ {item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
