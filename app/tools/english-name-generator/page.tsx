"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Gender = "girl" | "boy" | "neutral";
type Style = "classic" | "modern" | "international" | "nature" | "short";

type EnglishNameItem = {
  name: string;
  pronunciation: string;
  meaning: string;
  note: string;
};

const styleLabels: Record<Style, string> = {
  classic: "经典常见",
  modern: "现代清新",
  international: "国际化",
  nature: "自然温柔",
  short: "简短好记",
};

const nameBank: Record<Style, Record<Gender, EnglishNameItem[]>> = {
  classic: {
    girl: [
      {
        name: "Emma",
        pronunciation: "EM-uh",
        meaning: "常见含义为完整、普遍，名字简洁温和。",
        note: "在加拿大和英语环境中非常容易读写。",
      },
      {
        name: "Olivia",
        pronunciation: "oh-LIV-ee-uh",
        meaning: "与橄榄树相关，常被理解为和平与温柔。",
        note: "音节柔和，适合喜欢经典名字的家庭。",
      },
      {
        name: "Sophia",
        pronunciation: "so-FEE-uh",
        meaning: "智慧之意，气质端庄。",
        note: "中文家庭使用度高，读音清晰。",
      },
      {
        name: "Grace",
        pronunciation: "grays",
        meaning: "优雅、恩典。",
        note: "短小清楚，正式场合和日常都合适。",
      },
      {
        name: "Emily",
        pronunciation: "EM-uh-lee",
        meaning: "常见解释为勤勉、努力。",
        note: "非常经典，拼写和发音都容易。",
      },
    ],
    boy: [
      {
        name: "Noah",
        pronunciation: "NOH-uh",
        meaning: "常见含义与安宁、休息相关。",
        note: "简短现代，在英语环境中非常自然。",
      },
      {
        name: "Oliver",
        pronunciation: "AH-li-ver",
        meaning: "与橄榄树相关，给人温和稳重印象。",
        note: "经典又不老气，适合双语家庭。",
      },
      {
        name: "William",
        pronunciation: "WIL-yum",
        meaning: "常见含义与保护、坚定相关。",
        note: "正式感较强，可昵称 Will。",
      },
      {
        name: "James",
        pronunciation: "jaymz",
        meaning: "经典英文名，简洁稳重。",
        note: "商务和日常场景都很自然。",
      },
      {
        name: "Ethan",
        pronunciation: "EE-thun",
        meaning: "常见含义为坚强、稳定。",
        note: "读音清楚，适合喜欢稳重名字的家庭。",
      },
    ],
    neutral: [
      {
        name: "Alex",
        pronunciation: "AL-eks",
        meaning: "常见为 Alexander / Alexandra 的简化形式，有守护之意。",
        note: "男女皆可使用，简洁国际化。",
      },
      {
        name: "Taylor",
        pronunciation: "TAY-ler",
        meaning: "源自职业姓氏，现代中性。",
        note: "适合希望名字不受性别限制的家庭。",
      },
      {
        name: "Jordan",
        pronunciation: "JOR-dun",
        meaning: "与河流地名相关，稳定大方。",
        note: "在英语环境中常见且中性。",
      },
      {
        name: "Casey",
        pronunciation: "KAY-see",
        meaning: "轻快亲切，发音简单。",
        note: "适合日常感强的英文名。",
      },
      {
        name: "Morgan",
        pronunciation: "MOR-gun",
        meaning: "常见含义与海洋、明亮相关。",
        note: "中性、稳重，也有一点文艺感。",
      },
    ],
  },
  modern: {
    girl: [
      {
        name: "Ava",
        pronunciation: "AY-vuh",
        meaning: "短小明亮，常被联想到生命与鸟。",
        note: "很适合想要简短现代名字的家庭。",
      },
      {
        name: "Mia",
        pronunciation: "MEE-uh",
        meaning: "简洁温柔，读写都很容易。",
        note: "与中文名搭配通常也比较顺口。",
      },
      {
        name: "Luna",
        pronunciation: "LOO-nuh",
        meaning: "月亮之意，温柔又有想象力。",
        note: "适合喜欢柔和、现代感的家庭。",
      },
      {
        name: "Aria",
        pronunciation: "AH-ree-uh",
        meaning: "与旋律、空气相关，轻盈优雅。",
        note: "现代感强，音节好听。",
      },
      {
        name: "Nora",
        pronunciation: "NOR-uh",
        meaning: "常与光明、荣誉相关。",
        note: "简洁、耐听，不容易过时。",
      },
    ],
    boy: [
      {
        name: "Leo",
        pronunciation: "LEE-oh",
        meaning: "狮子之意，简短有力量。",
        note: "非常适合加拿大双语家庭。",
      },
      {
        name: "Milo",
        pronunciation: "MY-loh",
        meaning: "轻快亲切，现代感强。",
        note: "读音简单，适合小朋友日常使用。",
      },
      {
        name: "Theo",
        pronunciation: "THEE-oh",
        meaning: "常见为 Theodore 简化形式，有礼物之意。",
        note: "比传统全名更轻松自然。",
      },
      {
        name: "Ezra",
        pronunciation: "EZ-rah",
        meaning: "常见含义为帮助、支持。",
        note: "现代但不浮夸，比较独特。",
      },
      {
        name: "Luca",
        pronunciation: "LOO-kuh",
        meaning: "常与光明相关，温和国际化。",
        note: "发音柔和，适合跨文化环境。",
      },
    ],
    neutral: [
      {
        name: "Riley",
        pronunciation: "RY-lee",
        meaning: "轻快、有活力的中性名字。",
        note: "在北美环境中容易接受。",
      },
      {
        name: "Avery",
        pronunciation: "AY-vuh-ree",
        meaning: "现代中性，读音柔和。",
        note: "适合想要优雅但不限定性别的名字。",
      },
      {
        name: "Quinn",
        pronunciation: "kwin",
        meaning: "简短利落，现代感强。",
        note: "拼写短，容易记忆。",
      },
      {
        name: "Rowan",
        pronunciation: "ROH-un",
        meaning: "与树木相关，也有自然感。",
        note: "中性且有温和力量感。",
      },
      {
        name: "Skyler",
        pronunciation: "SKY-ler",
        meaning: "与天空意象相关，轻松明亮。",
        note: "名字开放感强。",
      },
    ],
  },
  international: {
    girl: [
      {
        name: "Maya",
        pronunciation: "MY-uh",
        meaning: "跨文化使用广，读音简单。",
        note: "中文家庭和英语环境都容易接受。",
      },
      {
        name: "Ella",
        pronunciation: "EL-uh",
        meaning: "简洁优雅，常见于多语言环境。",
        note: "发音轻柔，拼写简单。",
      },
      {
        name: "Iris",
        pronunciation: "EYE-ris",
        meaning: "鸢尾花和彩虹女神意象。",
        note: "国际化且有自然美感。",
      },
      {
        name: "Clara",
        pronunciation: "KLAIR-uh",
        meaning: "清澈、明亮。",
        note: "古典但国际化，读音清楚。",
      },
      {
        name: "Elena",
        pronunciation: "eh-LAY-nuh",
        meaning: "常与光明相关，柔和大方。",
        note: "适合喜欢优雅国际风的家庭。",
      },
    ],
    boy: [
      {
        name: "Lucas",
        pronunciation: "LOO-kus",
        meaning: "常与光相关，国际使用度高。",
        note: "英语和多语言环境都自然。",
      },
      {
        name: "Daniel",
        pronunciation: "DAN-yul",
        meaning: "经典国际名，稳定可靠。",
        note: "适合希望名字正式且通用的家庭。",
      },
      {
        name: "Adam",
        pronunciation: "AD-um",
        meaning: "非常经典，简洁有力。",
        note: "跨文化识别度高。",
      },
      {
        name: "Elias",
        pronunciation: "ee-LY-us",
        meaning: "古典国际风，音节优雅。",
        note: "比常见名字略独特。",
      },
      {
        name: "Nico",
        pronunciation: "NEE-koh",
        meaning: "轻快国际化，常作 Nicholas 简化。",
        note: "适合喜欢亲切感的家庭。",
      },
    ],
    neutral: [
      {
        name: "Noel",
        pronunciation: "noh-EL",
        meaning: "常与节日和祝福相关。",
        note: "跨文化感强，读音温和。",
      },
      {
        name: "Sasha",
        pronunciation: "SAH-shuh",
        meaning: "多文化中性名，亲切自然。",
        note: "适合希望名字有国际感的家庭。",
      },
      {
        name: "Robin",
        pronunciation: "RAH-bin",
        meaning: "与知更鸟相关，自然又亲切。",
        note: "中性且容易记忆。",
      },
      {
        name: "Ari",
        pronunciation: "AH-ree",
        meaning: "短小国际化，常与狮子或高贵相关。",
        note: "非常简洁，适合双语家庭。",
      },
      {
        name: "Remy",
        pronunciation: "REM-ee",
        meaning: "温和轻快，国际感较强。",
        note: "适合喜欢不太常见名字的家庭。",
      },
    ],
  },
  nature: {
    girl: [
      {
        name: "Lily",
        pronunciation: "LIL-ee",
        meaning: "百合花，象征纯净和温柔。",
        note: "自然意象清楚，中文家庭常用。",
      },
      {
        name: "Rose",
        pronunciation: "rohz",
        meaning: "玫瑰花，经典自然名。",
        note: "短小优雅，适合作为英文名或中间名。",
      },
      {
        name: "Ivy",
        pronunciation: "EYE-vee",
        meaning: "常青藤，寓意生命力和成长。",
        note: "简短现代，带自然感。",
      },
      {
        name: "Daisy",
        pronunciation: "DAY-zee",
        meaning: "雏菊，明亮亲切。",
        note: "名字轻快，适合活泼自然风。",
      },
      {
        name: "Willow",
        pronunciation: "WIL-oh",
        meaning: "柳树，柔韧、自然。",
        note: "有诗意，也很现代。",
      },
    ],
    boy: [
      {
        name: "River",
        pronunciation: "RIV-er",
        meaning: "河流，象征流动和生命力。",
        note: "自然感强，适合喜欢开放风格的家庭。",
      },
      {
        name: "Forest",
        pronunciation: "FOR-ist",
        meaning: "森林，稳重自然。",
        note: "比较独特，印象鲜明。",
      },
      {
        name: "Ash",
        pronunciation: "ash",
        meaning: "白蜡树，也可作简短英文名。",
        note: "短小有力量。",
      },
      {
        name: "Oakley",
        pronunciation: "OHK-lee",
        meaning: "与橡树相关，稳重自然。",
        note: "现代自然风格明显。",
      },
      {
        name: "Kai",
        pronunciation: "kye",
        meaning: "在不同语言中有海洋等含义。",
        note: "短小国际化，也有自然感。",
      },
    ],
    neutral: [
      {
        name: "Sky",
        pronunciation: "skye",
        meaning: "天空，开放明亮。",
        note: "非常简洁的自然中性名。",
      },
      {
        name: "Rain",
        pronunciation: "rayn",
        meaning: "雨，清新自然。",
        note: "有诗意，但较独特。",
      },
      {
        name: "Sage",
        pronunciation: "sayj",
        meaning: "鼠尾草，也有智慧之意。",
        note: "自然与智慧感兼具。",
      },
      {
        name: "Lake",
        pronunciation: "layk",
        meaning: "湖泊，平静开阔。",
        note: "非常简洁，适合独特风格。",
      },
      {
        name: "Juniper",
        pronunciation: "JOO-nuh-per",
        meaning: "杜松，清新自然。",
        note: "较长但有鲜明自然感。",
      },
    ],
  },
  short: {
    girl: [
      {
        name: "Eva",
        pronunciation: "EE-vuh",
        meaning: "常与生命相关，简洁温柔。",
        note: "三字母，读写容易。",
      },
      {
        name: "Zoe",
        pronunciation: "ZOH-ee",
        meaning: "生命之意。",
        note: "短小明亮，很容易记住。",
      },
      {
        name: "Amy",
        pronunciation: "AY-mee",
        meaning: "被喜爱的。",
        note: "简单亲切，中文家庭熟悉度高。",
      },
      {
        name: "Ivy",
        pronunciation: "EYE-vee",
        meaning: "常青藤，寓意成长与生命力。",
        note: "简短又有自然意象。",
      },
      {
        name: "Joy",
        pronunciation: "joy",
        meaning: "喜悦。",
        note: "含义直接美好，很适合新生命。",
      },
    ],
    boy: [
      {
        name: "Leo",
        pronunciation: "LEE-oh",
        meaning: "狮子，有力量和活力。",
        note: "短小国际化。",
      },
      {
        name: "Max",
        pronunciation: "maks",
        meaning: "常与最大、优秀相关。",
        note: "非常简短有力量。",
      },
      {
        name: "Ian",
        pronunciation: "EE-un",
        meaning: "经典短名，温和稳重。",
        note: "拼写简单，但需注意发音。",
      },
      {
        name: "Ben",
        pronunciation: "ben",
        meaning: "常作 Benjamin 简化，亲切自然。",
        note: "日常感强，容易使用。",
      },
      {
        name: "Kai",
        pronunciation: "kye",
        meaning: "多文化短名，常与海洋等意象相关。",
        note: "非常适合双语家庭。",
      },
    ],
    neutral: [
      {
        name: "Sam",
        pronunciation: "sam",
        meaning: "常作 Samuel / Samantha 简化。",
        note: "中性、简短、亲切。",
      },
      {
        name: "Lee",
        pronunciation: "lee",
        meaning: "简短中性名，也常作姓氏。",
        note: "对华人家庭非常容易发音。",
      },
      {
        name: "Ari",
        pronunciation: "AH-ree",
        meaning: "短小国际化。",
        note: "中性、简洁，有现代感。",
      },
      {
        name: "Ren",
        pronunciation: "ren",
        meaning: "短小清爽，跨文化感强。",
        note: "也和中文“仁”发音接近。",
      },
      {
        name: "Sky",
        pronunciation: "skye",
        meaning: "天空，开放明亮。",
        note: "简短自然。",
      },
    ],
  },
};

