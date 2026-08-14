export type BestSeller = {
  name: string;
  description: string;
  image: string;
  badge: string;
};

export const bestSellers: BestSeller[] = [
  {
    name: "抹茶红豆蛋糕卷",
    description: "抹茶香气与红豆奶油搭配，口感柔和，适合下午茶分享。",
    image: "/images/desserts/roll-cake-series.png",
    badge: "人气推荐",
  },
  {
    name: "芒果甜品杯",
    description: "芒果果香浓郁，层次清爽，适合聚会和家庭点心。",
    image: "/images/desserts/dessert-cup-series.png",
    badge: "清爽果香",
  },
  {
    name: "现烤葡式蛋挞",
    description: "酥皮香脆、内馅浓郁，适合家庭聚会和团体订购。",
    image: "/images/desserts/egg-tarts-series.png",
    badge: "现烤热卖",
  },
  {
    name: "经典提拉米苏",
    description: "可可与奶香层次分明，适合生日、聚会和节日餐桌。",
    image: "/images/desserts/tiramisu-series.png",
    badge: "经典口味",
  },
];
