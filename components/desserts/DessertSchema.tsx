import { dessertCategories } from "@/data/desserts/categories";

export default function DessertSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jiahua Handmade Desserts",
    alternateName: "加华手作甜品",
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
      name: "Handmade Dessert Categories",
      itemListElement: dessertCategories.map((item) => ({
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
