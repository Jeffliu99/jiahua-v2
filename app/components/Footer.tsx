import Link from "next/link";

export default function Footer() {
  const serviceLinks = [
    { href: "/services", label: "30天月子餐" },
    { href: "/services", label: "剖腹产恢复" },
    { href: "/services", label: "哺乳期营养" },
    { href: "/services", label: "高端定制" },
  ];

  const aboutLinks = [
    { href: "/about", label: "品牌故事" },
    { href: "/nutrition", label: "营养理念" },
    { href: "/stories", label: "妈妈故事" },
    { href: "/contact", label: "预约咨询" },
  ];

  const contactLinks = [
    { href: "/contact", label: "预约顾问" },
    { href: "/contact", label: "微信咨询" },
    { href: "/contact", label: "WhatsApp" },
    { href: "/contact", label: "配送范围" },
  ];

  return (
    <footer className="bg-[#173D3B] text-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.9fr] gap-x-7 gap-y-6 items-start">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 hover:text-[#F4D7A7] transition-colors">
                加华月子餐
              </h3>
            </Link>

            <p className="text-white/65 text-sm leading-6 max-w-sm">
              传统调理 × 现代营养
              <br />
              GTA 产后营养支持服务。
            </p>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-[#F4D7A7] mb-2">服务方案</h4>
            <ul className="space-y-1.5 text-white/70 text-sm leading-6">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F4D7A7] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-[#F4D7A7] mb-2">关于加华</h4>
            <ul className="space-y-1.5 text-white/70 text-sm leading-6">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F4D7A7] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-semibold text-[#F4D7A7] mb-2">联系我们</h4>
            <ul className="space-y-1.5 text-white/70 text-sm leading-6 mb-3">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#F4D7A7] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#F4D7A7] px-4 py-2 text-xs font-semibold text-[#173D3B] transition hover:opacity-90"
            >
              前往咨询
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1 text-center md:text-left">
            <p className="text-xs text-white/50 leading-5">© 2026 加华月子餐. All Rights Reserved.</p>
            <p className="text-xs text-white/40 leading-5">GTA 产后营养支持</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
