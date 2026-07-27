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
    { href: "/about#contact", label: "联系我们" },
  ];

  return (
    <footer className="bg-[#173D3B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
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

            <p className="text-white/65 text-sm leading-7">
              加华月子餐融合传统产后调理智慧与现代营养科学，
              为加拿大华人家庭提供专业的产后营养支持服务。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#F4D7A7]">
              服务方案
            </h4>

            <ul className="space-y-3 text-white/75">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F4D7A7] transition-colors"
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

            <ul className="space-y-3 text-white/75">
              {aboutLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#F4D7A7] transition-colors"
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

            <ul className="space-y-3 text-white/75">
              <li>
                <Link href="/about#contact" className="hover:text-[#F4D7A7] transition-colors">
                  预约营养顾问
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-[#F4D7A7] transition-colors">
                  微信客服咨询
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-[#F4D7A7] transition-colors">
                  Greater Toronto Area
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-[#F4D7A7] transition-colors">
                  获取配送范围确认
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2026 加华月子餐 Jiahua Postpartum Nutrition. All Rights Reserved.
            </p>

            <p className="text-sm text-white/55">
              专业产后营养支持 ｜ GTA地区配送服务
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
