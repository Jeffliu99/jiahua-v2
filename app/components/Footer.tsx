"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterLink = {
  href: string;
  label: string;
};

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const brand = isEnglish
    ? {
        name: "Jiahua Postpartum Meals",
        text: "Traditional postpartum wisdom meets modern nutrition support for families across the Greater Toronto Area.",
        cta: "Book a Consultation",
        ctaHref: "/en/contact",
      }
    : {
        name: "加华月子餐",
        text: "传统调理 × 现代营养，为 GTA 华人家庭提供专业产后营养支持。",
        cta: "预约咨询",
        ctaHref: "/contact",
      };

  const productLinks: FooterLink[] = isEnglish
    ? [
        { href: "/en/meal-plans", label: "Meal Plans" },
        { href: "/en/handmade-desserts", label: "Handmade Desserts" },
        { href: "/en/handmade-dim-sum", label: "Handmade Dim Sum" },
        { href: "/en/services", label: "Services" },
      ]
    : [
        { href: "/meal-plans", label: "月子套餐" },
        { href: "/handmade-desserts", label: "手作甜品" },
        { href: "/handmade-dim-sum", label: "手工面点" },
        { href: "/services", label: "服务方案" },
      ];

  const popularLinks: FooterLink[] = isEnglish
    ? [
        { href: "/en/handmade-desserts", label: "Roll Cakes" },
        { href: "/en/handmade-desserts", label: "Egg Tarts" },
        { href: "/en/handmade-desserts", label: "Matcha Mochi" },
        { href: "/en/handmade-dim-sum", label: "Steamed Rolls" },
        { href: "/en/handmade-dim-sum", label: "Pork Buns" },
        { href: "/en/handmade-dim-sum", label: "Siu Mai" },
      ]
    : [
        { href: "/handmade-desserts", label: "蛋糕卷系列" },
        { href: "/handmade-desserts", label: "现烤蛋挞" },
        { href: "/handmade-desserts", label: "抹茶大福" },
        { href: "/handmade-dim-sum", label: "花卷系列" },
        { href: "/handmade-dim-sum", label: "鲜肉包系列" },
        { href: "/handmade-dim-sum", label: "香菇鲜肉烧麦" },
      ];

  const aboutLinks: FooterLink[] = isEnglish
    ? [
        { href: "/en/about", label: "Our Story" },
        { href: "/en/nutrition", label: "Nutrition Philosophy" },
        { href: "/en/faq", label: "FAQ" },
        { href: "/en/stories", label: "Mothers' Stories" },
        { href: "/en/blog", label: "Blog" },
        { href: "/en/tools", label: "Tools" },
      ]
    : [
        { href: "/about", label: "品牌故事" },
        { href: "/nutrition", label: "营养理念" },
        { href: "/faq", label: "常见问题" },
        { href: "/stories", label: "妈妈故事" },
        { href: "/blog", label: "博客" },
        { href: "/tools", label: "工具" },
      ];

  const contactLinks: FooterLink[] = isEnglish
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

  const renderLinks = (links: FooterLink[]) => (
    <ul className="mt-4 space-y-3 text-sm text-white/75">
      {links.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <Link
            href={item.href}
            className="transition hover:text-[#F4D7A7]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="border-t border-[#E8DCC9] bg-[#1F4E4C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white">{brand.name}</h3>

            <p className="mt-4 text-sm leading-7 text-white/75">
              {brand.text}
            </p>

            <Link
              href={brand.ctaHref}
              className="mt-6 inline-flex rounded-full bg-[#F4D7A7] px-5 py-2.5 text-sm font-semibold text-[#173D3B] transition hover:bg-white"
            >
              {brand.cta}
            </Link>
          </div>

          <div>
            <h4 className="font-semibold text-[#F4D7A7]">
              {isEnglish ? "Product Series" : "产品系列"}
            </h4>
            {renderLinks(productLinks)}
          </div>

          <div>
            <h4 className="font-semibold text-[#F4D7A7]">
              {isEnglish ? "Popular Products" : "热门产品"}
            </h4>
            {renderLinks(popularLinks)}
          </div>

          <div>
            <h4 className="font-semibold text-[#F4D7A7]">
              {isEnglish ? "About Jiahua" : "了解加华"}
            </h4>
            {renderLinks(aboutLinks)}
          </div>

          <div>
            <h4 className="font-semibold text-[#F4D7A7]">
              {isEnglish ? "Contact Us" : "联系我们"}
            </h4>
            {renderLinks(contactLinks)}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/55 md:flex md:items-center md:justify-between md:text-left">
          <p>
            {isEnglish
              ? "© 2026 Jiahua Postpartum Meals. All Rights Reserved."
              : "© 2026 加华月子餐 · All Rights Reserved."}
          </p>

          <p className="mt-2 md:mt-0">
            {isEnglish
              ? "Postpartum nutrition support across the GTA"
              : "GTA 专业产后营养支持服务"}
          </p>
        </div>
      </div>
    </footer>
  );
}
