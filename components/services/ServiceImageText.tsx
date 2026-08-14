import Image from "next/image";
import Link from "next/link";
import type { ServiceSection } from "@/types/service";

type ServiceImageTextProps = {
  section: ServiceSection;
};

export default function ServiceImageText({ section }: ServiceImageTextProps) {
  return (
    <section className="py-20">
      <div
        className={`mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-2 lg:items-center ${
          section.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {section.image && section.imageAlt && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
            <Image
              src={section.image}
              alt={section.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        )}

        <div>
          {section.eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              {section.eyebrow}
            </p>
          )}

          <h2 className="text-4xl font-bold text-[#1F4E4C]">
            {section.title}
          </h2>

          <div className="mt-6 space-y-4 leading-8 text-gray-600">
            {section.description.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          {section.ctaText && (
            <Link
              href={section.ctaHref ?? "/contact"}
              className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white hover:bg-[#173D3B]"
            >
              {section.ctaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
