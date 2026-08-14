import type { ServicePageData } from "@/types/service";

export const cSectionRecoveryMeals: ServicePageData = {
  slug: "c-section-recovery-meals",
  url: "https://www.jiahuameal.com/services/c-section-recovery-meals",
  seo: {
    title: "C-Section Recovery Meals Toronto | 加华月子餐",
    description: "针对剖腹产恢复阶段提供营养餐配送服务，结合四阶段恢复理念，帮助家庭减少备餐压力。",
  },
  hero: {
    eyebrow: "C-Section Recovery Meals",
    title: "剖腹产恢复营养餐配送服务",
    description: "根据恢复阶段安排每日餐食、养生煲汤、水果与甜品，帮助家庭减少备餐压力。",
    image: "/images/hero/hero-mother-baby-meal.jpg",
    imageAlt: "剖腹产恢复营养餐配送服务",
  },
  benefits: [
    "每日现煮制作",
    "营养均衡搭配",
    "养生煲汤",
    "水果与甜品搭配",
    "减少家庭备餐压力",
    "GTA 多区域配送",
  ],
  cardsTitle: "四阶段恢复理念",
  cards: [
    { title: "术后早期恢复", description: "以温和、易消化饮食为主。" },
    { title: "营养补充阶段", description: "逐步增加优质蛋白和多样化菜品。" },
    { title: "体力恢复阶段", description: "增加主菜丰富度与营养密度。" },
    { title: "全面巩固阶段", description: "逐步过渡至均衡家庭饮食。" }
  ],
  sections: [
    {
      eyebrow: "Service Details",
      title: "剖腹产恢复餐食示例",
      description: [
        "餐食通常包含优质蛋白、时令蔬菜、主食、养生煲汤、新鲜水果与甜品。",
        "实际餐食内容会根据季节食材、服务安排和客户需求进行调整。",
      ],
      image: "/images/services/service-c-section-recovery-card-4x3.jpg",
      imageAlt: "剖腹产恢复餐食示例",
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
    title: "需要剖腹产恢复营养餐服务？",
    description: "欢迎联系我们了解套餐内容、配送范围与服务安排。",
    buttonText: "预约咨询",
    buttonHref: "/contact",
  },
};
