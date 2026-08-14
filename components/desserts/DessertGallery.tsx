import Image from "next/image";
import { dessertGalleryImages } from "@/data/desserts/gallery";

export default function DessertGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
            Real Dessert Photos
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#1F4E4C] md:text-5xl">
            真实甜品实拍展示
          </h2>
          <p className="mx-auto mt-5 max-w-3xl leading-8 text-gray-600">
            图片来自实际制作与出品，更直观展示甜品外观、包装和适合的分享场景。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {dessertGalleryImages.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={index === 0 ? "relative aspect-[4/3]" : "relative aspect-[4/3]"}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white">
                <p className="font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
