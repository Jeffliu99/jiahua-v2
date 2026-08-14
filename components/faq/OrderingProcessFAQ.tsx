import { orderingSteps } from "@/data/faq/faqData";

export default function OrderingProcessFAQ() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Ordering Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            六步订餐流程
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            很多常见问题都和流程有关。先了解订餐步骤，可以减少来回沟通时间。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {orderingSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] p-5 text-center shadow-sm"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="font-semibold text-[#1F4E4C]">{step}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-7 text-gray-600">
          确认订餐后通常需支付 CAD $100 订金，开餐当天支付尾款。
        </p>
      </div>
    </section>
  );
}
