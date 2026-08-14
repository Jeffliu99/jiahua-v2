import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;

  // 新增
  backgroundImage?: string;
  height?: "sm" | "md" | "lg";
};

export default function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage = "/images/hero/hero-mother-baby-meal.jpg",
  height = "md",
}: PageHeroProps) {
  const heights = {
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-24 md:py-32",
  };

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/88 to-[#FAF8F5]/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/10 via-transparent to-[#FAF8F5]" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-8 ${heights[height]}`}
      >
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F0E8DD] bg-white/75 px-4 py-2 text-sm font-medium text-[#B8915D] shadow-sm backdrop-blur mb-5">
            <span>✦</span>
            <span>{eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#1F4E4C] mb-5">
            {title}
          </h1>

          {description && (
            <p className="max-w-xl text-base md:text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}