import { dimSumCategories } from "@/data/dim-sum/categories";

export default function DimSumSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jiahua Handmade Dim Sum",
    alternateName: "加华手工面点",
    provider: {
      "@type": "LocalBusiness",
      name: "Jiahua Postpartum Meals",
      url: "https://www.jiahuameal.com",
    },
    areaServed: [
      "Toronto",
      "Markham",
      "Richmond Hill",
      "Vaughan",
      "North York",
      "Scarborough",
      "Mississauga",
      "Aurora",
      "Newmarket",
      "Greater Toronto Area",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Handmade Dim Sum Categories",
      itemListElement: dimSumCategories.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: item.englishTitle,
          alternateName: item.title,
          description: item.description,
          image: `https://www.jiahuameal.com${item.image}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
