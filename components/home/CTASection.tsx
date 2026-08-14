import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <div className="rounded-[2rem] bg-[#1F4E4C] p-12 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D6B37F]">开始预约咨询</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">让专业营养，成为恢复路上的安心陪伴。</h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/80">
            如果您正在为产后恢复做准备，欢迎预约营养顾问，了解更适合自己的服务方案。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]">预约营养顾问</Link>
            <Link href="/services" className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white">查看服务方案</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
