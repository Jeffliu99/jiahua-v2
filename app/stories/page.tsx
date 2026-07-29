import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "妈妈故事｜加华月子餐",
  description:
    "阅读加华月子餐妈妈故事，了解 GTA 家庭在产后恢复期获得月子餐支持的真实体验。",
};

export default function StoriesPage() {
  const stories = [
    {
      location: "Markham 妈妈",
      image: "/images/home-meal-set.png",
      alt: "完整月子餐套餐",
      text: "每天按时送达的餐食，让家里少了很多备餐压力，也让我能把更多时间留给宝宝和恢复。",
    },
    {
      location: "Richmond Hill 家庭",
      image: "/images/markham-mammy.png",
      alt: "月子餐打包配送场景",
      text: "咨询、餐食和配送安排都很清楚，对于第一次经历产后恢复的家庭来说非常安心。",
    },
    {
      location: "North York 家庭",
      image: "/images/home-soup.png",
      alt: "温润滋补汤品",
      text: "菜单安排比较贴近我们的饮食习惯，家人照顾起来也轻松很多。",
    },
    {
      location: "Vaughan 妈妈",
      image: "/images/vaughan-mammy.png",
      alt: "月子餐打包准备场景",
      text: "最需要休息的时候，有规律的餐食安排真的帮了很多忙。",
    },
  ];

  const themes = [
    {
      title: "准时配送",
      text: "清楚确认配送安排，让家庭每天更容易规划。",
    },
    {
      title: "餐食安心",
      text: "餐食搭配温和、干净、熟悉，适合产后恢复期。",
    },
    {
      title: "沟通清楚",
      text: "从咨询到确认方案，尽量让每一步都简单明白。",
    },
    {
      title: "减少压力",
      text: "减少备餐和安排压力，把更多时间留给妈妈和宝宝。",
    },
  ];

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="妈妈故事"
        title={
          <>
            每一段恢复旅程，
            <br />
            都值得被认真照顾。
          </>
        }
        description="来自 GTA 家庭的真实体验，记录妈妈们在产后恢复期间获得支持与陪伴的故事。"
      />

      {/* Stories */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="text-[#D6B37F] font-medium mb-3">真实体验</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] mb-5">
              被认真照顾的感受，来自每一天的细节。
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              每个家庭的恢复节奏不同，但清楚的餐食安排和及时沟通，都会让这段时间更从容。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {stories.map((story) => (
              <div
                key={story.location}
                className="group overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <div className="text-[#D6B37F] text-lg mb-4">★★★★★</div>
                  <p className="text-gray-600 leading-8 mb-6">{story.text}</p>
                  <div className="font-semibold text-[#1F4E4C]">— {story.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center">
              <div>
                <div className="text-[#D6B37F] font-medium mb-3">大家常提到</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                  好体验，来自稳定可靠的每一步。
                </h2>
                <p className="text-gray-600 leading-8 mb-6">
                  从咨询到配送，我们希望让家庭更容易安排产后恢复期的每一天。
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {themes.map((theme) => (
                    <div
                      key={theme.title}
                      className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5"
                    >
                      <h3 className="font-bold text-[#1F4E4C] mb-2">{theme.title}</h3>
                      <p className="text-sm leading-6 text-gray-600">{theme.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/about-kitchen.png"
                    alt="月子餐厨房食材准备场景"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">
                    真实制作，稳定交付
                  </h3>
                  <p className="text-gray-600 leading-7">
                    我们希望用清楚的流程和稳定的餐食安排，陪伴家庭度过产后恢复期。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">也想获得适合自己的支持？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的需要，我们半小时内为您匹配合适方案。
          </h2>
          <Link
            href="/contact"
            className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
          >
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
