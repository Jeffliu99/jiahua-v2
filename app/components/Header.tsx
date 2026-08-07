"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const zhNavItems: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务方案" },
  { href: "/meal-plans", label: "菜品展示" },
  { href: "/handmade-desserts", label: "手作甜品" },
  { href: "/nutrition", label: "营养理念" },
  { href: "/blog", label: "博客" },
  { href: "/tools", label: "工具" },
 
];

const enNavItems: NavItem[] = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
    { href: "/en/services", label: "Services" },
  { href: "/en/meal-plans", label: "Meal Plans" },
  { href: "/en/handmade-desserts", label: "Handmade Desserts" },
  { href: "/en/contact", label: "Contact" },
  { href: "/en/blog", label: "Blog" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/en") return pathname === "/en";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getLanguageUrl(pathname: string, isEnglish: boolean) {
  if (isEnglish) {
    const zhPath = pathname.replace(/^\/en/, "");
    return zhPath || "/";
  }

  return `/en${pathname === "/" ? "" : pathname}`;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const isEnglish = pathname.startsWith("/en");
  const navItems = isEnglish ? enNavItems : zhNavItems;

  const homeUrl = isEnglish ? "/en" : "/";
  const contactUrl = isEnglish ? "/en/contact" : "/contact";
  const ctaText = isEnglish ? "Book Consultation" : "预约咨询";
  const mobileMenuText = isEnglish ? "Menu" : "网站导航";
  const languageUrl = getLanguageUrl(pathname, isEnglish);
  const languageLabel = isEnglish ? "中文" : "EN";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E8DCC9]/60 bg-white/95 shadow-[0_6px_20px_rgba(31,78,76,0.05)] backdrop-blur-md">
      <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-5 px-5 py-3 md:px-8 lg:gap-7">
        {/* Brand */}
        <Link
          href={homeUrl}
          aria-label={isEnglish ? "Go to Jiahua Confinement Meal homepage" : "返回加华月子餐首页"}
          className="flex shrink-0 items-center transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
        >
          <Image
            src="/images/logo-full-header.png"
            alt={isEnglish ? "Jiahua Confinement Meal logo" : "加华月子餐 Logo"}
            width={420}
            height={120}
            priority
            className="h-16 w-auto sm:h-20 md:h-24 lg:h-28"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label={isEnglish ? "Main navigation" : "主导航"}
          className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6"
        >
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative block whitespace-nowrap py-2 text-[15px] font-medium text-[#1F4E4C] transition-colors duration-300 ease-out hover:text-[#C9A18A] xl:text-base"
              >
                <span
                  className={`inline-block border-b-2 pb-[2px] transition-all duration-300 ease-out ${
                    active
                      ? "border-[#C9A18A] text-[#C9A18A]"
                      : "border-transparent group-hover:border-[#C9A18A] group-hover:text-[#C9A18A]"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Action Area */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3" ref={wrapperRef}>
          <Link
            href={languageUrl}
            aria-label={isEnglish ? "Switch to Chinese" : "Switch to English"}
            className="hidden rounded-full border border-[#D6B37F] bg-white px-4 py-2 text-sm font-semibold text-[#1F4E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1F4E4C] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white md:inline-flex"
          >
            {languageLabel}
          </Link>

          <Link
            href={contactUrl}
            className="hidden items-center justify-center rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1F4E4C]/15 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-xl hover:shadow-[#1F4E4C]/20 focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white md:inline-flex xl:px-6"
          >
            {ctaText}
          </Link>

          {/* Mobile Menu */}
          <div className="relative lg:hidden">
            <button
              type="button"
              aria-label={isEnglish ? "Open navigation menu" : "打开网站导航"}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls="header-navigation-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full bg-[#1F4E4C] px-5 py-2.5 text-[15px] font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-md focus:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
            >
              {mobileMenuText}
            </button>

            <div
              id="header-navigation-menu"
              role="menu"
              className={`absolute right-0 top-12 z-50 w-64 origin-top-right transform-gpu rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]/98 p-3 shadow-[0_24px_60px_rgba(31,78,76,0.20)] backdrop-blur-sm transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen
                  ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto"
                  : "invisible translate-y-3 scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={`rounded-2xl px-3 py-2.5 text-sm font-medium text-[#1F4E4C] transition-all duration-300 ease-out focus:outline-none ${
                        active
                          ? "bg-[#F7EDEA] text-[#C9A18A] shadow-sm"
                          : "hover:translate-x-1 hover:bg-[#F7EDEA] hover:text-[#C9A18A] focus:bg-[#F7EDEA]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  href={languageUrl}
                  role="menuitem"
                  className="rounded-2xl border border-[#D6B37F] bg-white px-3 py-2.5 text-center text-sm font-semibold text-[#1F4E4C] transition-all duration-300 hover:bg-[#1F4E4C] hover:text-white"
                >
                  {isEnglish ? "中文" : "English"}
                </Link>

                <Link
                  href={contactUrl}
                  role="menuitem"
                  className="mt-2 rounded-2xl bg-[#1F4E4C] px-3 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
                >
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
