const testimonials = [
  {
    title: "恢复期间最省心的决定",
    content:
      "生产后最担心的是每天吃什么。加华月子餐每天准时配送，餐食种类丰富，有主菜、汤品、水果、甜品和点心，让整个坐月子过程轻松很多。",
  },
  {
    title: "菜品丰富，不会吃腻",
    content:
      "原本以为月子餐会比较单调，没想到每天菜单都有变化。鱼类、虾类、肉类、蔬菜、汤品、水果和糕点都搭配得很丰富。",
  },
  {
    title: "家人也很放心",
    content:
      "每天收到的餐食都很整洁，汤品、主菜、甜品和水果都安排得很清楚。家人看到后也觉得省心很多。",
  },
  {
    title: "配送准时，沟通顺畅",
    content:
      "从预订到配送沟通都很顺畅。每天按时收到餐食，包装完整，餐品状态也很好。",
  },
  {
    title: "甜品和点心很有惊喜",
    content:
      "除了正餐和汤，还有养生甜品、手工面点和现烤糕点。坐月子期间每天都有一点小期待。",
  },
  {
    title: "感觉是有经验的团队",
    content:
      "四阶段餐食安排很清楚，不同阶段的菜品搭配也有变化。整体感觉专业、省心，也比较适合长期吃。",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Testimonials
          </div>

          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            客户评价
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            来自加华月子餐客户的反馈，分享真实用餐体验与服务感受。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,78,76,0.08)]"
            >
              <div className="mb-4 text-lg tracking-wide text-[#D6B37F]">
                ⭐⭐⭐⭐⭐
              </div>

              <h3 className="mb-4 text-xl font-bold text-[#1F4E4C]">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {item.content}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
