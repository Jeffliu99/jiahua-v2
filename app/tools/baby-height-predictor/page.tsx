"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ShareToolBox from "@/app/components/ShareToolBox";

type Gender = "girl" | "boy";
type Result = { estimated: number; low: number; high: number; note: string };

function calculateHeight(father: number, mother: number, gender: Gender): Result {
  const estimated = gender === "boy" ? (father + mother + 13) / 2 : (father + mother - 13) / 2;
  const rounded = Math.round(estimated * 10) / 10;
  return {
    estimated: rounded,
    low: Math.round((rounded - 8) * 10) / 10,
    high: Math.round((rounded + 8) * 10) / 10,
    note: "身高受遗传、营养、睡眠、运动和健康状况等多种因素影响，结果仅供家庭参考。",
  };
}

export default function BabyHeightPredictorPage() {
  const [fatherHeight, setFatherHeight] = useState("175");
  const [motherHeight, setMotherHeight] = useState("162");
  const [gender, setGender] = useState<Gender>("girl");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    if (!submitted) return null;
    const father = Number(fatherHeight);
    const mother = Number(motherHeight);
    if (!father || !mother) return null;
    return calculateHeight(father, mother, gender);
  }, [submitted, fatherHeight, motherHeight, gender]);

  return (
    <main className="bg-[#FAF8F5] font-sans">
      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div className="absolute inset-0 bg-cover bg-center md:bg-right" style={{ backgroundImage: "url('/images/hero.png')" }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/88 to-[#FAF8F5]/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-20"><div className="max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5"><span>📏</span><span>妈妈工具</span></div><h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">宝宝未来身高预测</h1><p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">根据父母身高和宝宝性别，估算宝宝未来成年身高参考范围。结果仅供家庭参考。</p></div></div>
      </section>
      <section className="py-12 md:py-16 bg-white"><div className="max-w-7xl mx-auto px-6 md:px-8"><div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start"><div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 shadow-sm"><div className="text-[#D6B37F] font-medium mb-3">输入信息</div><h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">估算成年身高范围</h2><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-5"><label className="grid gap-2"><span className="text-sm font-medium text-[#1F4E4C]">爸爸身高，cm</span><input type="number" min="120" max="230" value={fatherHeight} onChange={(e) => { setFatherHeight(e.target.value); setSubmitted(false); }} className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20" /></label><label className="grid gap-2"><span className="text-sm font-medium text-[#1F4E4C]">妈妈身高，cm</span><input type="number" min="120" max="220" value={motherHeight} onChange={(e) => { setMotherHeight(e.target.value); setSubmitted(false); }} className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20" /></label><label className="grid gap-2"><span className="text-sm font-medium text-[#1F4E4C]">宝宝性别</span><select value={gender} onChange={(e) => { setGender(e.target.value as Gender); setSubmitted(false); }} className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"><option value="girl">女孩</option><option value="boy">男孩</option></select></label><button type="submit" className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B]">预测身高</button></form><div className="mt-6 rounded-2xl border border-[#F0E8DD] bg-white/75 p-4 text-sm leading-6 text-gray-600">说明：该工具使用常见遗传身高估算公式，不代表医学诊断。</div></div><div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm"><div className="text-[#D6B37F] font-medium mb-3">预测结果</div>{!result ? <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">请输入父母身高并点击“预测身高”。这里会显示宝宝未来成年身高参考范围。</div> : <div className="grid gap-5"><div className="rounded-3xl bg-[#1F4E4C] p-6 text-white"><div className="text-sm font-medium text-[#F4D7A7] mb-2">预计成年身高</div><div className="text-4xl font-bold">{result.estimated} cm</div><p className="mt-4 text-sm leading-6 text-white/80">参考范围约 {result.low} cm - {result.high} cm。</p></div><div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-5"><h3 className="text-xl font-bold text-[#1F4E4C] mb-2">结果说明</h3><p className="text-gray-600 leading-7">{result.note}</p></div></div>}</div></div>{result && <ShareToolBox className="mt-8 md:mt-10" title="宝宝未来身高预测｜加华月子餐" text="这个宝宝未来身高预测工具可以根据父母身高和宝宝性别，估算未来成年身高参考范围，仅供家庭参考。" heading="身边有想了解宝宝身高参考的朋友？" description="把这个身高预测工具发给她，可以根据父母身高快速估算宝宝未来成年身高参考范围。" shareText={`我发现一个宝宝未来身高预测工具，可以根据父母身高和宝宝性别，估算宝宝未来成年身高参考范围。结果仅供家庭参考：\n\n${typeof window !== "undefined" ? window.location.href : ""}`} />}</div></section>
      <section className="py-12 md:py-16 bg-[#FAF8F5]"><div className="max-w-7xl mx-auto px-6 md:px-8"><div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8"><h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">影响宝宝身高的因素</h2><div className="grid md:grid-cols-3 gap-5 text-gray-600 leading-7"><p>遗传因素会影响身高潜力，但不是唯一因素。</p><p>均衡营养、充足睡眠和适当运动都与成长发育有关。</p><p>如果有明显发育疑问，建议咨询儿科医生或专业人士。</p></div></div></div></section>
      <section className="py-12 md:py-14 bg-[#1F4E4C]"><div className="max-w-4xl mx-auto px-6 md:px-8 text-center"><div className="text-[#F4D7A7] font-semibold mb-4">准备迎接新生命？</div><h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">告诉我们您的预产期和所在区域，我们半小时内为您匹配合适方案。</h2><div className="flex flex-col sm:flex-row justify-center gap-4"><Link href="/contact" className="inline-flex w-full sm:w-auto justify-center rounded-full bg-[#F4D7A7] px-8 py-4 font-semibold text-[#173D3B] transition hover:opacity-90">预约咨询</Link><Link href="/tools" className="inline-flex w-full sm:w-auto justify-center rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10">返回工具中心</Link></div></div></section>
    </main>
  );
}
