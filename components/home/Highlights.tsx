import { highlights } from "@/data/home/highlights";

export default function Highlights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Why Jiahua</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">为什么选择加华</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            我们关注的不只是餐食本身，更是妈妈恢复过程中的真实体验与家庭照护压力。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#1F4E4C]">{item.title}</h3>
              <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
