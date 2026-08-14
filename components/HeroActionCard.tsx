import Link from "next/link";
import { heroFeatures } from "@/data/home/heroFeatures";

export default function HeroActionCard() {
  return (
    <section className="relative z-10 -mt-12 px-6 md:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-xl">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white shadow-md hover:bg-[#173D3B]">
            预约咨询 →
          </Link>
          <Link href="/services" className="rounded-full border border-[#D6B37F] px-7 py-3 font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10">
            服务方案 →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroFeatures.map((feature) => (
            <div key={feature.title} className="rounded-2xl bg-[#FAF8F5] p-5 text-center">
              <div className="text-2xl">{feature.icon}</div>
              <h3 className="mt-3 font-bold text-[#1F4E4C]">{feature.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
