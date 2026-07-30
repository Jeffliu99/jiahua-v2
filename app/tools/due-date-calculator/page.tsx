"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type CalculationResult = {
  dueDate: Date;
  conceptionDate: Date;
  gestationalDays: number;
  weeks: number;
  days: number;
  trimester: string;
  daysRemaining: number;
  progress: number;
};

function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function getTrimester(weeks: number) {
  if (weeks <= 12) return "第一孕期";
  if (weeks <= 27) return "第二孕期";
  return "第三孕期";
}

function calculateDueDate(lmpValue: string, cycleLength: number): CalculationResult | null {
  if (!lmpValue) return null;

  const lmp = new Date(`${lmpValue}T00:00:00`);
  if (Number.isNaN(lmp.getTime())) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cycleAdjustment = cycleLength - 28;
  const dueDate = addDays(lmp, 280 + cycleAdjustment);
  const conceptionDate = addDays(lmp, 14 + cycleAdjustment);
  const gestationalDays = Math.floor((today.getTime() - lmp.getTime()) / 86400000);
  const weeks = Math.max(0, Math.floor(gestationalDays / 7));
  const days = Math.max(0, gestationalDays % 7);
  const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / 86400000);
  const progress = Math.min(100, Math.max(0, Math.round((gestationalDays / 280) * 100)));

  return {
    dueDate,
    conceptionDate,
    gestationalDays,
    weeks,
    days,
    trimester: getTrimester(weeks),
    daysRemaining,
    progress,
  };
}

export default function DueDateCalculatorPage() {
  const [lmpDate, setLmpDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [hasCalculated, setHasCalculated] = useState(false);

  const result = useMemo(
    () => calculateDueDate(lmpDate, cycleLength),
    [lmpDate, cycleLength]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasCalculated(true);
  }

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('/images/hero.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/88 to-[#FAF8F5]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5">
              <span aria-hidden="true">✦</span>
              <span>妈妈工具</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">
              预产期计算器
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              输入最后一次月经第一天和平均月经周期，快速估算预产期、当前孕周和孕期阶段，帮助家庭提前规划月子餐与产后服务。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-start">
            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">输入信息</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                估算宝宝大概什么时候到来
              </h2>

              <form onSubmit={handleSubmit} className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">
                    最后一次月经第一天 *
                  </span>
                  <input
                    required
                    type="date"
                    value={lmpDate}
                    onChange={(event) => setLmpDate(event.target.value)}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">
                    平均月经周期，天数
                  </span>
                  <input
                    type="number"
                    min={21}
                    max={45}
                    value={cycleLength}
                    onChange={(event) => setCycleLength(Number(event.target.value))}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  />
                  <span className="text-sm leading-6 text-gray-500">
                    如果不确定，可以使用默认 28 天。
                  </span>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  计算预产期
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">计算结果</div>

              {!hasCalculated ? (
                <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">
                  请先输入最后一次月经第一天，然后点击“计算预产期”。结果会显示预计预产期、当前孕周、孕期阶段和距离预产期还有多少天。
                </div>
              ) : result ? (
                <div className="grid gap-5">
                  <div className="rounded-3xl bg-[#1F4E4C] p-6 text-white">
                    <div className="text-[#F4D7A7] font-semibold mb-2">预计预产期</div>
                    <div className="text-3xl md:text-4xl font-bold leading-tight">
                      {formatDate(result.dueDate)}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">当前孕周</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">
                        {result.weeks} 周 {result.days} 天
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">孕期阶段</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">
                        {result.trimester}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">大约受孕日期</div>
                      <div className="text-xl font-bold text-[#1F4E4C]">
                        {formatDate(result.conceptionDate)}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">距离预产期</div>
                      <div className="text-xl font-bold text-[#1F4E4C]">
                        {result.daysRemaining >= 0
                          ? `约 ${result.daysRemaining} 天`
                          : "预产期已过"}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="font-semibold text-[#1F4E4C]">孕期进度参考</div>
                      <div className="text-sm text-gray-500">{result.progress}%</div>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[#D6B37F]"
                        style={{ width: `${result.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 leading-7">
                  日期格式似乎不正确，请重新选择最后一次月经第一天。
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            <div>
              <div className="text-[#D6B37F] font-medium mb-3">计算说明</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                这个预产期是如何估算的？
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                这个工具使用常见的 Naegele 规则，以最后一次月经第一天为起点，加上 280 天，也就是约 40 周。如果月经周期不是 28 天，会根据周期长短做简单调整。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">公式参考</h3>
                  <p className="text-gray-600 leading-7">
                    预产期 ≈ 最后一次月经第一天 + 280 天 + 月经周期调整值。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">重要提醒</h3>
                  <p className="text-gray-600 leading-7">
                    这是一般估算工具，不是医学诊断。若月经周期不规律、日期不确定、已经做过超声检查，建议以医生或助产士给出的预产期为准。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">用于规划月子餐</h3>
                  <p className="text-gray-600 leading-7">
                    您可以根据估算预产期，提前 1-2 个月咨询月子餐方案、配送区域和服务开始时间。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">准备提前规划月子餐？</div>
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
