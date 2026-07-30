"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Gender = "girl" | "boy" | "neutral";
type Style = "modern" | "elegant" | "literary" | "bright" | "nature";

type NameItem = {
  name: string;
  meaning: string;
};

const styleLabels: Record<Style, string> = {
  modern: "现代简洁",
  elegant: "温润文雅",
  literary: "诗意书卷",
  bright: "阳光大气",
  nature: "自然清新",
};

const names: Record<Style, Record<Gender, NameItem[]>> = {
  modern: {
    girl: [
      { name: "安宁", meaning: "安与宁都代表平和安稳，寓意生活从容。" },
      { name: "知予", meaning: "知代表智慧，予代表温和给予。" },
      { name: "若晴", meaning: "若有柔和之意，晴象征明亮开朗。" },
      { name: "清禾", meaning: "清代表清澈，禾象征成长与丰足。" },
    ],
    boy: [
      { name: "亦辰", meaning: "亦有从容之意，辰象征时间与星辰。" },
      { name: "景言", meaning: "景有光明远景之意，言代表表达与思考。" },
      { name: "知远", meaning: "知代表见识，远代表格局。" },
      { name: "承安", meaning: "承有担当之意，安代表平和安定。" },
    ],
    neutral: [
      { name: "安然", meaning: "寓意平安从容，适合简洁现代风格。" },
      { name: "知行", meaning: "知与行结合，寓意思考与行动并重。" },
      { name: "明熙", meaning: "明代表清朗，熙代表光和温暖。" },
      { name: "云舒", meaning: "有自然舒展之意，名字温和轻盈。" },
    ],
  },
  elegant: {
    girl: [
      { name: "婉清", meaning: "婉代表柔和，清代表清澈纯净。" },
      { name: "雅宁", meaning: "雅代表高雅，宁代表安宁。" },
      { name: "若兰", meaning: "兰象征清雅，若兰寓意温婉知性。" },
      { name: "书妍", meaning: "书代表书卷气，妍代表美好。" },
    ],
    boy: [
      { name: "怀瑾", meaning: "取怀抱美玉之意，寓意品性温润。" },
      { name: "修远", meaning: "修代表修养，远代表志向长远。" },
      { name: "景和", meaning: "景有光明之意，和代表温良平和。" },
      { name: "闻谦", meaning: "闻代表见识，谦代表谦和。" },
    ],
    neutral: [
      { name: "清和", meaning: "寓意清朗温和，气质文雅。" },
      { name: "知礼", meaning: "知代表智慧，礼代表修养。" },
      { name: "怀安", meaning: "怀有胸怀，安代表平和。" },
      { name: "若宁", meaning: "若有柔和感，宁代表安定。" },
    ],
  },
  literary: {
    girl: [
      { name: "云栖", meaning: "云栖有安静诗意，寓意自由温柔。" },
      { name: "清辞", meaning: "有清雅表达之意，适合书卷风格。" },
      { name: "若诗", meaning: "寓意温柔、有诗意与想象力。" },
      { name: "知夏", meaning: "知代表智慧，夏代表明亮生机。" },
    ],
    boy: [
      { name: "云舟", meaning: "云与舟有远行意象，寓意自在开阔。" },
      { name: "书珩", meaning: "书有书卷气，珩为玉佩，寓意温润有才。" },
      { name: "清越", meaning: "指声音清朗悠远，寓意气质明净。" },
      { name: "知白", meaning: "取清醒明辨之意，名字简洁有哲思。" },
    ],
    neutral: [
      { name: "云初", meaning: "寓意清新开端，带有诗意。" },
      { name: "清言", meaning: "代表清朗表达，文雅克制。" },
      { name: "知微", meaning: "寓意见微知著，名字有哲思。" },
      { name: "望川", meaning: "有远景与山水意象。" },
    ],
  },
  bright: {
    girl: [
      { name: "晴安", meaning: "晴代表明朗，安代表平和。" },
      { name: "熙宁", meaning: "熙为光和，宁为安定。" },
      { name: "明悦", meaning: "寓意明亮开朗，生活愉悦。" },
      { name: "星冉", meaning: "星象征希望，冉有慢慢成长之意。" },
    ],
    boy: [
      { name: "明朗", meaning: "表达开阔、阳光与清晰。" },
      { name: "景曜", meaning: "曜为光亮，寓意光明有力量。" },
      { name: "承熙", meaning: "承有担当，熙代表光明温暖。" },
      { name: "启晨", meaning: "启代表开启，晨代表新的开始。" },
    ],
    neutral: [
      { name: "晨安", meaning: "晨为新的开始，安为安定平和。" },
      { name: "明予", meaning: "明代表清晰，予代表给予。" },
      { name: "星然", meaning: "星有希望，然代表自然。" },
      { name: "熙和", meaning: "熙代表光明温暖，和代表平和。" },
    ],
  },
  nature: {
    girl: [
      { name: "沐禾", meaning: "沐有润泽，禾代表生长与丰足。" },
      { name: "清芷", meaning: "芷为香草，清芷寓意清雅自然。" },
      { name: "云溪", meaning: "云与溪都有柔和流动的自然意象。" },
      { name: "晴岚", meaning: "岚为山间雾气，晴岚清新有诗意。" },
    ],
    boy: [
      { name: "林川", meaning: "林与川都有自然意象，寓意开阔生长。" },
      { name: "云森", meaning: "云有舒展，森有生命力。" },
      { name: "禾安", meaning: "禾象征成长，安代表平稳。" },
      { name: "沐辰", meaning: "沐代表润泽，辰象征星辰。" },
    ],
    neutral: [
      { name: "云禾", meaning: "云有舒展，禾代表生命力和成长。" },
      { name: "清木", meaning: "清代表清澈，木代表生长。" },
      { name: "林安", meaning: "林有自然生机，安代表安稳。" },
      { name: "溪然", meaning: "溪有清流意象，然代表自然。" },
    ],
  },
};

