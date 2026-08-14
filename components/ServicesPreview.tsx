import Link from "next/link";
import { services } from "@/data/home/services";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Services</p>
            <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">服务方案</h2>
            <p className="mt-4 text-gray-600">为不同恢复阶段提供支持。</p>
          </div>
          <Link href="/services" className="rounded-full bg-[#1F4E4C] px-6 py-3 font-semibold text-white">查看全部方案</Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8">
              <h3 className="text-2xl font-bold text-[#1F4E4C]">{service.title}</h3>
              <p className="mt-4 leading-8 text-gray-600">{service.text}</p>
              <Link href={service.href} className="mt-6 inline-flex font-semibold text-[#B8915D]">了解更多 →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
