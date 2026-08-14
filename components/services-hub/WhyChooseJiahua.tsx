import Image from "next/image";

const reasons = [
  "四阶段月子餐体系",
  "每日现煮制作",
  "养生煲汤搭配",
  "手工面点与甜品",
  "GTA 多区域配送",
  "适合家庭长期营养支持",
];

export default function WhyChooseJiahua() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
          <Image
            src="/images/services/why-choose-jiahua.jpg"
            alt="加华月子餐每日出餐与配送能力"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Why Jiahua
          </p>
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            为什么选择加华
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            我们不只是提供餐食，也帮助家庭在产后恢复、照护长辈、日常备餐和营养支持上减少压力。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-4 font-semibold text-[#1F4E4C]"
              >
                ✓ {reason}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
