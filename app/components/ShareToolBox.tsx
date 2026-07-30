"use client";

import { useEffect, useMemo, useState } from "react";

type ShareToolBoxProps = {
  title?: string;
  text?: string;
  url?: string;
  heading?: string;
  description?: string;
  className?: string;
  shareText?: string;
};

export default function ShareToolBox({
  title = "加华月子餐实用妈妈工具",
  text = "这个妈妈工具挺实用，可以计算预产期、推荐宝宝名字和预测宝宝身高。",
  url,
  heading = "身边有正在备孕或怀孕的朋友？",
  description = "把这个实用工具发给她，几秒钟就能获得清晰参考。",
  className = "",
  shareText,
}: ShareToolBoxProps) {
  const [copiedType, setCopiedType] = useState<"link" | "text" | null>(null);
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

  const finalShareText = useMemo(() => {
    if (shareText) return shareText;

    return `${text}\n\n${currentUrl}`;
  }, [shareText, text, currentUrl]);

  const shareData = useMemo(
    () => ({
      title,
      text,
      url: currentUrl,
    }),
    [title, text, currentUrl]
  );

  async function copyToClipboard(value: string, copiedAs: "link" | "text") {
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

      setCopiedType(copiedAs);
      window.setTimeout(() => setCopiedType(null), 2400);
    } catch {
      setCopiedType(null);
    }
  }

  async function handleCopyLink() {
    await copyToClipboard(currentUrl, "link");
  }

  async function handleCopyShareText() {
    await copyToClipboard(finalShareText, "text");
  }

  async function handleShare() {
    if (!currentUrl) return;

    try {
      if (canNativeShare && navigator.share) {
        await navigator.share(shareData);
      } else {
        await copyToClipboard(finalShareText, "text");
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
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-3 py-1 text-xs font-semibold text-[#B8915D]">
            <span aria-hidden="true">↗</span>
            <span>分享工具</span>
          </div>

          <h2 className="text-xl font-bold text-[#1F4E4C] md:text-2xl">
            {heading}
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 md:text-base md:leading-7">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex justify-center rounded-full border border-[#D6B37F]/55 bg-white px-5 py-2.5 text-sm font-semibold text-[#1F4E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FAF8F5] focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
          >
            {copiedType === "link" ? "链接已复制" : "复制链接"}
          </button>

          <button
            type="button"
            onClick={handleCopyShareText}
            className="inline-flex justify-center rounded-full border border-[#D6B37F]/55 bg-[#FAF8F5] px-5 py-2.5 text-sm font-semibold text-[#1F4E4C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A18A] focus:ring-offset-2 focus:ring-offset-white"
          >
            {copiedType === "text" ? "文案已复制" : "复制分享文案"}
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

      {copiedType && (
        <div className="mt-4 rounded-2xl border border-[#D6B37F]/35 bg-[#FAF8F5] px-4 py-3 text-sm leading-6 text-[#1F4E4C]">
          {copiedType === "link"
            ? "链接已复制，可以发送给朋友或分享到微信群、WhatsApp、短信、小红书等平台。"
            : "分享文案已复制，可以直接粘贴到微信群、WhatsApp、短信、小红书等平台。"}
        </div>
      )}
    </section>
  );
}
