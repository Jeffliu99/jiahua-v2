import Image from "next/image";

export default function DimSumOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Signature Dim Sum Collection
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            手工面点总览
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            从花卷、鲜肉包到烧麦与烧饼，多款面点适合日常早餐、家庭聚会和团体订购。
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-xl">
          <div className="relative aspect-[16/10]">
            <Image
              src="/images/dim-sum/dim-sum-all.png"
              alt="加华手工面点总览"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
