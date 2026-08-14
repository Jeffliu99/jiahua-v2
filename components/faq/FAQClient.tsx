"use client";

import { useMemo, useState } from "react";
import { faqGroups } from "@/data/faq/faqData";
import FAQAccordion from "./FAQAccordion";

export default function FAQClient() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("all");

  const filteredGroups = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return faqGroups
      .filter((group) => activeGroup === "all" || group.id === activeGroup)
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => {
          if (!keyword) return true;
          return (
            item.question.toLowerCase().includes(keyword) ||
            item.answer.toLowerCase().includes(keyword)
          );
        }),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, activeGroup]);

  return (
    <section className="bg-[#FAF8F5] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                FAQ 分类
              </p>
              <h2 className="mt-3 text-2xl font-bold text-[#1F4E4C]">
                快速找到您想了解的内容
              </h2>

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索：配送、价格、剖腹产、忌口..."
                className="mt-6 w-full rounded-2xl border border-[#E8DCC9] bg-[#FAF8F5] px-4 py-3 text-sm outline-none focus:border-[#D6B37F]"
              />

              <div className="mt-6 space-y-3">
                <button
                  type="button"
                  onClick={() => setActiveGroup("all")}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeGroup === "all"
                      ? "bg-[#1F4E4C] text-white"
                      : "bg-[#FAF8F5] text-[#1F4E4C] hover:bg-[#E8DCC9]"
                  }`}
                >
                  全部问题
                </button>

                {faqGroups.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveGroup(group.id)}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                      activeGroup === group.id
                        ? "bg-[#1F4E4C] text-white"
                        : "bg-[#FAF8F5] text-[#1F4E4C] hover:bg-[#E8DCC9]"
                    }`}
                  >
                    {group.title}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10">
            {filteredGroups.length === 0 ? (
              <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-8 text-center text-gray-600">
                没有找到相关问题。您可以换一个关键词，或直接联系我们咨询。
              </div>
            ) : (
              filteredGroups.map((group) => (
                <section key={group.id} id={group.id}>
                  <div className="mb-5">
                    <h2 className="text-3xl font-bold text-[#1F4E4C]">
                      {group.title}
                    </h2>
                    <p className="mt-2 leading-7 text-gray-600">
                      {group.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <FAQAccordion
                        key={item.question}
                        question={item.question}
                        answer={item.answer}
                      />
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