function cleanSurname(value: string) {
  return value.trim().replace(/\s+/g, "").slice(0, 2) || "李";
}

function getSuggestions(surname: string, gender: Gender, style: Style) {
  const familyName = cleanSurname(surname);
  const primary = names[style][gender];
  const neutral = gender === "neutral" ? [] : names[style].neutral.slice(0, 3);
  return [...primary, ...neutral].map((item) => ({
    fullName: `${familyName}${item.name}`,
    style: styleLabels[style],
    meaning: item.meaning,
  }));
}

export default function ChineseNameGeneratorPage() {
  const [surname, setSurname] = useState("李");
  const [gender, setGender] = useState<Gender>("girl");
  const [style, setStyle] = useState<Style>("elegant");
  const [generated, setGenerated] = useState(false);

  const suggestions = useMemo(
    () => getSuggestions(surname, gender, style),
    [surname, gender, style]
  );

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
              宝宝中文起名工具
            </h1>
            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              输入姓氏、宝宝性别和喜欢的名字风格，生成一组中文名建议和寓意说明。名字仅供灵感参考，最终可结合家庭偏好、发音和文化寓意再决定。
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            <div className="rounded-3xl border border-[#F0E8DD] bg-[#FAF8F5] p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">输入偏好</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                生成中文名灵感
              </h2>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setGenerated(true);
                }}
                className="grid gap-5"
              >
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">姓氏 *</span>
                  <input
                    required
                    value={surname}
                    onChange={(event) => setSurname(event.target.value)}
                    maxLength={2}
                    placeholder="例如：李、王、陈"
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">宝宝性别</span>
                  <select
                    value={gender}
                    onChange={(event) => setGender(event.target.value as Gender)}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  >
                    <option value="girl">女孩</option>
                    <option value="boy">男孩</option>
                    <option value="neutral">中性 / 不限定</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#1F4E4C]">名字风格</span>
                  <select
                    value={style}
                    onChange={(event) => setStyle(event.target.value as Style)}
                    className="rounded-2xl border border-[#E8DCC9] bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-[#D6B37F] focus:ring-2 focus:ring-[#D6B37F]/20"
                  >
                    <option value="modern">现代简洁</option>
                    <option value="elegant">温润文雅</option>
                    <option value="literary">诗意书卷</option>
                    <option value="bright">阳光大气</option>
                    <option value="nature">自然清新</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  生成名字建议
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">名字建议</div>
              {!generated ? (
                <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">
                  请先输入姓氏并选择名字风格。点击“生成名字建议”后，这里会显示中文名组合和寓意说明。
                </div>
              ) : (
                <div className="grid gap-4">
                  {suggestions.map((item) => (
                    <div
                      key={item.fullName}
                      className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div className="text-2xl font-bold text-[#1F4E4C]">
                          {item.fullName}
                        </div>
                        <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#B8915D] border border-[#F0E8DD]">
                          {item.style}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-7">{item.meaning}</p>
                    </div>
                  ))}
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
              <div className="text-[#D6B37F] font-medium mb-3">使用说明</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F4E4C] leading-tight mb-5">
                如何挑选更适合宝宝的中文名？
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                一个好名字通常需要兼顾发音、字形、寓意和家庭喜好。这个工具提供的是灵感建议，适合帮助家庭打开思路。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">先读出来</h3>
                  <p className="text-gray-600 leading-7">
                    把姓和名连起来多读几遍，确认发音自然、不拗口，也避免容易产生不理想谐音。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">看整体气质</h3>
                  <p className="text-gray-600 leading-7">
                    名字风格可以和家庭期待一致，例如文雅、明朗、简洁、自然或大气。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">保留候选清单</h3>
                  <p className="text-gray-600 leading-7">
                    建议先选出 5-10 个喜欢的名字，再与家人讨论，最后结合出生日期和宝宝情况确认。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-[#1F4E4C]">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <div className="text-[#F4D7A7] font-semibold mb-4">准备迎接新生命？</div>
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
