import { aboutMilestones } from "@/data/about/aboutMilestones";

export default function HowWeWork() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              从咨询、餐食到配送，尽量让每一步都清楚。
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              我们会根据妈妈的阶段、所在区域和家庭需求，协助了解更适合的服务方案。每一份餐食都以恢复支持、口味舒适和家庭可执行性为重点。
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm">
            <ul className="space-y-5">
              {aboutMilestones.map((item) => (
                <li key={item} className="flex gap-4 leading-8 text-gray-700">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1F4E4C] text-sm text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
