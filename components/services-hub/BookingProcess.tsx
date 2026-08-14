import { serviceProcess } from "@/data/services-hub/process";

export default function BookingProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Booking Process
          </p>
          <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            服务流程
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            从咨询到开始供餐，我们会根据您的阶段、地址和家庭需求协助确认服务安排。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceProcess.map((item) => (
            <div
              key={item.step}
              className="rounded-[2rem] border border-[#E8DCC9] bg-white p-7 shadow-sm"
            >
              <p className="text-sm font-bold text-[#B8915D]">{item.step}</p>
              <h3 className="mt-3 text-2xl font-bold text-[#1F4E4C]">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
