import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jiahua Confinement Meal",
  description: "English postpartum recovery and Chinese-style confinement meal articles from Jiahua Confinement Meal.",
  alternates: {
    canonical: "https://jiahuameal.com/en/blog",
    languages: {
      "zh-CA": "https://jiahuameal.com/blog",
      "en-CA": "https://jiahuameal.com/en/blog",
    },
  },
};

export default function EnglishBlogPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A18A]">Blog</p>
          <h1 className="text-4xl font-bold text-[#1F4E4C] md:text-6xl">Postpartum Recovery Resources</h1>
          <p className="mt-6 max-w-3xl leading-8 text-gray-600">English articles are coming soon. You can view our Chinese blog for now.</p>
          <Link href="/blog" className="mt-8 inline-flex rounded-full bg-[#1F4E4C] px-7 py-3 font-semibold text-white hover:bg-[#173D3B]">
            View Chinese Blog
          </Link>
        </div>
      </section>
    </main>
  );
}
