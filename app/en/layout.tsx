import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Jiahua Confinement Meal | Postpartum Meal Delivery in Toronto & GTA",
    template: "%s | Jiahua Confinement Meal",
  },
  description:
    "Chinese-style postpartum meal delivery for English-speaking families across Toronto and the GTA.",
  alternates: {
    canonical: "https://jiahuameal.com/en",
    languages: {
      "zh-CA": "https://jiahuameal.com",
      "en-CA": "https://jiahuameal.com/en",
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
