import Link from "next/link";

type ServiceCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function ServiceCTA({
  title = "想了解适合您的营养餐方案？",
  description = "欢迎联系我们了解套餐内容、配送范围与服务安排。",
  buttonText = "预约咨询",
  buttonHref = "/contact",
}: ServiceCTAProps) {
  return (
    <section className="bg-[#1F4E4C] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-5 text-white/80">{description}</p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex rounded-full bg-[#D6B37F] px-8 py-4 font-semibold text-[#1F4E4C]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
