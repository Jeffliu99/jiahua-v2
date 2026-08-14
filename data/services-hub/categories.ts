export type ServiceHubItem = {
  title: string;
  englishTitle: string;
  description: string;
  image: string;
  href?: string;
  status?: "available" | "coming-soon";
  badge?: string;
};

export type ServiceHubCategory = {
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceHubItem[];
};

export const serviceHubCategories: ServiceHubCategory[] = [
  {
    eyebrow: "Postpartum Care",
    title: "核心月子餐服务",
    description: "围绕妈妈产后恢复、剖腹产、哺乳期与小产恢复阶段提供营养餐支持。",
    items: [
      {
        title: "30天月子餐方案",
        englishTitle: "Postpartum Meals",
        description:
          "四阶段月子餐体系，每日三餐三点、养生煲汤、水果、甜品与手工面点。",
        image: "/images/services/service-postpartum-meals-card-4x3.jpg",
        href: "/services/postpartum-meals",
        badge: "主力服务",
      },
      {
        title: "剖腹产恢复餐",
        englishTitle: "C-Section Recovery Meals",
        description:
          "适合剖腹产恢复阶段，强调温和、规律、易消化和阶段性营养支持。",
        image: "/images/services/service-c-section-recovery-card-4x3.jpg",
        href: "/services/c-section-recovery-meals",
      },
      {
        title: "哺乳期营养餐",
        englishTitle: "Breastfeeding Meals",
        description:
          "为哺乳阶段提供规律热餐、汤品、水果与甜品搭配，减少家庭备餐压力。",
        image: "/images/services/service-breastfeeding-meals-card-4x3.jpg",
        href: "/services/breastfeeding-meals",
      },
      {
        title: "小产调理餐",
        englishTitle: "Recovery Meals",
        description:
          "为恢复阶段提供短期或阶段性营养餐配送，帮助家庭减少采购和烹饪负担。",
        image: "/images/services/service-miscarriage-recovery-card-4x3.jpg",
        href: "/services/miscarriage-recovery-meals",
        badge: "新增服务",
      },
    ],
  },
  {
    eyebrow: "Family Nutrition",
    title: "家庭营养服务",
    description: "面向繁忙家庭、长者家庭、术后恢复家庭与产后家庭的日常营养餐支持。",
    items: [
      {
        title: "家庭营养餐",
        englishTitle: "Family Nutrition Meals",
        description:
          "适合双职工家庭、孕妇家庭、长者家庭和产后家庭，提供更省心的日常餐食安排。",
        image: "/images/services/service-family-nutrition-card-4x3.jpg",
        href: "/services/family-nutrition-meals",
        badge: "可咨询",
      },
      {
        title: "长者营养餐",
        englishTitle: "Senior Nutrition Meals",
        description:
          "适合希望减少长辈烹饪压力的家庭，重视均衡、清淡和规律饮食。",
        image: "/images/services/service-senior-meals-card-4x3.jpg",
        status: "coming-soon",
        badge: "规划中",
      },
      {
        title: "术后康复餐",
        englishTitle: "Post-Surgery Recovery Meals",
        description:
          "适合术后恢复阶段的家庭咨询，帮助安排更规律的营养餐支持。",
        image: "/images/services/service-post-surgery-meals-card-4x3.jpg",
        status: "coming-soon",
        badge: "规划中",
      },
    ],
  },
  {
    eyebrow: "Premium & Group Service",
    title: "高端与团体服务",
    description: "为有个性化需求的家庭、机构、月子中心与团体客户提供更灵活的餐食支持。",
    items: [
      {
        title: "高端定制方案",
        englishTitle: "Premium Custom Plan",
        description:
          "根据家庭预算、饮食偏好、恢复阶段和配送需求，协助规划更合适的营养餐方案。",
        image: "/images/services/service-premium-custom-card-4x3.jpg",
        href: "/contact",
        badge: "咨询定制",
      },
      {
        title: "团体订餐服务",
        englishTitle: "Group Meal Service",
        description:
          "适合社区团购、企业餐饮、机构合作、月子中心或活动餐食咨询。",
        image: "/images/services/service-group-catering-card-4x3.jpg",
        href: "/contact",
        badge: "团体咨询",
      },
      {
        title: "机构合作",
        englishTitle: "Institutional Partnership",
        description:
          "适合护理机构、月子中心及相关服务机构咨询长期合作或稳定供餐安排。",
        image: "/images/services/service-institutional-partnership.jpg",
        href: "/contact",
        badge: "合作咨询",
      },
    ],
  },
];
