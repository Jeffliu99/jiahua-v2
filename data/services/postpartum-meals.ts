import type { ServicePageData } from "@/types/service";

export const postpartumMeals: ServicePageData = {
  slug: "postpartum-meals",
  url: "https://www.jiahuameal.com/services/postpartum-meals",
  seo: {
    title: "Toronto Postpartum Meal Delivery | 加华月子餐",
    description: "四阶段月子餐体系，每日三餐三点、养生煲汤、新鲜水果、养生甜品与手工面点，为 GTA 华人家庭提供专业月子餐配送服务。",
  },
  hero: {
    eyebrow: "Postpartum Meal Delivery",
    title: "Toronto 月子餐配送服务",
    description: "根据妈妈不同恢复阶段安排每日三餐三点，搭配养生煲汤、新鲜水果、养生甜品与手工面点。",
    image: "/images/hero/hero-mother-baby-meal.jpg",
    imageAlt: "Toronto 月子餐配送服务",
  },
  benefits: [
    "每日现煮制作",
    "营养均衡搭配",
    "养生煲汤",
    "水果与甜品搭配",
    "减少家庭备餐压力",
    "GTA 多区域配送",
  ],
  cardsTitle: "四阶段月子餐体系",
  cards: [
    { title: "第一周 · 恢复期", description: "以清淡、温和、易消化为重点。" },
    { title: "第二周 · 调理期", description: "逐步增加优质蛋白与营养密度。" },
    { title: "第三周 · 滋养期", description: "增加丰富主菜与养生汤品。" },
    { title: "第四周 · 巩固期", description: "均衡营养并逐步过渡到日常饮食。" }
  ],
  sections: [
    {
      eyebrow: "Service Details",
      title: "每日现煮配送",
      description: [
        "服务覆盖 GTA 多个华人社区，每日制作配送，帮助家庭减少备餐压力。",
        "实际餐食内容会根据季节食材、服务安排和客户需求进行调整。",
      ],
      image: "/images/services/service-postpartum-meals-card-4x3.jpg",
      imageAlt: "每日现煮配送",
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
    title: "想了解适合您的月子餐方案？",
    description: "欢迎联系我们了解套餐内容、配送范围与服务安排。",
    buttonText: "预约咨询",
    buttonHref: "/contact",
  },
};
