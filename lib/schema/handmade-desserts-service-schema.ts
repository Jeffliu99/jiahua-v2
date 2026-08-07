export const handmadeDessertsSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://www.jiahuameal.com/handmade-desserts#service",

  name: "Handmade Desserts",

  alternateName: "加华手作甜品",

  serviceType: "Handmade Dessert & Bakery",

  description:
    "加华手作甜品提供蛋糕卷、甜品杯、现烤蛋挞、提拉米苏、抹茶大福、曲奇及节日礼盒等手工甜品。",

  provider: {
    "@type": "LocalBusiness",
    "@id":
      "https://www.jiahuameal.com/#localbusiness",

    name: "加华月子餐",
  },

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
  ],

  offers: {
    "@type": "Offer",
    availability:
      "https://schema.org/InStock",

    priceCurrency: "CAD",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Handmade Dessert Collection",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Roll Cake Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dessert Cup Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fresh Egg Tart Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Castella Cake Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tiramisu Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Seaweed Pork Floss Cake Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Matcha Mochi Series",
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cookie Series",
        },
      },
    ],
  },
};