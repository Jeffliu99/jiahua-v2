import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "加华月子餐 | Jiahua Postpartum Nutrition",
  description:
    "加拿大专业产后营养服务，提供月子餐、产后恢复营养支持与 GTA 配送服务。",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.jiahuameal.com/#localbusiness",
  name: "加华月子餐 | Jiahua Postpartum Meals",
  alternateName: "Jiahua Postpartum Nutrition",
  url: "https://www.jiahuameal.com",
  image: "https://www.jiahuameal.com/icon.png",
  logo: "https://www.jiahuameal.com/icon.png",

  description:
    "加华月子餐为大多伦多地区家庭提供月子餐、产后营养支持、手作甜品与手工面点服务。",

  telephone: "+1-647-727-3202",
  email: "jiahuamealca@gmail.com",

  priceRange: "$$",

  areaServed: [
    {
      "@type": "City",
      name: "Toronto",
    },
    {
      "@type": "City",
      name: "Markham",
    },
    {
      "@type": "City",
      name: "Richmond Hill",
    },
    {
      "@type": "City",
      name: "North York",
    },
    {
      "@type": "City",
      name: "Scarborough",
    },
    {
      "@type": "City",
      name: "Vaughan",
    },
    {
      "@type": "City",
      name: "Aurora",
    },
    {
      "@type": "City",
      name: "Newmarket",
    },
    {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
  ],

  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Postpartum Meal Delivery",
        alternateName: "月子餐配送服务",
        description:
          "为产后妈妈提供阶段化月子餐与营养餐配送服务。",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "C-Section Recovery Meal Support",
        alternateName: "剖腹产恢复餐",
        description:
          "针对剖腹产恢复阶段提供温和、清淡、易消化的餐食支持。",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Handmade Desserts",
        alternateName: "手作甜品",
        description:
          "提供蛋糕卷、甜品杯、现烤蛋挞、抹茶大福、曲奇等手作甜品。",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Handmade Dim Sum",
        alternateName: "手工面点",
        description:
          "提供花卷、特色馒头、鲜肉包、香菇鲜肉烧麦与烧饼等手工面点。",
      },
    },
  ],

  sameAs: [
    "https://www.jiahuameal.com",
  ],

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-647-727-3202",
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: ["Chinese", "English"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <Header />

        <main className="flex-1 bg-[#FAF8F5]">{children}</main>

        <Footer />
      </body>
    </html>
  );
}