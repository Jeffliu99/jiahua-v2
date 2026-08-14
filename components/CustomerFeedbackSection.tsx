const feedbackItems = [
  {
    title: "坐月子期间最省心的一件事",
    content:
      "产后最担心的是每天吃什么。加华月子餐每天按时配送，餐食有主菜、汤品、水果、甜品和点心，家里人也少了很多准备餐食的压力。",
  },
  {
    title: "每天都有变化，不容易吃腻",
    content:
      "餐食搭配比较丰富，鱼类、虾类、肉类、蔬菜、汤品、水果和糕点都有轮换。连续吃下来不会觉得单调。",
  },
  {
    title: "汤品和甜品很用心",
    content:
      "每天的煲汤和甜品都很有特色，像银耳羹、芝麻糊、杏仁糊、手工点心这些搭配，让月子餐不只是正餐，也更有期待。",
  },
  {
    title: "配送稳定，包装整洁",
    content:
      "每天收到餐食时包装都很整洁，餐盒分类清楚，主菜、汤品、水果和点心都安排得很明白。",
  },
  {
    title: "适合家人一起照顾妈妈",
    content:
      "有月子餐配送后，家人可以把更多时间放在照顾妈妈和宝宝上，不需要每天为做饭和买菜忙乱。",
  },
  {
    title: "感觉是有经验的团队",
    content:
      "四阶段餐食安排比较清楚，不同阶段的菜品搭配也有调整。整体感觉专业、省心，也比较适合长期吃。",
  },
];

export default function CustomerFeedbackSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Customer Feedback
          </div>

          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            客户反馈
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            来自客户在服务期间的用餐体验与反馈，记录真实的月子餐使用感受。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {feedbackItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(31,78,76,0.08)]"
            >
              <div className="mb-4 text-lg tracking-wide text-[#D6B37F]">
                ★★★★★
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
