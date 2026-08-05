"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import {
  Mail,
  Link2,
  Check,
} from "lucide-react";

interface SharePanelProps {
  title: string;
}

export default function SharePanel({
  title,
}: SharePanelProps) {
  const pathname = usePathname();

  const url = `${
    process.env.NEXT_PUBLIC_SITE_URL || ""
  }${pathname}`;

  const [copiedText, setCopiedText] =
    useState("");

  const showCopied = (text: string) => {
    setCopiedText(text);

    setTimeout(() => {
      setCopiedText("");
    }, 2000);
  };

  const shareToWechat = async () => {
    const content = `${title}

${url}

加华月子餐｜GTA专业产后营养支持

#加拿大月子餐
#产后恢复
#母乳喂养`;

    await navigator.clipboard.writeText(
      content
    );

    showCopied("微信内容已复制");
  };

  const shareToXiaohongshu =
    async () => {
      const content = `${title}

${url}

#加拿大月子餐
#多伦多月子餐
#产后恢复
#母乳喂养
#坐月子`;

      await navigator.clipboard.writeText(
        content
      );

      showCopied("小红书内容已复制");
    };

  const copyLink = async () => {
    await navigator.clipboard.writeText(
      url
    );

    showCopied("链接已复制");
  };

  const buttonStyle = `
    cursor-pointer
    group
    inline-flex
    items-center
    justify-center
    gap-2

    h-10
    px-4

    rounded-full
    border
    border-[#E8DCC9]

    bg-white
    text-sm
    font-medium
    text-[#1F4E4C]

    shadow-sm

    transition-all
    duration-300
    ease-out

    hover:-translate-y-0.5
    hover:scale-[1.03]
    hover:border-[#D6B37F]
    hover:bg-[#FFF9F0]
    hover:shadow-md

    active:scale-[0.98]
  `;

  return (
    <div className="mx-auto max-w-3xl">
      <div
        className="
          rounded-[2rem]
          border
          border-[#E8DCC9]
          bg-white/90
          p-8
          shadow-sm
          backdrop-blur-sm
        "
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold text-[#1F4E4C]">
            分享给正在备产或产后恢复的家人朋友
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            一份好的营养支持，也许能帮助更多妈妈安心恢复。
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {/* 微信 */}
          <button
            onClick={shareToWechat}
            className={`
              ${buttonStyle}
              border-[#CFE9D5]
              bg-[#F4FBF6]
              hover:bg-[#ECF8F0]
            `}
          >
            💚 微信分享
          </button>

          {/* 小红书 */}
          <button
            onClick={shareToXiaohongshu}
            className={`
              ${buttonStyle}
              border-[#F2D7DE]
              bg-[#FFF8FA]
              hover:bg-[#FFF1F4]
            `}
          >
            📌 复制到小红书
          </button>

          {/* 复制链接 */}
          <button
            onClick={copyLink}
            className={`
              ${buttonStyle}
              ${
                copiedText === "链接已复制"
                  ? "border-green-300 bg-green-50 text-green-700"
                  : ""
              }
            `}
          >
            {copiedText === "链接已复制" ? (
              <>
                <Check
                  size={16}
                  className="animate-pulse"
                />
                已复制
              </>
            ) : (
              <>
                <Link2 size={16} />
                复制链接
              </>
            )}
          </button>

          {/* WhatsApp */}
          <WhatsappShareButton
            url={url}
            title={title}
            className="cursor-pointer"
          >
            <div className={buttonStyle}>
              WhatsApp
            </div>
          </WhatsappShareButton>

          {/* Facebook */}
          <FacebookShareButton
            url={url}
            className="cursor-pointer"
          >
            <div className={buttonStyle}>
              Facebook
            </div>
          </FacebookShareButton>

          {/* Email */}
          <EmailShareButton
            url={url}
            subject={title}
            className="cursor-pointer"
          >
            <div className={buttonStyle}>
              <Mail size={16} />
              邮件
            </div>
          </EmailShareButton>
        </div>

        {copiedText && (
          <div className="mt-4 text-center text-sm text-green-600">
            ✅ {copiedText}
          </div>
        )}
      </div>
    </div>
  );
}