// lib/schema/handmade-dim-sum-service-schema.ts

export const handmadeDimSumSchema = {
  "@context": "https://schema.org",
  "@type": "Service",

  "@id":
    "https://www.jiahuameal.com/handmade-dim-sum#service",

  name: "Handmade Dim Sum",

  alternateName: "加华手工面点",

  serviceType:
    "Handmade Dim Sum & Traditional Chinese Pastries",

  description:
    "加华手工面点提供花卷、特色馒头、鲜肉包、香菇鲜肉烧麦、鲜肉烧饼及牛肉烧饼等传统手工面点。",

  provider: {
    "@type": "LocalBusiness",
    "@id":
      "https://www.jiahuameal.com/#localbusiness",

    name: "加华月子餐",
    url: "https://www.jiahuameal.com",
    telephone: "+1-647-727-3202",
  },

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Greater Toronto Area",
    },
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

    name: "Handmade Dim Sum Collection",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Steamed Roll Series",
          alternateName: "花卷系列",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Specialty Steamed Buns",
          alternateName: "特色馒头系列",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pork Bun Series",
          alternateName: "鲜肉包系列",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mushroom Pork Siu Mai",
          alternateName: "香菇鲜肉烧麦系列",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pork Pastry Series",
          alternateName: "鲜肉烧饼系列",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Beef Pastry Series",
          alternateName: "牛肉烧饼系列",
        },
      },
    ],
  },
};