function getSuggestions(gender: Gender, style: Style) {
  const primary = nameBank[style][gender];
  const neutral =
    gender === "neutral" ? [] : nameBank[style].neutral.slice(0, 3);

  return [...primary, ...neutral];
}
export default function EnglishNameGeneratorPage() {
  const [gender, setGender] = useState<Gender>("girl");
  const [style, setStyle] = useState<Style>("classic");
  const [generated, setGenerated] = useState(false);

  const suggestions = useMemo(() => getSuggestions(gender, style), [gender, style]);

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
              宝宝英文名推荐工具
            </h1>
            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              根据宝宝性别和英文名风格，生成适合加拿大华人家庭参考的英文名建议，包含发音、含义和使用提示。
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
                生成英文名灵感
              </h2>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setGenerated(true);
                }}
                className="grid gap-5"
              >
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
                    <option value="classic">经典常见</option>
                    <option value="modern">现代清新</option>
                    <option value="international">国际化</option>
                    <option value="nature">自然温柔</option>
                    <option value="short">简短好记</option>
                  </select>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#1F4E4C] px-8 py-3.5 text-center font-semibold text-white transition hover:bg-[#173D3B]"
                >
                  生成英文名建议
                </button>
              </form>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8 shadow-sm">
              <div className="text-[#D6B37F] font-medium mb-3">英文名建议</div>
              {!generated ? (
                <div className="rounded-3xl bg-[#FAF8F5] p-6 md:p-8 text-gray-600 leading-8">
                  请选择宝宝性别和喜欢的英文名风格。点击“生成英文名建议”后，这里会显示英文名、发音、含义和使用提示。
                </div>
              ) : (
                <div className="grid gap-4">
                  {suggestions.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-[#F0E8DD] bg-[#FAF8F5] p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                        <div>
                          <div className="text-2xl font-bold text-[#1F4E4C]">
                            {item.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-500">
                            发音：{item.pronunciation}
                          </div>
                        </div>
                        <span className="inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#B8915D] border border-[#F0E8DD]">
                          {styleLabels[style]}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-7 mb-2">{item.meaning}</p>
                      <p className="text-sm leading-6 text-gray-500">{item.note}</p>
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
                如何选择更适合宝宝的英文名？
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                英文名最好兼顾发音清晰、拼写简单、文化环境自然和家庭喜好。这个工具提供的是灵感建议，适合帮助家庭建立候选清单。
              </p>
            </div>

            <div className="rounded-3xl border border-[#F0E8DD] bg-white p-6 md:p-8">
              <div className="grid gap-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">先确认发音</h3>
                  <p className="text-gray-600 leading-7">
                    选择英文名时，可以先读几遍，确认家人、老师和朋友都容易发音。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">考虑中英文搭配</h3>
                  <p className="text-gray-600 leading-7">
                    英文名可以和中文名气质相近，也可以选择更国际化、简短易记的方向。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F4E4C] mb-2">保留候选清单</h3>
                  <p className="text-gray-600 leading-7">
                    建议先选择 5-10 个喜欢的英文名，再结合姓氏、发音和家庭偏好慢慢筛选。
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
