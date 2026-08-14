import SharePanel from "@/components/SharePanel";

export default function FAQShare() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Share
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C]">
          分享给家人一起了解
        </h2>
        <p className="mt-4 text-gray-600">
          FAQ 页面可以帮助家人快速了解预订、配送、价格、忌口和付款问题，减少重复沟通。
        </p>
        <div className="mt-8">
          <SharePanel title="加华月子餐常见问题" />
        </div>
      </div>
    </section>
  );
}
