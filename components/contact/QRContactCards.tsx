import Image from "next/image";
import { qrCards } from "@/data/contact/contactData";

export default function QRContactCards() {
  return (
    <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold text-[#1F4E4C]">
        扫码咨询
      </h3>
      <p className="mt-3 leading-7 text-gray-600">
        扫描二维码添加微信或 WhatsApp，获取更快捷的沟通方式。
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {qrCards.map((qr) => (
          <div key={qr.label} className="rounded-2xl bg-[#FAF8F5] p-5 text-center">
            <div className="relative mx-auto aspect-square w-full max-w-[180px] overflow-hidden rounded-xl bg-white">
              <Image src={qr.src} alt={qr.alt} fill className="object-contain p-3" sizes="180px" />
            </div>
            <p className="mt-4 font-bold text-[#1F4E4C]">{qr.label}</p>
            <p className="mt-1 text-sm text-gray-600">{qr.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
