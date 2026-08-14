import SharePanel from "@/components/SharePanel";

export default function ContactShare() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Share
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C]">
          分享给需要的家人朋友
        </h2>
        <p className="mt-4 text-gray-600">
          如果您身边有正在备产或产后恢复的妈妈，欢迎分享加华月子餐咨询页面。
        </p>
        <div className="mt-8">
          <SharePanel title="预约加华月子餐营养顾问" />
        </div>
      </div>
    </section>
  );
}
