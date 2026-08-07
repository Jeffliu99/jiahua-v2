export const postpartumMealSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.jiahuameal.com/meal-plans#service",
  name: "Postpartum Meal Plans",
  alternateName: "加华月子套餐",
  serviceType: "Postpartum Meal Delivery",
  description:
    "加华月子餐为 GTA 地区家庭提供专业月子餐配送、产后恢复餐、剖腹产恢复餐及产后营养支持服务。",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.jiahuameal.com/#localbusiness",
    name: "加华月子餐",
  },
  areaServed: [
    "Toronto",
    "Markham",
    "Richmond Hill",
    "North York",
    "Scarborough",
    "Vaughan",
    "Aurora",
    "Newmarket",
  ],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Postpartum Meal Programs",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "30-Day Postpartum Meal Plan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "C-Section Recovery Meal Plan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Miscarriage Recovery Meals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pregnancy Nutrition Support Meals" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lactation Support Meal Plan" } }
    ]
  }
};
