import Link from "next/link";

export default function ServiceHubCTA() {
  return (
    <section className="bg-[#1F4E4C] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#D6B37F]">
          Book a Consultation
        </p>
        <h2 className="text-4xl font-bold">
          不确定哪种服务适合您？
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80">
          欢迎联系我们说明您的阶段、所在城市和饮食需求，我们会协助介绍更合适的营养餐方案。
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]"
        >
          预约咨询
        </Link>
      </div>
    </section>
  );
}
