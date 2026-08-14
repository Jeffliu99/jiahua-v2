import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <div className="rounded-[2rem] bg-[#1F4E4C] p-12 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#D6B37F]">
            Next Step
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            准备开始了解适合您的月子餐方案？
          </h2>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-white/80">
            如果您还不确定选择哪种方案，可以先查看月子套餐内容，再提交咨询表单。
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/meal-plans" className="rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]">
              查看月子套餐
            </Link>
            <Link href="/faq" className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white">
              查看常见问题
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
