import SharePanel from "@/components/SharePanel";

export default function BlogShare() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-8 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#F0E8DD] bg-white p-8 shadow-sm md:p-10">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8915D]">
          Share
        </div>

        <h2 className="text-3xl font-bold text-[#1F4E4C]">分享给更多妈妈</h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          如果这些产后恢复与营养知识对您有帮助，欢迎分享给正在备产或产后恢复的家人朋友。
        </p>

        <div className="mt-6">
          <SharePanel title="加华月子餐 Blog" />
        </div>
      </div>
    </section>
  );
}
