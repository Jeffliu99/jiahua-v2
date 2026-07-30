"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type DueDateResult = {
  dueDate: Date;
  gestationalAgeText: string;
  gestationalWeek: number;
  gestationalDay: number;
  daysPregnant: number;
  daysRemaining: number;
  trimester: string;
  conceptionEstimate: Date;
  secondTrimesterStart: Date;
  thirdTrimesterStart: Date;
};

type ShareToolBoxProps = {
  title?: string;
  text?: string;
  url?: string;
  heading?: string;
  description?: string;
  className?: string;
};

function parseLocalDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function diffInDays(start: Date, end: Date) {
  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((endDate.getTime() - startDate.getTime()) / 86400000);
}

function formatChineseDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getTrimester(daysPregnant: number) {
  if (daysPregnant < 0) return "尚未开始计算孕周";
  if (daysPregnant < 14 * 7) return "孕早期";
  if (daysPregnant < 28 * 7) return "孕中期";
  return "孕晚期";
}

function calculateDueDate(lmpDate: Date, today: Date): DueDateResult {
  const dueDate = addDays(lmpDate, 280);
  const daysPregnant = diffInDays(lmpDate, today);
  const gestationalWeek = Math.max(0, Math.floor(daysPregnant / 7));
  const gestationalDay = Math.max(0, daysPregnant % 7);
  const daysRemaining = diffInDays(today, dueDate);
  const gestationalAgeText = `${gestationalWeek} 周 ${gestationalDay} 天`;

  return {
    dueDate,
    gestationalAgeText,
    gestationalWeek,
    gestationalDay,
    daysPregnant,
    daysRemaining,
    trimester: getTrimester(daysPregnant),
    conceptionEstimate: addDays(lmpDate, 14),
    secondTrimesterStart: addDays(lmpDate, 14 * 7),
    thirdTrimesterStart: addDays(lmpDate, 28 * 7),
  };
}

