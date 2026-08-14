import Link from "next/link";

const orderTypes = ["企业下午茶", "生日聚会", "百天宴甜品", "节日礼盒", "家庭聚餐", "社区团购"];

export default function CorporateOrders() {
  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
          Group Orders
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
          支持团购与活动甜品订购
        </h2>
        <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
          如果您正在准备公司茶歇、家庭聚会、节日分享或社区团购，可以联系我们确认甜品组合、数量和配送安排。
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
