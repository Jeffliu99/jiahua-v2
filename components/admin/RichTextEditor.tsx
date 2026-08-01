"use client";

import { useEffect, useRef, useState } from "react";

type RichTextEditorProps = {
  name: string;
  defaultValue?: string | null;
};

function normalizeInitialContent(value?: string | null) {
  if (!value) return "<p></p>";

  const trimmed = value.trim();

  if (trimmed.startsWith("<")) {
    return trimmed;
  }

  return trimmed
    .split(/\n{2,}/)
    .map((paragraph) => `<p>${paragraph.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export default function RichTextEditor({ name, defaultValue }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState(normalizeInitialContent(defaultValue));

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = normalizeInitialContent(defaultValue);
      setHtml(editorRef.current.innerHTML);
    }
  }, [defaultValue]);

  function syncHtml() {
    if (!editorRef.current) return;
    setHtml(editorRef.current.innerHTML);
  }

  function runCommand(command: string, value?: string) {
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    syncHtml();
  }

  function setBlock(tag: string) {
    editorRef.current?.focus();
    document.execCommand("formatBlock", false, tag);
    syncHtml();
  }

  function addLink() {
    const url = window.prompt("请输入链接 URL，例如：https://example.com");
    if (!url) return;
    runCommand("createLink", url);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E8DCC9] bg-white">
      <div className="flex flex-wrap gap-2 border-b border-[#E8DCC9] bg-[#FAF8F5] p-3">
        <button
          type="button"
          onClick={() => setBlock("p")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          正文
        </button>
        <button
          type="button"
          onClick={() => setBlock("h2")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          标题 H2
        </button>
        <button
          type="button"
          onClick={() => setBlock("h3")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          小标题 H3
        </button>
        <button
          type="button"
          onClick={() => runCommand("bold")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-bold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => runCommand("italic")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs italic font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => runCommand("underline")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold underline text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          U
        </button>
        <button
          type="button"
          onClick={() => runCommand("insertUnorderedList")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          项目列表
        </button>
        <button
          type="button"
          onClick={() => runCommand("insertOrderedList")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          编号列表
        </button>
        <button
          type="button"
          onClick={() => setBlock("blockquote")}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          引用
        </button>
        <button
          type="button"
          onClick={addLink}
          className="rounded-full border border-[#E8DCC9] bg-white px-3 py-1.5 text-xs font-semibold text-[#1F4E4C] hover:bg-[#D6B37F]/10"
        >
          链接
        </button>
        <button
          type="button"
          onClick={() => runCommand("removeFormat")}
          className="rounded-full border border-red-100 bg-white px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50"
        >
          清除格式
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={syncHtml}
        onBlur={syncHtml}
        className="min-h-[360px] bg-white px-5 py-4 text-[#1F4E4C] outline-none prose prose-lg max-w-none prose-headings:text-[#1F4E4C] prose-p:leading-8 prose-li:leading-8"
      />

      <input type="hidden" name={name} value={html} />
    </div>
  );
}
