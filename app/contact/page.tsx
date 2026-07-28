import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "预约咨询｜加华月子餐",
  description:
    "预约加华月子餐营养顾问，了解适合您的产后月子餐方案、配送范围与营养支持服务。",
};

const directContacts = [
  {
    label: "微信",
    value: "hotmummyclub",
    note: "扫码或添加微信咨询",
  },
  {
    label: "电话",
    value: "(647)-727-3202",
    note: "适合需要快速沟通的家庭",
  },
  {
    label: "邮箱",
    value: "jiahuamealca@gmail.com",
    note: "适合发送详细需求或资料",
  },
];

const qrCards = [
  {
    label: "微信咨询",
    caption: "扫码添加微信",
    src: "/images/wechat-qr.png",
    alt: "微信咨询二维码",
  },
  {
    label: "WhatsApp",
    caption: "扫码进入咨询",
    src: "/images/whatsapp-qr.png",
    alt: "WhatsApp 咨询二维码",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('/images/hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/88 to-[#FAF8F5]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5">
              <span aria-hidden="true">✦</span>
              <span>预约咨询</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">
              告诉您的需要，
              <br />
              半小时内为您匹配合适方案。
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              填写表单后，加华月子餐会根据您的生产阶段、所在区域与服务需求，尽快与您联系。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-start">
            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <ContactForm />
            </div>

            <aside className="grid gap-5">
              <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-7">
                <h2 className="text-2xl font-bold text-[#1F4E4C] mb-4">咨询前可以准备</h2>
                <ul className="space-y-3 text-gray-600 leading-7">
                  <li>• 预产期或生产日期</li>
                  <li>• 所在城市或社区</li>
                  <li>• 是否剖腹产、哺乳或有饮食忌口</li>
                  <li>• 想了解的月子餐方案或配送安排</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#F0E8DD] bg-[#1F4E4C] p-5 md:p-6 text-white">
                <h2 className="text-2xl font-bold mb-3">也可以直接联系</h2>
                <p className="text-white/78 leading-7 mb-4">
                  如果您希望更快沟通，也可以直接通过微信、WhatsApp 扫码、电话或邮箱联系我们。
                </p>

                <div className="grid gap-3 mb-5">
                  {directContacts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-white/8 border border-white/10 px-4 py-3"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                        <div>
                          <div className="text-[#F4D7A7] text-sm font-semibold">{item.label}</div>
                          <div className="text-white text-base font-semibold break-all">{item.value}</div>
                        </div>
                        <div className="text-white/62 text-sm leading-6">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-white/7 border border-white/10 p-3 md:p-4">
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    {qrCards.map((qr) => (
                      <div
                        key={qr.label}
                        className="rounded-2xl bg-white p-3 text-center shadow-sm"
                      >
                        <div className="mx-auto flex aspect-square w-full max-w-[118px] md:max-w-[130px] items-center justify-center overflow-hidden rounded-xl bg-white">
                          <Image
                            src={qr.src}
                            alt={qr.alt}
                            width={150}
                            height={150}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="mt-2 text-sm font-semibold text-[#1F4E4C] leading-5">
                          {qr.label}
                        </div>
                        <div className="mt-0.5 text-xs text-gray-500 leading-5">
                          {qr.caption}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
