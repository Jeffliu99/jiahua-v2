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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.jiahuameal.com";

  const url = `${siteUrl}${pathname}`;

  const [copiedText, setCopiedText] = useState("");

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
#多伦多月子餐
#产后恢复
#母乳喂养`;

    await navigator.clipboard.writeText(content);

    showCopied("微信内容已复制");
  };

  const shareToXiaohongshu = async () => {
    const content = `${title}

${url}

#加拿大月子餐
#多伦多月子餐
#产后恢复
#母乳喂养
#坐月子`;

    await navigator.clipboard.writeText(content);

    showCopied("小红书内容已复制");
  };

  const shareToFacebookPage = async () => {
    const content = `${title}

${url}

加华月子餐为 GTA 华人家庭提供：

✅ 月子餐
✅ 剖腹产恢复餐
✅ 哺乳期营养餐
✅ 小产调理餐
✅ 家庭营养餐

每日现煮配送
帮助家庭减少备餐压力

#JiahuaPostpartumMeals
#TorontoPostpartumMeals
#GTAFamilyMeals`;

    await navigator.clipboard.writeText(content);

    showCopied("Facebook主页文案已复制");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    showCopied("链接已复制");
  };

  const buttonStyle =
    "cursor-pointer group inline-flex items-center justify-center gap-2 h-10 px-4 rounded-full border border-[#E8DCC9] bg-white text-sm font-medium text-[#1F4E4C] shadow-sm transition-all duration-300 hover:border-[#D6B37F] hover:bg-[#FFF9F0] hover:shadow-md";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#1F4E4C]">
          分享给正在备产或产后恢复的家人朋友
        </h3>

        <p className="mt-3 text-gray-600">
          一份好的营养支持，也许能帮助更多妈妈安心恢复。
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={shareToWechat}
          className={buttonStyle}
        >
          💚 微信分享
        </button>

        <button
          onClick={shareToXiaohongshu}
          className={buttonStyle}
        >
          📌 复制到小红书
        </button>

        <button
          onClick={shareToFacebookPage}
          className={buttonStyle}
        >
          📘 Facebook主页文案
        </button>

        <button
          onClick={copyLink}
          className={buttonStyle}
        >
          {copiedText === "链接已复制" ? (
            <>
              <Check size={16} />
              已复制
            </>
          ) : (
            <>
              <Link2 size={16} />
              复制链接
            </>
          )}
        </button>

        <WhatsappShareButton
          url={url}
          title={title}
        >
          <span className={buttonStyle}>
            WhatsApp
          </span>
        </WhatsappShareButton>

        <FacebookShareButton
          url={url}
          hashtag="#JiahuaPostpartumMeals"
        >
          <span className={buttonStyle}>
            Facebook
          </span>
        </FacebookShareButton>

        <EmailShareButton
          url={url}
          subject={title}
        >
          <span className={buttonStyle}>
            <Mail size={16} />
            邮件
          </span>
        </EmailShareButton>
      </div>

      {copiedText && (
        <div className="text-center text-sm font-medium text-green-600">
          ✅ {copiedText}
        </div>
      )}
    </div>
  );
}