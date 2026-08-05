"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";

import {
  Share2,
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

  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const shareToXiaohongshu = async () => {
    const content = `${title}

${url}

#加拿大月子餐
#多伦多月子餐
#产后恢复
#母乳喂养`;

    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const iconBtn = `
cursor-pointer
group
flex
h-11
min-w-[110px]
items-center
justify-center
rounded-full
border
border-[#E8DCC9]
bg-white
px-5
text-sm
font-medium
text-[#1F4E4C]
shadow-sm

transition-all
duration-300
ease-out

hover:-translate-y-[2px]
hover:scale-[1.03]
hover:border-[#D6B37F]
hover:bg-[#FFF9F0]
hover:shadow-lg
hover:shadow-[#D6B37F]/15

active:scale-[0.98]
active:translate-y-0
`;

  return (
    <div className="rounded-[2rem] border border-[#E8DCC9] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-center gap-2 text-[#1F4E4C]">
        <Share2 size={18} />
        <span className="font-semibold">
          分享给需要的家人朋友
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        <FacebookShareButton
          url={url}
          className="cursor-pointer"
        >
          <div className={iconBtn}>
            Facebook
          </div>
        </FacebookShareButton>

        <WhatsappShareButton
          url={url}
          title={title}
          className="cursor-pointer"
        >
          <div className={iconBtn}>
            WhatsApp
          </div>
        </WhatsappShareButton>

        <EmailShareButton
          url={url}
          subject={title}
          className="cursor-pointer"
        >
          <div className={iconBtn}>
            <Mail size={16} />
          </div>
        </EmailShareButton>

        <button
            onClick={shareToXiaohongshu}
            className={iconBtn}
        >
        📌 复制到小红书
        </button>

        <button
          onClick={copyLink}
          className={iconBtn}
        >
          {copied ? (
            <>
              <Check
                size={16}
                className="mr-1"
              />
              已复制
            </>
          ) : (
            <>
              <Link2
                size={16}
                className="mr-1"
              />
              复制链接
            </>
          )}
        </button>
      </div>
    </div>
  );
}