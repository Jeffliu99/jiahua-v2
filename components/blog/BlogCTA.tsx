import Link from "next/link";

export default function BlogCTA() {
  return (
    <section className="bg-[#FAF8F5] px-6 pb-16 pt-4 md:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#1F4E4C] p-10 text-white shadow-sm md:p-12">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E7C08A]">
          Book a Consultation
        </div>

        <h2 className="mt-4 text-3xl font-bold md:text-4xl">
          准备开始产后恢复计划？
        </h2>

        <p className="mt-4 max-w-2xl text-white/85">
          欢迎联系我们了解月子餐方案、配送范围与开餐安排，我们会根据您的阶段和家庭需求提供专业建议。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#E7C08A] px-6 py-3 text-sm font-semibold text-[#1F4E4C] transition hover:bg-[#F0D09A]"
          >
            预约咨询
          </Link>

          <Link
            href="/postpartum-meals"
            className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            查看月子套餐
          </Link>
        </div>
      </div>
    </section>
  );
}
