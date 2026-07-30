"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Sex = "boy" | "girl";

type HeightResult = {
  target: number;
  low: number;
  high: number;
  birthLengthNote: string;
};

function roundOne(value: number) {
  return Math.round(value * 10) / 10;
}

function cmToFeetInches(cm: number) {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches - feet * 12);
  return `${feet}'${inches}"`;
}

function calculateHeight(
  sex: Sex,
  fatherHeight: number,
  motherHeight: number,
  birthLength?: number
): HeightResult | null {
  if (!fatherHeight || !motherHeight) return null;
  if (fatherHeight < 120 || fatherHeight > 230) return null;
  if (motherHeight < 120 || motherHeight > 230) return null;

  const target =
    sex === "boy"
      ? (fatherHeight + motherHeight + 13) / 2
      : (fatherHeight + motherHeight - 13) / 2;

  const low = target - 10;
  const high = target + 10;

  let birthLengthNote = "出生身高已记录。V1 版本主要根据父母身高估算成年身高范围。";

  if (birthLength) {
    if (birthLength < 45) {
      birthLengthNote =
        "出生身高已记录。若宝宝出生身高明显偏小，建议结合儿科医生随访和成长曲线观察。";
    } else if (birthLength > 57) {
      birthLengthNote =
        "出生身高已记录。若宝宝出生身高明显偏大，建议结合儿科医生随访和成长曲线观察。";
    } else {
      birthLengthNote =
        "出生身高已记录。未来可以继续记录宝宝每月身高，与成长曲线一起观察。";
    }
  }

  return {
    target: roundOne(target),
    low: roundOne(low),
    high: roundOne(high),
    birthLengthNote,
  };
}

export default function BabyHeightPredictorPage() {
  const [sex, setSex] = useState<Sex>("boy");
  const [fatherHeight, setFatherHeight] = useState(175);
  const [motherHeight, setMotherHeight] = useState(163);
  const [birthLength, setBirthLength] = useState<number | "">(50);
  const [hasCalculated, setHasCalculated] = useState(false);

  const result = useMemo(
    () =>
      calculateHeight(
        sex,
        fatherHeight,
        motherHeight,
        birthLength === "" ? undefined : Number(birthLength)
      ),
    [sex, fatherHeight, motherHeight, birthLength]
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
              宝宝未来身高预测
            </h1>

            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              输入爸爸身高、妈妈身高、宝宝性别和出生身高，快速获得一个成年身高参考范围。结果仅供家庭娱乐和一般参考，不能替代儿科医生或专业成长评估。
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
                估算宝宝未来成年身高范围
              </h2>

              <form onSubmit={handleSubmit} className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">宝宝性别 *</span>
                  <select
                    value={sex}
                    onChange={(event) => setSex(event.target.value as Sex)}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  >
                    <option value="boy">男孩</option>
                    <option value="girl">女孩</option>
                  </select>
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-[#1F4E4C]">爸爸身高，cm *</span>
                    <input
                      required
                      type="number"
                      min={120}
                      max={230}
                      value={fatherHeight}
                      onChange={(event) => setFatherHeight(Number(event.target.value))}
                      className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-medium text-[#1F4E4C]">妈妈身高，cm *</span>
                    <input
                      required
                      type="number"
                      min={120}
                      max={230}
                      value={motherHeight}
                      onChange={(event) => setMotherHeight(Number(event.target.value))}
                      className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">
                    宝宝出生身高，cm，可选
                  </span>
                  <input
                    type="number"
                    min={35}
                    max={70}
                    value={birthLength}
                    onChange={(event) =>
                      setBirthLength(event.target.value === "" ? "" : Number(event.target.value))
                    }
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  />
                  <span className="text-sm leading-6 text-gray-500">
                    V1 版本主要用父母身高估算，出生身高作为家庭记录和成长观察参考。
                  </span>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  预测身高范围
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">预测结果</div>

              {!hasCalculated ? (
                <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">
                  请先输入父母身高和宝宝性别，然后点击“预测身高范围”。结果会显示一个成年身高参考值和大概范围。
                </div>
              ) : result ? (
                <div className="grid gap-5">
                  <div className="rounded-3xl bg-[#1F4E4C] p-6 text-white">
                    <div className="text-[#F4D7A7] font-semibold mb-2">预计成年身高参考值</div>
                    <div className="text-4xl md:text-5xl font-bold leading-tight">
                      {result.target} cm
                    </div>
                    <div className="mt-2 text-white/75">约 {cmToFeetInches(result.target)}</div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">参考范围下限</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">
                        {result.low} cm
                      </div>
                      <div className="mt-1 text-sm text-gray-500">约 {cmToFeetInches(result.low)}</div>
                    </div>

                    <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                      <div className="text-sm font-semibold text-[#B8915D] mb-2">参考范围上限</div>
                      <div className="text-2xl font-bold text-[#1F4E4C]">
                        {result.high} cm
                      </div>
                      <div className="mt-1 text-sm text-gray-500">约 {cmToFeetInches(result.high)}</div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#FAF8F5] border border-[#F0E8DD] p-5">
                    <h3 className="font-bold text-[#1F4E4C] mb-2">出生身高参考</h3>
                    <p className="text-gray-600 leading-7">{result.birthLengthNote}</p>
                  </div>

                  <div className="rounded-2xl border border-[#F0E8DD] bg-white p-5">
                    <h3 className="font-bold text-[#1F4E4C] mb-2">如何理解这个结果？</h3>
                    <p className="text-gray-600 leading-7">
                      这个范围代表基于父母身高的遗传潜力估算。实际成年身高还会受到营养、睡眠、运动、疾病、青春期时间和整体健康状况影响。
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-red-700 leading-7">
                  输入数据似乎不正确，请确认父母身高是否在合理范围内。
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
                这个预测是如何计算的？
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                这个工具使用常见的 mid-parental height 思路，根据父母身高和宝宝性别估算遗传目标身高。男孩公式为（爸爸身高 + 妈妈身高 + 13）÷ 2，女孩公式为（爸爸身高 + 妈妈身高 - 13）÷ 2。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">参考范围</h3>
                  <p className="text-gray-600 leading-7">
                    本工具使用目标身高上下约 10 cm 作为简单参考范围。这个范围不是保证值，只是帮助家庭形成大致期待。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">重要提醒</h3>
                  <p className="text-gray-600 leading-7">
                    身高预测不能代替医学评估。如果宝宝身高增长明显偏离成长曲线，或家长对发育有担心，请咨询儿科医生或专业医疗人员。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">未来升级方向</h3>
                  <p className="text-gray-600 leading-7">
                    后续登录系统上线后，可以加入宝宝每月身高记录、成长曲线保存和家庭成长档案。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">正在为宝宝和产后恢复做准备？</div>
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
