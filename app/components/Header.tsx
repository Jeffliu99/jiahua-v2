"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/services", label: "服务方案" },
    { href: "/nutrition", label: "营养理念" },
    { href: "/stories", label: "妈妈故事" },
    { href: "/about", label: "关于加华" },
  ];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F0E8DD] bg-[#FAF8F5]/95 backdrop-blur">
      <div className="mx-auto flex h-[68px] max-w-[1680px] items-center px-6 md:px-8 xl:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/images/logo.png"
            alt="加华月子餐 Logo"
            className="h-9 w-9 shrink-0 object-contain md:h-10 md:w-10"
          />

          <div className="leading-none">
            <div className="font-song whitespace-nowrap text-[20px] font-bold leading-none tracking-wide text-[#1F4E4C] md:text-[22px]">
              加华月子餐
            </div>
            <div className="mt-1 w-fit origin-left scale-x-[0.68] whitespace-nowrap text-[8px] font-semibold uppercase tracking-normal text-[#1F4E4C] md:text-[9px]">
              JIAHUA POSTPARTUM NUTRITION
            </div>
          </div>
        </Link>

        {/* Full navigation */}
        <nav
          aria-label="主要导航"
          className="ml-14 hidden min-[700px]:flex min-w-0 items-center gap-5 whitespace-nowrap font-song text-[13px] font-normal text-[#1F4E4C] md:gap-6 md:text-[14px] lg:gap-7 xl:gap-9 xl:text-[15px]"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative block transition-colors hover:text-[#C79A55]"
              aria-current={index === 0 ? "page" : undefined}
            >
              {item.label}
              {index === 0 && (
                <span className="absolute left-1/2 top-full mt-2 h-[2.5px] w-[30px] -translate-x-1/2 rounded-full bg-[#C79A55]" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/services"
          className="ml-auto hidden min-[700px]:inline-flex shrink-0 whitespace-nowrap rounded-full bg-[#1F4E4C] px-4 py-2 font-song text-[13px] font-medium text-white transition-colors hover:bg-[#173D3B] min-[1180px]:px-5 min-[1180px]:py-2.5 min-[1180px]:text-[15px]"
        >
          <span className="hidden min-[1180px]:inline">预约营养顾问</span>
          <span className="inline min-[1180px]:hidden">咨询</span>
        </Link>

        {/* Compact menu */}
        <div
          ref={menuRef}
          className="relative ml-auto mr-8 min-[700px]:hidden md:mr-12"
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={() => setMenuOpen(false)}
          onFocusCapture={() => setMenuOpen(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              setMenuOpen(false);
            }
          }}
        >
          <button
            type="button"
            id="site-navigation-button"
            aria-label="打开网站导航"
            aria-controls="site-navigation-menu"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="rounded-full bg-[#1F4E4C] px-5 py-2 font-song text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-[#173D3B] focus:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#D6B37F] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
          >
            网站导航
          </button>

          <div
            id="site-navigation-menu"
            role="menu"
            aria-labelledby="site-navigation-button"
            className={`absolute right-0 top-11 z-50 w-56 rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5] p-3 shadow-[0_20px_50px_rgba(31,78,76,0.18)] transition-all duration-200 ease-out ${
              menuOpen
                ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto"
                : "invisible translate-y-2 scale-95 opacity-0 pointer-events-none"
            }`}
          >
            <div className="mb-2 border-b border-[#E8DCC9] px-3 pb-3">
              <p className="font-song text-[15px] font-semibold text-[#1F4E4C]">
                网站导航
              </p>
              <p className="mt-1 font-song text-[11px] text-[#9B8A73]">
                Jiahua Postpartum Nutrition
              </p>
            </div>

            <nav className="flex flex-col gap-1 font-song text-[16px] text-[#1F4E4C]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-3 py-2.5 transition-colors hover:bg-[#F4E8D2] hover:text-[#173D3B] focus:bg-[#F4E8D2] focus:outline-none"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/services"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-[#1F4E4C] px-4 py-2.5 text-center text-white transition-colors hover:bg-[#173D3B] focus:bg-[#173D3B] focus:outline-none"
              >
                预约营养顾问
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
