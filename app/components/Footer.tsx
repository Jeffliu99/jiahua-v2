import Link from "next/link";

export default function Footer() {
  const serviceLinks = [
    { href: "/services", label: "30天月子餐方案" },
    { href: "/services", label: "剖腹产恢复方案" },
    { href: "/services", label: "哺乳期营养方案" },
    { href: "/services", label: "高端定制方案" },
  ];

  const aboutLinks = [
    { href: "/about", label: "品牌故事" },
    { href: "/nutrition", label: "营养理念" },
    { href: "/stories", label: "妈妈故事" },
    { href: "/contact", label: "预约咨询" },
  ];

  const contactLinks = [
    { href: "/contact", label: "预约营养顾问" },
    { href: "/contact", label: "微信客服咨询" },
    { href: "/contact", label: "WhatsApp 咨询" },
    { href: "/contact", label: "确认配送范围" },
  ];

  return (
    <footer className="bg-[#173D3B] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold mb-4 hover:text-[#F4D7A7] transition-colors">
                加华月子餐
              </h3>
            </Link>

            <p className="text-white/80 leading-8 mb-4">
              为新生命而喜悦，
              <br />
              为妈妈的恢复而用心。
            </p>

            <p className="text-white/65 text-sm leading-7 max-w-md">
              加华月子餐融合传统产后调理智慧与现代营养科学，
              为加拿大华人家庭提供专业的产后营养支持服务。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F4D7A7]">
              服务方案
            </h4>

            <ul className="space-y-3 text-white/75 text-sm md:text-base">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex py-1 hover:text-[#F4D7A7] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F4D7A7]">
              关于加华
            </h4>

            <ul className="space-y-3 text-white/75 text-sm md:text-base">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex py-1 hover:text-[#F4D7A7] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F4D7A7]">
              联系我们
            </h4>

            <ul className="space-y-3 text-white/75 text-sm md:text-base">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex py-1 hover:text-[#F4D7A7] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-6 py-3 text-sm font-bold text-[#173D3B] transition hover:opacity-90"
            >
              前往预约咨询
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
            <p className="text-xs md:text-sm text-white/60 leading-6">
              © 2026 加华月子餐 Jiahua Postpartum Nutrition. All Rights Reserved.
            </p>

            <p className="text-xs md:text-sm text-white/55 leading-6">
              专业产后营养支持 ｜ GTA 地区配送服务
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
