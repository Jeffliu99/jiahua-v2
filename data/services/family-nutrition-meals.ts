import type { ServicePageData } from "@/types/service";

export const familyNutritionMeals: ServicePageData = {
  slug: "family-nutrition-meals",
  url: "https://www.jiahuameal.com/services/family-nutrition-meals",
  seo: {
    title: "家庭营养餐 Toronto | Family Meal Delivery GTA",
    description: "加华家庭营养餐服务，提供均衡搭配、每日新鲜制作与配送，适合双职工家庭、孕妇家庭、长者家庭及产后家庭。",
  },
  hero: {
    eyebrow: "Family Nutrition Meals",
    title: "家庭营养餐配送服务",
    description: "为繁忙家庭、长者家庭、孕妇家庭与产后家庭提供规律、方便且均衡的每日营养餐服务。",
    image: "/images/hero/hero-mother-baby-meal.jpg",
    imageAlt: "家庭营养餐配送服务",
  },
  benefits: [
    "每日现煮制作",
    "营养均衡搭配",
    "养生煲汤",
    "水果与甜品搭配",
    "减少家庭备餐压力",
    "GTA 多区域配送",
  ],
  cardsTitle: "适合哪些家庭",
  cards: [
    { title: "双职工家庭", description: "减少工作日采购和做饭时间，保持规律饮食。" },
    { title: "产后家庭", description: "除月子餐外，帮助照顾家人日常饮食需求。" },
    { title: "长者家庭", description: "减少长辈烹饪压力，维持均衡营养。" },
    { title: "孕妇家庭", description: "帮助家庭保持更稳定的饮食安排。" }
  ],
  sections: [
    {
      eyebrow: "Service Details",
      title: "每日家庭营养搭配",
      description: [
        "结合优质蛋白、时令蔬菜、主食与汤品，为家庭提供更方便的日常饮食选择。",
        "实际餐食内容会根据季节食材、服务安排和客户需求进行调整。",
      ],
      image: "/images/services/service-family-nutrition-card-4x3.jpg",
      imageAlt: "每日家庭营养搭配",
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
    title: "想了解家庭营养餐服务？",
    description: "欢迎联系我们了解套餐内容、配送范围与服务安排。",
    buttonText: "预约咨询",
    buttonHref: "/contact",
  },
};
