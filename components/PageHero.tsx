import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type HeroButton = {
  text: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  backgroundImage?: string;
  height?: "sm" | "md" | "lg";
  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage = "/images/hero/hero-mother-baby-meal.jpg",
  height = "md",
  primaryButton,
  secondaryButton,
}: PageHeroProps) {
  const heights = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#1F4E4C]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={typeof title === "string" ? title : "Page Hero"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#1F4E4C]/95 via-[#1F4E4C]/80 to-[#1F4E4C]/35" />
      </div>

      <div className={`mx-auto max-w-7xl px-6 md:px-8 ${heights[height]}`}>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
          ✦ {eyebrow}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
            {description}
          </p>
        )}

        {(primaryButton || secondaryButton) && (
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-[#1F4E4C] shadow-sm transition hover:bg-[#F7EDEA]"
              >
                {primaryButton.text}
              </Link>
            )}

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
