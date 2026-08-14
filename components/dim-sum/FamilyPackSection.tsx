import Image from "next/image";

export default function FamilyPackSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/dim-sum/pork-bun-series.png"
              alt="加华鲜肉包家庭装"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Family Pack
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            家庭装与冷冻常备
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            鲜肉包、馒头、花卷和烧麦都适合家庭装订购。收到后可按需分装保存，日常加热即可享用。
          </p>
          <ul className="mt-6 space-y-3 text-gray-700">
            <li>适合早餐与加餐</li>
            <li>适合家庭常备</li>
            <li>适合产后家庭和长辈共享</li>
            <li>适合社区团购与批量订购</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