function ShareToolBox({
  title = "预产期计算器｜加华月子餐",
  text = "我发现一个实用的预产期计算器，输入末次月经日期就能估算预产期和孕周。",
  url,
  heading = "觉得这个预产期计算器有用？",
  description = "可以分享给正在备孕或怀孕的朋友。",
  className = "",
}: ShareToolBoxProps) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(url ?? "");
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (!url && typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }

    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, [url]);

  const shareData = useMemo(
    () => ({
      title,
      text,
      url: currentUrl,
    }),
    [title, text, currentUrl]
  );

  async function copyToClipboard(value: string) {
    if (!value) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.top = "-9999px";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  async function handleCopyLink() {
    await copyToClipboard(currentUrl);
  }

  async function handleShare() {
    if (!currentUrl) return;

    try {
      if (canNativeShare && navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(currentUrl);
      }
    } catch {
      // User cancelled native share. No action needed.
    }
  }

  return (
    <section
      className={`rounded-3xl border border-[#F0E8DD] bg-white/85 p-5 shadow-sm md:p-6 ${className}`}
      aria-label="分享工具"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#B8915D]">
            <span aria-hidden="true">↗</span>
            <span>分享工具</span>
          </div>
          <h2 className="text-xl font-bold text-[#1F4E4C] md:text-2xl">{heading}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 md:text-base md:leading-7">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex justify-center rounded-full border border-[#D6B37F]/55 bg-white px-5 py-2.5 text-sm font-semibold text-[#1F4E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
          >
            {copied ? "链接已复制" : "复制链接"}
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex justify-center rounded-full bg-[#1F4E4C] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(31,78,76,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-[0_12px_28px_rgba(31,78,76,0.24)] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
          >
            {canNativeShare ? "分享工具" : "复制并分享"}
          </button>
        </div>
      </div>

      {copied && (
        <div className="mt-4 rounded-2xl border border-[#D6B37F]/35 bg-[#FAF8F5] px-4 py-3 text-sm leading-6 text-[#1F4E4C]">
          链接已复制，可以发送给朋友或分享到微信群、WhatsApp、短信、小红书等平台。
        </div>
      )}
    </section>
  );
}

export default function DueDateCalculatorPage() {
  const [lmp, setLmp] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [submitted, setSubmitted] = useState(false);
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  const result = useMemo(() => {
    if (!submitted || !lmp || !today) return null;
    const lmpDate = parseLocalDate(lmp);
    if (!lmpDate) return null;

    const baseResult = calculateDueDate(lmpDate, today);
    const cycleAdjustment = Number(cycleLength) - 28;

    return {
      ...baseResult,
      dueDate: addDays(baseResult.dueDate, cycleAdjustment),
      conceptionEstimate: addDays(baseResult.conceptionEstimate, cycleAdjustment),
      secondTrimesterStart: addDays(baseResult.secondTrimesterStart, cycleAdjustment),
      thirdTrimesterStart: addDays(baseResult.thirdTrimesterStart, cycleAdjustment),
      daysRemaining: diffInDays(today, addDays(baseResult.dueDate, cycleAdjustment)),
    };
  }, [submitted, lmp, cycleLength, today]);

  const minDate = "2025-01-01";
  const maxDate = today
    ? `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
        today.getDate()
      ).padStart(2, "0")}`
    : undefined;

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('/images/hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5">
              <span aria-hidden="true">📅</span>
              <span>妈妈工具</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">
              预产期计算器
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              输入末次月经第一天，快速估算预产期、当前孕周、孕期阶段和关键时间点。结果仅供家庭参考。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#calculator"
                className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#1F4E4C] px-8 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(31,78,76,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-[0_12px_28px_rgba(31,78,76,0.24)]"
              >
                开始计算
              </Link>
              <Link
                href="/tools"
                className="inline-flex w-full sm:w-auto justify-center rounded-full border border-[#D6B37F]/55 bg-white/70 px-8 py-3.5 font-semibold text-[#1F4E4C] transition hover:bg-white"
              >
                返回工具中心
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">输入信息</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                计算预产期和孕周
              </h2>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (lmp) setSubmitted(true);
                }}
                className="grid gap-5"
              >
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">末次月经第一天</span>
                  <input
                    type="date"
                    value={lmp}
                    min={minDate}
                    max={maxDate}
                    onChange={(event) => {
                      setLmp(event.target.value);
                      setSubmitted(false);
                    }}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">月经周期长度</span>
                  <select
                    value={cycleLength}
                    onChange={(event) => {
                      setCycleLength(event.target.value);
                      setSubmitted(false);
                    }}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  >
                    <option value="26">26 天</option>
                    <option value="27">27 天</option>
                    <option value="28">28 天，常用</option>
                    <option value="29">29 天</option>
                    <option value="30">30 天</option>
                    <option value="31">31 天</option>
                    <option value="32">32 天</option>
                    <option value="33">33 天</option>
                    <option value="34">34 天</option>
                    <option value="35">35 天</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white shadow-[0_8px_20px_rgba(31,78,76,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173D3B] hover:shadow-[0_12px_28px_rgba(31,78,76,0.24)]"
                >
                  计算预产期
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-[#F0E8DD] bg-white/75 p-4 text-sm leading-6 text-gray-600">
                说明：常见预产期算法以末次月经第一天加 280 天为基础，并根据月经周期长度做简化调整。
              </div>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">计算结果</div>

              {!result ? (
                <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">
                  请选择末次月经第一天，并点击“计算预产期”。这里会显示预产期、当前孕周、孕期阶段和关键时间点。
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="rounded-3xl bg-[#1F4E4C] p-6 text-white">
                    <div className="text-sm font-medium text-[#F4D7A7] mb-2">预计预产期</div>
                    <div className="text-3xl md:text-4xl font-bold leading-tight">
                      {formatChineseDate(result.dueDate)}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/80">
                      距离预产期约 {result.daysRemaining >= 0 ? result.daysRemaining : 0} 天。
                      {result.daysRemaining < 0 ? "如果已经超过预产期，请根据医生建议安排检查。" : ""}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                      <div className="text-xs font-semibold text-[#B8915D] mb-2">当前孕周</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">{result.gestationalAgeText}</div>
                    </div>
                    <div className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                      <div className="text-xs font-semibold text-[#B8915D] mb-2">孕期阶段</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">{result.trimester}</div>
                    </div>
                    <div className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5">
                      <div className="text-xs font-semibold text-[#B8915D] mb-2">已怀孕约</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">
                        {Math.max(0, result.daysPregnant)} 天
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5 md:p-6">
                    <h3 className="text-xl font-bold text-[#1F4E4C] mb-4">关键时间点</h3>
                    <div className="grid gap-3 text-sm leading-6 text-gray-600">
                      <div className="flex items-start justify-between gap-4 rounded-2xl bg-white p-4">
                        <span className="font-medium text-[#1F4E4C]">预计受孕时间</span>
                        <span>{formatShortDate(result.conceptionEstimate)}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4 rounded-2xl bg-white p-4">
                        <span className="font-medium text-[#1F4E4C]">孕中期开始</span>
                        <span>{formatShortDate(result.secondTrimesterStart)}</span>
                      </div>
                      <div className="flex items-start justify-between gap-4 rounded-2xl bg-white p-4">
                        <span className="font-medium text-[#1F4E4C]">孕晚期开始</span>
                        <span>{formatShortDate(result.thirdTrimesterStart)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {result && (
            <ShareToolBox
              className="mt-8 md:mt-10"
              title="预产期计算器｜加华月子餐"
              text="我发现一个实用的预产期计算器，输入末次月经日期就能估算预产期和孕周。"
              heading="觉得这个预产期计算器有用？"
              description="可以分享给正在备孕或怀孕的朋友，帮助她们快速估算预产期和当前孕周。"
            />
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">使用说明</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                预产期只是参考日期
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                实际生产日期会受到月经周期、排卵时间、胎儿发育和个人身体情况影响。请以产检和医生建议为准。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">如果月经周期不规律</h3>
                  <p className="text-gray-600 leading-7">
                    计算结果可能与实际孕周存在差异，建议结合早孕超声和医生判断。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">如果已超过预产期</h3>
                  <p className="text-gray-600 leading-7">
                    请根据医生建议进行产检和监测，不建议只依赖线上工具判断。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">如需餐食建议</h3>
                  <p className="text-gray-600 leading-7">
                    可以告诉我们您的预产期、所在区域和饮食偏好，我们会协助匹配合适的月子餐方案。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">准备规划月子餐？</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
            告诉我们您的预产期和所在区域，我们半小时内为您匹配合适方案。
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90"
            >
              预约咨询
            </Link>
            <Link
              href="/tools"
              className="inline-flex w-full sm:w-auto justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              返回工具中心
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
