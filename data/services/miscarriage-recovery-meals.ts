import type { ServicePageData } from "@/types/service";

export const miscarriageRecoveryMeals: ServicePageData = {
  slug: "miscarriage-recovery-meals",
  url: "https://www.jiahuameal.com/services/miscarriage-recovery-meals",
  seo: {
    title: "小产调理餐 Toronto | 加华营养餐服务",
    description: "为恢复阶段提供营养餐配送服务，包含每日热餐、养生煲汤、甜品与水果，帮助家庭减少备餐压力。",
  },
  hero: {
    eyebrow: "Recovery Meal Service",
    title: "小产调理餐配送服务",
    description: "恢复期间保持规律饮食十分重要。加华提供每日配送营养餐服务，搭配汤品、水果与甜品，帮助家庭减轻备餐负担。",
    image: "/images/hero/hero-mother-baby-meal.jpg",
    imageAlt: "小产调理餐配送服务",
  },
  benefits: [
    "每日现煮制作",
    "营养均衡搭配",
    "养生煲汤",
    "水果与甜品搭配",
    "减少家庭备餐压力",
    "GTA 多区域配送",
  ],
  cardsTitle: "恢复期营养支持",
  cards: [
    { title: "恢复阶段饮食支持", description: "以规律热餐、汤品和温和搭配为重点。" },
    { title: "短期服务安排", description: "适合需要短期营养餐配送的家庭。" },
    { title: "减少备餐压力", description: "帮助家庭减少采购、烹饪和清洁压力。" },
    { title: "灵活咨询安排", description: "可根据地址、时间和需求确认服务。" }
  ],
  sections: [
    {
      eyebrow: "Service Details",
      title: "恢复期间的饮食支持",
      description: [
        "我们提供每日热餐配送服务，让家庭减少采购、烹饪与备餐压力，保持规律饮食与营养摄入。",
        "实际餐食内容会根据季节食材、服务安排和客户需求进行调整。",
      ],
      image: "/images/services/service-miscarriage-recovery-card-4x3.jpg",
      imageAlt: "恢复期间的饮食支持",
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
    title: "想了解恢复期营养餐服务？",
    description: "欢迎联系我们了解套餐内容、配送范围与服务安排。",
    buttonText: "预约咨询",
    buttonHref: "/contact",
  },
};
