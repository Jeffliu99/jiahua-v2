import type { ServicePageData } from "@/types/service";

export const breastfeedingMeals: ServicePageData = {
  slug: "breastfeeding-meals",
  url: "https://www.jiahuameal.com/services/breastfeeding-meals",
  seo: {
    title: "Breastfeeding Meals Toronto | 哺乳期营养餐",
    description: "加华哺乳期营养餐服务，提供每日营养餐、养生煲汤、新鲜水果与甜品，帮助妈妈在哺乳阶段保持规律饮食。",
  },
  hero: {
    eyebrow: "Breastfeeding Meals",
    title: "哺乳期营养餐配送服务",
    description: "为哺乳阶段提供更规律的餐食安排，包含每日热餐、养生煲汤、水果与甜品，帮助家庭减少备餐压力。",
    image: "/images/hero/hero-mother-baby-meal.jpg",
    imageAlt: "哺乳期营养餐配送服务",
  },
  benefits: [
    "每日现煮制作",
    "营养均衡搭配",
    "养生煲汤",
    "水果与甜品搭配",
    "减少家庭备餐压力",
    "GTA 多区域配送",
  ],
  cardsTitle: "每日餐食搭配",
  cards: [
    { title: "优质蛋白", description: "鱼类、鸡肉、牛肉与蛋类等常见优质蛋白来源。" },
    { title: "丰富蔬菜", description: "多种时令蔬菜搭配，提高饮食品种丰富度。" },
    { title: "养生煲汤", description: "每日搭配汤品作为整体饮食组合的一部分。" },
    { title: "水果与甜品", description: "每日搭配水果与甜品，让饮食更加丰富。" }
  ],
  sections: [
    {
      eyebrow: "Service Details",
      title: "哺乳期每日配送",
      description: [
        "每日制作配送，让家庭减少采购、烹饪与备餐时间。",
        "实际餐食内容会根据季节食材、服务安排和客户需求进行调整。",
      ],
      image: "/images/services/service-breastfeeding-meals-card-4x3.jpg",
      imageAlt: "哺乳期每日配送",
      ctaText: "咨询此服务",
      ctaHref: "/contact",
    },
  ],
  faqs: [
  {
    question: "服务覆盖哪些地区？",
    answer: "服务覆盖 Toronto、Markham、Richmond Hill、Vaughan、North York、Scarborough、Aurora、Newmarket 等 GTA 区域，具体地址请咨询确认。",
  },
  {
    question: "需要提前多久咨询？",
    answer: "建议至少提前数天咨询。如需长期配送、特殊餐单或高峰期服务，建议更早联系确认。",
  },
  {
    question: "可以根据忌口调整吗？",
    answer: "可以在咨询时说明饮食偏好、过敏情况和忌口需求，我们会根据实际餐单尽量配合。",
  },
],
  cta: {
    title: "想了解哺乳期营养餐？",
    description: "欢迎联系我们了解套餐内容、配送范围与服务安排。",
    buttonText: "预约咨询",
    buttonHref: "/contact",
  },
};
