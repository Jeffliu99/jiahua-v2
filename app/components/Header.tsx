"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/services", label: "服务方案" },
    { href: "/nutrition", label: "营养理念" },
    { href: "/stories", label: "妈妈故事" },
    {  href: "/blog",   label: "博客" },
    { href: "/about", label: "关于加华" },
  ];

  const activeColor = "#C9A18A";

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function openMenu() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setMenuOpen(true);
  }

  function closeMenuWithDelay() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }

    closeTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 140);
  }

  function closeMenuNow() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setMenuOpen(false);
  }

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenuNow();
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenuNow();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);

      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
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
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="group relative block transition-colors duration-300 ease-out"
                style={{ color: active ? activeColor : undefined }}
              >
                <span className="transition-colors duration-300 ease-out group-hover:text-[#C9A18A]">
                  {item.label}
                </span>

                <span
                  className={`absolute left-1/2 top-full mt-2 h-[2.5px] w-[30px] -translate-x-1/2 rounded-full bg-[#C9A18A] transition-all duration-300 ease-out ${
                    active
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-70"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="ml-auto hidden min-[700px]:inline-flex shrink-0 whitespace-nowrap rounded-full bg-[#1F4E4C] px-4 py-2 font-song text-[13px] font-medium text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-md min-[1180px]:px-5 min-[1180px]:py-2.5 min-[1180px]:text-[15px]"
        >
          <span className="hidden min-[1180px]:inline">预约营养顾问</span>
          <span className="inline min-[1180px]:hidden">咨询</span>
        </Link>

        {/* Compact navigation menu */}
        <div
          ref={menuRef}
          className="relative ml-auto mr-8 min-[700px]:hidden md:mr-12"
          onMouseEnter={openMenu}
          onMouseLeave={closeMenuWithDelay}
          onFocusCapture={openMenu}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node)) {
              closeMenuWithDelay();
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
            className="rounded-full bg-[#1F4E4C] px-5 py-2 font-song text-[15px] font-medium text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-md focus:bg-[#173D3B] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-[#FAF8F5]"
          >
            网站导航
          </button>

          {/* Invisible hover bridge */}
          <div className="absolute right-0 top-9 h-4 w-56" aria-hidden="true" />

          <div
            id="site-navigation-menu"
            role="menu"
            aria-labelledby="site-navigation-button"
            className={`absolute right-0 top-11 z-50 w-56 origin-top-right rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5]/98 p-3 shadow-[0_24px_60px_rgba(31,78,76,0.20)] backdrop-blur-sm transform-gpu transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              menuOpen
                ? "visible translate-y-0 scale-100 opacity-100 pointer-events-auto"
                : "invisible translate-y-3 scale-95 opacity-0 pointer-events-none"
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
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenuNow}
                    className={`rounded-2xl px-3 py-2.5 transition-all duration-300 ease-out focus:outline-none ${
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
                onClick={closeMenuNow}
                className="mt-3 rounded-full bg-[#1F4E4C] px-4 py-2.5 text-center text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#173D3B] focus:bg-[#173D3B] focus:outline-none"
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
