"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我们" },
  { href: "/services", label: "服务方案" },
  { href: "/nutrition", label: "营养理念" },
  { href: "/stories", label: "妈妈故事" },
  { href: "/blog", label: "博客" },
  { href: "/tools", label: "工具" },
  { href: "/faq", label: "FAQ" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

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
    <header className="sticky top-0 z-50 border-b border-[#E8DCC9] bg-[#FAF8F5]/96 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 md:px-8">
        {/* Brand */}
        <Link
          href="/"
          aria-label="返回加华月子餐首页"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
        >
          <Image
            src="/images/logo.png"
            alt="加华月子餐 Logo"
            width={56}
            height={56}
            priority
            className="h-11 w-auto md:h-12"
          />

          <div className="w-[116px] leading-tight md:w-[136px]">
            <div className="whitespace-nowrap text-xl font-bold tracking-[-0.02em] text-[#1F4E4C] md:text-2xl">
              加华月子餐
            </div>
            <div className="mt-1 w-full whitespace-nowrap text-[9.5px] font-normal leading-none tracking-[0.01em] text-[#B8915D] md:text-[11px]">
              Jiahua Postpartum Meals
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="主导航" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative block whitespace-nowrap py-2 text-[15px] font-medium text-[#1F4E4C] transition-colors duration-300 ease-out hover:text-[#C9A18A] xl:text-base"
              >
                <span className={active ? "text-[#C9A18A]" : "group-hover:text-[#C9A18A]"}>
                  {item.label}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-full mt-1.5 h-[2.5px] w-[28px] -translate-x-1/2 rounded-full bg-[#C9A18A] transition-all duration-300 ease-out ${
                    active
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Action Area */}
        <div className="flex items-center gap-3" ref={wrapperRef}>
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5] md:inline-flex xl:px-6"
          >
            预约咨询
          </Link>

          <div className="relative lg:hidden">
            <button
              type="button"
              aria-label="打开网站导航"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-controls="header-navigation-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-full bg-[#1F4E4C] px-5 py-2 text-[15px] font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-md focus:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
            >
              网站导航
            </button>

            <div
              id="header-navigation-menu"
              role="menu"
              className={`absolute right-0 top-11 z-50 w-60 origin-top-right transform-gpu rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]/98 p-3 shadow-[0_24px_60px_rgba(31,78,76,0.20)] backdrop-blur-sm transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
                  href="/contact"
                  role="menuitem"
                  className="mt-2 rounded-2xl bg-[#1F4E4C] px-3 py-2.5 text-center text-sm font-semibold text-white transition-all duration-300 ease-out hover:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
                >
                  预约咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
