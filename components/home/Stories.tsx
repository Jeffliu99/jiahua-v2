import Link from "next/link";
import { storyCards } from "@/data/home/stories";

export default function Stories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">Stories</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">妈妈故事</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            每一位妈妈的恢复旅程都不相同，而被认真照顾的感受却总是相似。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {storyCards.map((story) => (
            <blockquote key={story.location} className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-sm">
              <div className="text-[#D6B37F]">★★★★★</div>
              <p className="mt-5 leading-8 text-gray-700">{story.text}</p>
              <footer className="mt-5 font-semibold text-[#1F4E4C]">— {story.location}</footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/stories" className="inline-flex rounded-full border border-[#D6B37F] px-7 py-3 font-semibold text-[#1F4E4C]">查看妈妈故事</Link>
        </div>
      </div>
    </section>
  );
}
