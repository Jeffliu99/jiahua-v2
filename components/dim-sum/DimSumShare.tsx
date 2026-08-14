import SharePanel from "@/components/SharePanel";

export default function DimSumShare() {
  return (
    <section className="bg-[#FAF8F5] py-16">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Share
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C]">
          分享给喜欢中式面点的家人朋友
        </h2>
        <p className="mt-4 text-gray-600">
          如果您正在准备早餐、家庭聚餐或团购，可以分享给家人朋友一起挑选。
        </p>
        <div className="mt-8">
          <SharePanel title="加华手工面点｜Handmade Dim Sum Toronto" />
        </div>
      </div>
    </section>
  );
}
