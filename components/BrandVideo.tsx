export default function BrandVideo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">About Jiahua</p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">认识加华月子餐</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            了解我们的月子餐理念、每日现煮流程以及服务大多伦多地区家庭的初心。
          </p>
        </div>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-xl">
          <video className="w-full" controls preload="metadata" poster="/images/home/video-cover.jpg">
            <source src="/videos/jiahua-introduction.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: "♨️", title: "每日现煮", text: "坚持每日制作，当日配送。" },
            { icon: "🥣", title: "四阶段调理", text: "根据恢复阶段科学搭配餐单。" },
            { icon: "🚚", title: "GTA配送", text: "覆盖多伦多及周边多个城市。" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-[#FAF8F5] p-6 text-center">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 font-bold text-[#1F4E4C]">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
