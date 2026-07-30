"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "服务方案", href: "/services" },
  { label: "营养理念", href: "/nutrition" },
  { label: "妈妈故事", href: "/stories" },
  { label: "博客", href: "/blog" },
  { label: "工具", href: "/tools" },
  { label: "FAQ", href: "/faq" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F0E8DD] bg-[#FAF8F5]/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F4E4C] text-lg font-bold text-[#F4D7A7]">
            加
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-[#1F4E4C]">加华月子餐</div>
            <div className="text-xs font-medium text-[#B8915D]">Jiahua Postpartum Meals</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[#1F4E4C] text-white"
                    : "text-[#1F4E4C] hover:bg-[#D6B37F]/12 hover:text-[#173D3B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#173D3B]"
          >
            预约咨询
          </Link>
        </div>

        <button
          type="button"
          aria-label="打开导航菜单"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DCC9] bg-white text-[#1F4E4C] lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[#F0E8DD] bg-[#FAF8F5] px-6 pb-6 pt-3 lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-[#1F4E4C] text-white"
                      : "bg-white text-[#1F4E4C] hover:bg-[#D6B37F]/12"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-2xl bg-[#1F4E4C] px-4 py-3 text-center text-base font-semibold text-white transition hover:bg-[#173D3B]"
            >
              预约咨询
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
