import { aboutValues } from "@/data/about/aboutValues";

export default function BrandStory() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Brand Story
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            让产后恢复这段时间，少一点慌乱，多一点安心。
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            产后恢复不是简单的一日三餐，而是身体、作息和家庭照护共同调整的过程。加华月子餐希望用更清楚的阶段化餐食方案，帮助妈妈和家人减少准备压力。
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            我们相信，好的月子餐应该既有熟悉的味道，也有清晰的营养逻辑；既照顾妈妈，也让家人更容易安排每天的生活。
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {aboutValues.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#1F4E4C]">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
