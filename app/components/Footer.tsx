"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const serviceLinks = isEnglish
    ? [
        { href: "/en/services", label: "30-Day Postpartum Meals" },
        { href: "/en/services", label: "C-Section Recovery" },
        { href: "/en/services", label: "Breastfeeding Nutrition" },
        { href: "/en/services", label: "Premium Customized Plans" },
      ]
    : [
        { href: "/services", label: "30天月子餐" },
        { href: "/services", label: "剖腹产恢复" },
        { href: "/services", label: "哺乳期营养" },
        { href: "/services", label: "高端定制" },
      ];

  const aboutLinks = isEnglish
    ? [
        { href: "/en/about", label: "Our Story" },
        { href: "/en/nutrition", label: "Nutrition Philosophy" },
        { href: "/en/stories", label: "Mothers' Stories" },
        { href: "/en/blog", label: "Blog" },
      ]
    : [
        { href: "/about", label: "品牌故事" },
        { href: "/nutrition", label: "营养理念" },
        { href: "/stories", label: "妈妈故事" },
        { href: "/blog", label: "博客" },
      ];

  const contactLinks = isEnglish
    ? [
        { href: "/en/contact", label: "Book a Consultation" },
        { href: "/en/contact", label: "WeChat Consultation" },
        { href: "/en/contact", label: "WhatsApp" },
        { href: "/en/contact", label: "Delivery Areas" },
      ]
    : [
        { href: "/contact", label: "预约顾问" },
        { href: "/contact", label: "微信咨询" },
        { href: "/contact", label: "WhatsApp" },
        { href: "/contact", label: "配送范围" },
      ];

  return (
    <footer className="site-footer-compact bg-[#173D3B] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-8">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {isEnglish ? "Jiahua Postpartum Meals" : "加华月子餐"}
          </h3>

          <p className="mt-3 max-w-sm leading-7 text-white/70">
            {isEnglish
              ? "Traditional postpartum wisdom meets modern nutrition support for families across the Greater Toronto Area."
              : "传统调理 × 现代营养，GTA 产后营养支持服务。"}
          </p>

          <Link
            href={isEnglish ? "/en/contact" : "/contact"}
            className="footer-cta mt-4 inline-flex rounded-full bg-[#F4D7A7] px-5 py-2 text-sm font-semibold text-[#173D3B] transition hover:bg-white"
          >
            {isEnglish ? "Book a Consultation" : "前往咨询"}
          </Link>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-[#F4D7A7]">
            {isEnglish ? "Meal Programs" : "服务方案"}
          </h4>

          <ul className="grid gap-2">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#F4D7A7]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-[#F4D7A7]">
            {isEnglish ? "About Jiahua" : "关于加华"}
          </h4>

          <ul className="grid gap-2">
            {aboutLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#F4D7A7]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-[#F4D7A7]">
            {isEnglish ? "Contact Us" : "联系我们"}
          </h4>

          <ul className="grid gap-2">
            {contactLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition hover:text-[#F4D7A7]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            {isEnglish
              ? "© 2026 Jiahua Postpartum Meals. All Rights Reserved."
              : "© 2026 加华月子餐. All Rights Reserved."}
          </p>

          <p>
            {isEnglish
              ? "Postpartum nutrition support across the GTA"
              : "GTA 产后营养支持"}
          </p>
        </div>
      </div>
    </footer>
  );
}
