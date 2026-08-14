"use client";

import { useState } from "react";

export default function FAQAccordion({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-[#E8DCC9] bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-[#1F4E4C]">{question}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8F5] text-[#B8915D]">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="border-t border-[#E8DCC9] px-6 py-5 leading-8 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
}
