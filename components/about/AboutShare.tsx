import SharePanel from "@/components/SharePanel";

export default function AboutShare() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Share
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C]">
          分享给需要的家人朋友
        </h2>
        <p className="mt-4 text-gray-600">
          如果这些内容对您有帮助，欢迎分享给正在备产或产后恢复的妈妈们。
        </p>
        <div className="mt-8">
          <SharePanel title="关于加华月子餐｜Jiahua Postpartum Meals" />
        </div>
      </div>
    </section>
  );
}
