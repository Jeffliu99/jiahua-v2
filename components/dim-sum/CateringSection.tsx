import Link from "next/link";

const orderTypes = ["家庭聚餐", "企业早餐", "社区团购", "学校活动", "节日分享", "月子餐加购"];

export default function CateringSection() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Group Orders
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
          支持团购与活动订购
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
          手工面点适合家庭聚会、企业早餐、社区团购和节日分享。您可以联系我们确认数量、口味、包装和配送安排。
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {orderTypes.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#E8DCC9] bg-white px-5 py-3 text-sm font-semibold text-[#1F4E4C]"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]"
        >
          获取团购咨询
        </Link>
      </div>
    </section>
  );
}
