import Image from "next/image";
import { workPhotos } from "@/data/about/workPhotos";

export default function RealWorkPhotos() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Real Work Photos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            从食材准备到打包配送，每一步都认真对待。
          </h2>
          <p className="mt-6 leading-8 text-gray-600">
            我们希望通过清楚、整洁、稳定的流程，让每一份月子餐都能更安心地送到家庭手中。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {workPhotos.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] bg-[#FAF8F5]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1F4E4C]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-gray-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
