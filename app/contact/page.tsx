import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "预约咨询｜加华月子餐｜GTA产后营养顾问与月子餐服务",
  description:
    "预约加华月子餐营养顾问，了解适合自己的产后营养方案、月子餐服务、配送范围与恢复阶段饮食建议。服务覆盖大多伦多地区华人家庭。",
};

export default function ContactPage() {
  const consultationTopics = [
    {
      number: "01",
      title: "选择适合的月子餐方案",
      text: "根据生产方式、恢复阶段、饮食习惯与家庭需求，了解更适合自己的服务方案。",
    },
    {
      number: "02",
      title: "确认配送范围与时间",
      text: "了解 GTA 不同区域的配送安排、服务周期与每日餐食接收方式。",
    },
    {
      number: "03",
      title: "沟通特殊饮食需求",
      text: "如有忌口、口味偏好、恢复期饮食顾虑或个性化需求，可在咨询时提前说明。",
    },
  ];

  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="max-w-4xl">
          <div className="inline-flex px-4 py-2 rounded-full bg-[#D6B37F]/15 text-[#B8915D] text-sm font-medium mb-6">
            预约咨询
          </div>

          <h1 className="text-5xl font-bold leading-tight text-[#1F4E4C] mb-6">
            预约营养顾问，
            <br />
            了解更适合自己的恢复方案。
          </h1>

          <p className="text-lg leading-8 text-gray-600 max-w-3xl">
            如果您正在为产后恢复、月子餐选择或配送安排做准备，欢迎留下基本信息。
            加华月子餐将根据您的恢复阶段、所在区域与家庭需求，提供更清晰的服务建议。
          </p>
        </div>
      </section>

      {/* Consultation Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              可以咨询什么
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              从方案选择到配送安排，都可以提前沟通
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              产后恢复阶段有许多细节需要提前确认。我们希望让咨询过程更清楚、更安心。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {consultationTopics.map((topic) => (
              <div
                key={topic.number}
                className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] hover:shadow-lg transition"
              >
                <div className="text-[#D6B37F] text-lg font-semibold mb-3">
                  {topic.number}
                </div>

                <h3 className="text-2xl font-bold text-[#1F4E4C] mb-4">
                  {topic.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {topic.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#F0E8DD] shadow-sm">
            <div className="mb-8">
              <div className="text-[#D6B37F] font-medium mb-3">
                预约表单
              </div>

              <h2 className="text-4xl font-bold text-[#1F4E4C] mb-4">
                留下您的咨询信息
              </h2>

              <p className="text-gray-600 leading-8">
                目前此表单为前端展示版。正式上线前，可接入邮箱、表单服务或微信客服流程。
              </p>
            </div>

            <form className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  placeholder="请输入姓名"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  电话
                </label>
                <input
                  type="tel"
                  placeholder="请输入联系电话"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  微信
                </label>
                <input
                  type="text"
                  placeholder="请输入微信号"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  所在城市
                </label>
                <input
                  type="text"
                  placeholder="例如 Markham / North York"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  预产期 / 生产日期
                </label>
                <input
                  type="text"
                  placeholder="例如 2026年8月 / 已生产"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div>
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  感兴趣方案
                </label>
                <select className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]">
                  <option>请选择服务方案</option>
                  <option>30天月子餐方案</option>
                  <option>剖腹产恢复方案</option>
                  <option>哺乳期营养方案</option>
                  <option>高端定制方案</option>
                  <option>暂不确定，需要咨询</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-[#1F4E4C] font-semibold mb-2">
                  留言
                </label>
                <textarea
                  rows={5}
                  placeholder="可以简单说明恢复阶段、饮食偏好、配送区域或其他需求。"
                  className="w-full rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] px-4 py-3 outline-none focus:border-[#D6B37F]"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  className="bg-[#1F4E4C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#173D3B] transition"
                >
                  提交咨询信息
                </button>

                <Link
                  href="/services"
                  className="border border-[#D6B37F] text-[#1F4E4C] px-8 py-4 rounded-full font-bold hover:bg-[#D6B37F]/10 transition text-center"
                >
                  查看服务方案
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[#D6B37F] font-medium mb-3">
              联系方式
            </div>

            <h2 className="text-4xl font-bold text-[#1F4E4C] mb-5">
              选择适合您的方式联系我们
            </h2>

            <p className="text-lg leading-8 text-gray-600">
              您可以通过电话、WhatsApp、微信、邮箱或地址信息与我们取得联系。
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] text-center min-h-[340px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#E7785B] text-white flex items-center justify-center text-2xl mb-8">
                ☎
              </div>

              <h3 className="text-xl font-bold text-[#1F4E4C] mb-3 leading-7">
                直接拨打电话｜Call Hotline:
              </h3>

              <a
                href="tel:+16477273202"
                className="text-[#E7785B] font-semibold text-lg hover:opacity-80 transition"
              >
                +1(647)-727-3202
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#FFF7F5] rounded-3xl p-8 border border-[#F0E8DD] text-center min-h-[340px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#E7785B] text-white flex items-center justify-center text-2xl mb-8">
                ☎
              </div>

              <h3 className="text-xl font-bold text-[#1F4E4C] mb-5 leading-7">
                添加WhatsApp｜Add WhatsApp:
              </h3>

              <div className="w-36 h-36 bg-white rounded-xl p-2 border border-[#F0E8DD] flex items-center justify-center">
                <img
                  src="/images/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="mt-4 text-sm text-gray-500">
                扫码添加 WhatsApp
              </p>
            </div>

            {/* WeChat */}
            <div className="bg-[#F1FAFC] rounded-3xl p-8 border border-[#E6F1F4] text-center min-h-[340px] flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#E7785B] text-white flex items-center justify-center text-2xl mb-8">
                💬
              </div>

              <h3 className="text-xl font-bold text-[#1F4E4C] mb-5 leading-7">
                添加微信｜Add WeChat:
              </h3>

              <div className="flex gap-4 justify-center">
                <div className="w-28 h-32 bg-white rounded-xl p-2 border border-[#F0E8DD] flex items-center justify-center">
                  <img
                    src="/images/wechat-qr-1.png"
                    alt="WeChat QR Code 1"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="w-28 h-32 bg-white rounded-xl p-2 border border-[#F0E8DD] flex items-center justify-center">
                  <img
                    src="/images/wechat-qr-2.png"
                    alt="WeChat QR Code 2"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                扫码添加微信客服
              </p>
            </div>

            {/* Email + Location */}
            <div className="grid gap-6">
              {/* Email */}
              <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#F0E8DD] text-center min-h-[160px] flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#E7785B] text-white flex items-center justify-center text-2xl mb-5">
                  ✉
                </div>

                <h3 className="text-lg font-bold text-[#1F4E4C] mb-2">
                  电子邮件｜Send Email:
                </h3>

                <a
                  href="mailto:jiahuamealca@gmail.com"
                  className="text-[#E7785B] font-semibold hover:opacity-80 transition break-all"
                >
                  jiahuamealca@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="bg-[#FFF7F5] rounded-3xl p-8 border border-[#F0E8DD] text-center min-h-[160px] flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#E7785B] text-white flex items-center justify-center text-2xl mb-5">
                  📍
                </div>

                <h3 className="text-lg font-bold text-[#1F4E4C] mb-2">
                  联系地址｜Location:
                </h3>

                <p className="text-[#E7785B] font-semibold leading-7">
                  625 Cochrane Dr Markham
                  <br />
                  ON L3R 9R9
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-[#F4D7A7] text-lg font-semibold mb-4">
            为妈妈的恢复而用心
          </div>

          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            从第一步咨询开始，
            <br />
            让恢复安排更清楚、更安心。
          </h2>

          <p className="text-lg text-white leading-8 max-w-2xl mx-auto mb-8">
            如果您还不确定适合哪一种方案，可以先预约咨询，我们会根据您的情况提供建议。
          </p>

          <Link
            href="/services"
            className="inline-flex bg-[#F4D7A7] text-[#173D3B] px-8 py-4 rounded-full font-bold hover:opacity-90 transition"
          >
            查看服务方案
          </Link>
        </div>
      </section>
    </main>
  );
}
