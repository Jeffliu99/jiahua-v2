export const handmadeDimSumBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,

      name: "首页",

      item: "https://www.jiahuameal.com",
    },

    {
      "@type": "ListItem",
      position: 2,

      name: "手工面点",

      item:
        "https://www.jiahuameal.com/handmade-dim-sum",
    },
  ],
};