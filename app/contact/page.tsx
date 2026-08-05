import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import PageHero from "../components/PageHero";
import SharePanel from "@/components/SharePanel";

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
const orderingSteps = [
  "预约咨询",
  "确认服务方案",
  "支付 CAD $100 订金",
  "宝宝出生后通知开餐",
  "开始配送月子餐",
  "支付尾款",
];
export default function ContactPage() {
  return (
    <main className="bg-[#FAF8F5] font-sans">
      <PageHero
        eyebrow="预约咨询"
        title={
          <>
            告诉我们您的需要，
            <br />
            我们半小时内为您匹配合适方案。
          </>
        }
        description="填写表单后，加华月子餐会根据您的生产阶段、所在区域与服务需求，尽快与您联系。"
      />
      {/* Compact Ordering Process */}
      <section className="my-10">
        <div className="rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5] p-6">
          <div className="mb-5 text-center">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A18A]">
              Ordering Process
            </div>

            <h2 className="text-xl font-bold text-[#1F4E4C]">
              六步订餐流程
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
            {[
              "预约咨询",
              "确认方案",
              "支付订金",
              "通知开餐",
              "开始配送",
              "支付尾款",
            ].map((step, index) => (
              <div
                key={step}
                className="
                  flex
                  flex-col
                  items-center
                  rounded-2xl
                  bg-white
                  px-3
                  py-4
                  text-center
                  shadow-sm
                "
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1F4E4C] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <span className="text-sm font-medium text-[#1F4E4C]">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            确认订餐后需支付 CAD $100 订金，开餐当天支付尾款。
          </p>
        </div>
      </section>
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
              {/* Share */}
              <section className="my-12">
                <SharePanel
                  title="预约咨询｜加华月子餐"
                />
              </section>
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
