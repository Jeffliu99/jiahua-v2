export type DimSumBestSeller = {
  name: string;
  description: string;
  image: string;
  badge: string;
};

export const dimSumBestSellers: DimSumBestSeller[] = [
  {
    name: "鲜肉包",
    description: "手工包制，馅料饱满，是早餐和家庭常备面点的人气选择。",
    image: "/images/dim-sum/pork-bun-series.png",
    badge: "热卖推荐",
  },
  {
    name: "鲜肉烧饼",
    description: "外皮金黄酥香，内馅咸香丰富，适合趁热享用。",
    image: "/images/dim-sum/savory-meat-pastry-series.png",
    badge: "酥香口感",
  },
  {
    name: "牛肉烧饼",
    description: "层次丰富的酥皮搭配牛肉馅料，适合聚餐和团购。",
    image: "/images/dim-sum/savory-beef-pastry-series.png",
    badge: "咸香风味",
  },
  {
    name: "香菇鲜肉烧麦",
    description: "小巧方便、馅料扎实，适合早餐、茶点和家庭分享。",
    image: "/images/dim-sum/siu-mai-series.png",
    badge: "家庭分享",
  },
];
