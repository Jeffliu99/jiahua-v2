export type BlogCategory = {
  id: number;
  name: string;
  slug: string;
};

export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  categorySlug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  status: "published" | "draft";
  isFeatured: boolean;
  publishedAt: string;
};

export const blogCategories: BlogCategory[] = [
  {
    "id": 1,
    "name": "产后恢复",
    "slug": "postpartum-recovery"
  },
  {
    "id": 2,
    "name": "月子餐知识",
    "slug": "postpartum-meal"
  },
  {
    "id": 3,
    "name": "哺乳期营养",
    "slug": "breastfeeding-nutrition"
  },
  {
    "id": 4,
    "name": "GTA 本地指南",
    "slug": "gta-local-guide"
  },
  {
    "id": 5,
    "name": "宝宝护理",
    "slug": "baby-care"
  },
  {
    "id": 6,
    "name": "孕期营养",
    "slug": "pregnancy-nutrition"
  },
  {
    "id": 7,
    "name": "客户故事",
    "slug": "customer-stories"
  },
  {
    "id": 8,
    "name": "加华动态",
    "slug": "jiahua-news"
  }
];

export const blogPosts: BlogPost[] = [
  {
    "id": 1,
    "title": "加拿大坐月子吃什么？GTA 华人妈妈产后饮食指南",
    "slug": "postpartum-meals-in-canada",
    "categorySlug": "postpartum-meal",
    "excerpt": "在加拿大坐月子，既要考虑传统调理习惯，也要适应本地生活节奏。本文整理产后不同阶段的饮食重点，帮助妈妈和家人更清楚地安排月子餐。",
    "content": "### 加拿大坐月子吃什么？GTA 华人妈妈产后饮食指南\n\n在加拿大坐月子，很多家庭需要同时兼顾传统调理习惯和本地生活节奏。月子餐不是简单地大补，而是按照产后恢复阶段，逐步安排温和、均衡、容易消化且能支持体力的餐食。\n\n#### 一、这篇文章的重点\n- 第一周重视清淡易消化\n- 第二周逐步增加营养密度\n- 第三周以后增加餐食变化\n- 根据哺乳、生产方式和胃口调整\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n在加拿大坐月子，既要考虑传统调理习惯，也要适应本地生活节奏。本文整理产后不同阶段的饮食重点，帮助妈妈和家人更清楚地安排月子餐。\n",
    "coverImage": "/images/blog/postpartum-meals-in-canada.png",
    "status": "published",
    "isFeatured": true,
    "publishedAt": "2026-08-01"
  },
  {
    "id": 2,
    "title": "剖腹产后饮食安排指南：产后恢复期怎么吃更舒服？",
    "slug": "c-section-recovery-diet",
    "categorySlug": "postpartum-recovery",
    "excerpt": "剖腹产后的饮食安排需要更注重温和、清淡和易消化。了解术后不同阶段的餐食重点，有助于家庭更好地照顾妈妈。",
    "content": "### 剖腹产后饮食安排指南：产后恢复期怎么吃更舒服？\n\n剖腹产后，妈妈的身体需要时间恢复。相比顺产，剖腹产妈妈在术后初期可能更需要注意餐食的清淡、软烂和易消化。\n\n#### 一、这篇文章的重点\n- 先从温和易消化开始\n- 逐步增加蛋白质\n- 不要忽略熟蔬菜和水分\n- 参考医生或医院出院指导\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n剖腹产后的饮食安排需要更注重温和、清淡和易消化。了解术后不同阶段的餐食重点，有助于家庭更好地照顾妈妈。\n",
    "coverImage": "/images/blog/c-section-recovery-diet.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-03"
  },
  {
    "id": 3,
    "title": "哺乳期妈妈应该如何补充营养？",
    "slug": "breastfeeding-nutrition-guide",
    "categorySlug": "breastfeeding-nutrition",
    "excerpt": "哺乳期饮食不仅关系到妈妈体力恢复，也影响日常照护节奏。本文整理哺乳期营养搭配的常见原则和注意事项。",
    "content": "### 哺乳期妈妈应该如何补充营养？\n\n哺乳期妈妈每天既要恢复体力，也要照顾宝宝，因此饮食要比平时更注重规律、均衡和水分补充。\n\n#### 一、这篇文章的重点\n- 饮食多样化\n- 蛋白质稳定摄入\n- 水分要跟上\n- 准备方便加餐\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n哺乳期饮食不仅关系到妈妈体力恢复，也影响日常照护节奏。本文整理哺乳期营养搭配的常见原则和注意事项。\n",
    "coverImage": "/images/blog/breastfeeding-nutrition-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-05"
  },
  {
    "id": 4,
    "title": "GTA 月子餐如何选择？给新手家庭的实用指南",
    "slug": "gta-postpartum-meal-service-guide",
    "categorySlug": "gta-local-guide",
    "excerpt": "在 Markham、Richmond Hill、North York、Aurora 等地区选择月子餐服务时，建议重点关注菜单安排、配送范围、沟通流程和服务稳定性。",
    "content": "### GTA 月子餐如何选择？给新手家庭的实用指南\n\n在 GTA 地区选择月子餐服务，很多家庭会关注价格、菜单、配送和口碑。真正适合的月子餐，不只是菜品丰富，更要符合妈妈的恢复阶段和家庭实际需求。\n\n#### 一、这篇文章的重点\n- 先确认配送范围\n- 看菜单是否分阶段\n- 沟通是否清楚\n- 口味是否适合长期吃\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n在 Markham、Richmond Hill、North York、Aurora 等地区选择月子餐服务时，建议重点关注菜单安排、配送范围、沟通流程和服务稳定性。\n",
    "coverImage": "/images/blog/gta-postpartum-meal-service-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-07"
  },
  {
    "id": 5,
    "title": "顺产后 30 天饮食建议：从第一周到第四周怎么安排？",
    "slug": "natural-birth-30-day-diet-guide",
    "categorySlug": "postpartum-recovery",
    "excerpt": "顺产后的恢复节奏通常循序渐进。本文按 30 天分阶段整理饮食重点，帮助家庭更有方向地准备产后餐食。",
    "content": "### 顺产后 30 天饮食建议：从第一周到第四周怎么安排？\n\n顺产后的饮食安排可以按阶段进行。每一周的身体状态不同，餐食重点也可以逐步调整。\n\n#### 一、这篇文章的重点\n- 第一周清淡易消化\n- 第二周逐步增加营养\n- 第三周均衡和规律\n- 第四周接近日常但仍温和\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n顺产后的恢复节奏通常循序渐进。本文按 30 天分阶段整理饮食重点，帮助家庭更有方向地准备产后餐食。\n",
    "coverImage": "/images/blog/natural-birth-30-day-diet-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-10"
  },
  {
    "id": 6,
    "title": "月子餐提前多久预订比较合适？",
    "slug": "when-to-book-postpartum-meals",
    "categorySlug": "postpartum-meal",
    "excerpt": "很多家庭会在预产期前才开始了解月子餐。提前规划可以帮助沟通配送范围、菜单偏好和特殊需求。",
    "content": "### 月子餐提前多久预订比较合适？\n\n很多家庭会等到临近预产期才开始找月子餐，但如果能提前规划，通常会更从容。\n\n#### 一、这篇文章的重点\n- 确认配送区域\n- 了解套餐内容\n- 沟通忌口和特殊需求\n- 安排预产期前后的弹性\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n很多家庭会在预产期前才开始了解月子餐。提前规划可以帮助沟通配送范围、菜单偏好和特殊需求。\n",
    "coverImage": "/images/blog/when-to-book-postpartum-meals.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-12"
  },
  {
    "id": 7,
    "title": "Markham 月子餐配送服务怎么选？",
    "slug": "markham-postpartum-meal-delivery-guide",
    "categorySlug": "gta-local-guide",
    "excerpt": "Markham 华人家庭较多，月子餐需求也更集中。本文整理选择本地月子餐服务时可以关注的几个重点。",
    "content": "### Markham 月子餐配送服务怎么选？\n\nMarkham 有很多华人家庭，对月子餐的需求也比较集中。选择配送服务时，建议关注餐食质量，也要关注配送稳定性和沟通效率。\n\n#### 一、这篇文章的重点\n- 确认配送区域和时间\n- 菜单是否适合连续吃\n- 是否可以备注忌口\n- 服务是否稳定\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\nMarkham 华人家庭较多，月子餐需求也更集中。本文整理选择本地月子餐服务时可以关注的几个重点。\n",
    "coverImage": "/images/blog/markham-postpartum-meal-delivery-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-15"
  },
  {
    "id": 8,
    "title": "月子餐第二周怎么吃？产后第二周饮食安排指南",
    "slug": "postpartum-meal-week-2-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "产后第二周，妈妈的身体开始逐步恢复，饮食可以在第一周清淡易消化的基础上，慢慢增加营养密度。本文整理产后第二周月子餐的安排重点。",
    "content": "### 月子餐第二周怎么吃？产后第二周饮食安排指南\n\n产后第二周，很多妈妈已经慢慢度过最初几天的不适应，身体开始进入更稳定的恢复阶段。\n\n#### 一、这篇文章的重点\n- 继续保持温和清淡\n- 适度增加蛋白质\n- 增加营养密度\n- 保持水分\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后第二周，妈妈的身体开始逐步恢复，饮食可以在第一周清淡易消化的基础上，慢慢增加营养密度。本文整理产后第二周月子餐的安排重点。\n",
    "coverImage": "/images/blog/postpartum-meal-week-2.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-18"
  },
  {
    "id": 9,
    "title": "月子餐第三周怎么吃？产后第三周饮食安排指南",
    "slug": "postpartum-meal-week-3-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "产后第三周，妈妈的身体恢复进入更稳定阶段，饮食可以在前两周温和调理的基础上，进一步增加营养均衡和体力支持。",
    "content": "### 月子餐第三周怎么吃？产后第三周饮食安排指南\n\n产后第三周，很多妈妈已经比前两周更适应产后生活。这个阶段的月子餐可以进一步强调营养均衡、体力支持和饮食多样化。\n\n#### 一、这篇文章的重点\n- 继续保持温和\n- 增加营养密度\n- 支持日常体力\n- 仍然不要过度油腻\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后第三周，妈妈的身体恢复进入更稳定阶段，饮食可以在前两周温和调理的基础上，进一步增加营养均衡和体力支持。\n",
    "coverImage": "/images/blog/postpartum-meal-week-3.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-08-20"
  },
  {
    "id": 10,
    "title": "月子餐第四周怎么吃？产后第四周饮食安排指南",
    "slug": "postpartum-meal-week-4-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "产后第四周，妈妈的饮食可以逐渐接近日常，但仍建议保持温和、均衡和规律。",
    "content": "### 月子餐第四周怎么吃？产后第四周饮食安排指南\n\n第四周可以逐步从严格月子餐转向更接近日常的饮食节奏。重点不是突然放开，而是在前几周恢复基础上，让餐食更加多样、均衡和可持续。\n\n#### 一、这篇文章的重点\n- 继续保持温和饮食\n- 增加主食、蛋白质和熟蔬菜的变化\n- 避免突然吃得过油或过辣\n- 根据妈妈体力和胃口调整分量\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后第四周，妈妈的饮食可以逐渐接近日常，但仍建议保持温和、均衡和规律。\n",
    "coverImage": "/images/blog/postpartum-meal-week-4.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-01"
  },
  {
    "id": 11,
    "title": "产后第一周汤品怎么安排？",
    "slug": "postpartum-week-1-soup-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "产后第一周汤品不宜过油，建议以清淡、温和、容易入口为主。",
    "content": "### 产后第一周汤品怎么安排？\n\n很多家庭会在第一周准备大量汤品，但刚生产后的妈妈未必适合马上喝很油的浓汤。第一周汤品更适合清淡、温和、易消化。\n\n#### 一、这篇文章的重点\n- 鸡汤可以撇油\n- 鱼汤适合清淡炖煮\n- 瘦肉汤可搭配蔬菜\n- 汤品不是越浓越好\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后第一周汤品不宜过油，建议以清淡、温和、容易入口为主。\n",
    "coverImage": "/images/blog/postpartum-week-1-soup-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-02"
  },
  {
    "id": 12,
    "title": "产后坐月子可以吃蔬菜吗？",
    "slug": "postpartum-vegetables-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "产后饮食不应该只吃肉和汤，熟蔬菜也是月子餐中重要的一部分。",
    "content": "### 产后坐月子可以吃蔬菜吗？\n\n很多传统观念会减少蔬菜摄入，但产后饮食需要均衡。蔬菜可以煮熟、炖软或清炒，避免生冷吃法。\n\n#### 一、这篇文章的重点\n- 选择熟蔬菜\n- 避免过生冷\n- 搭配主食和蛋白质\n- 根据妈妈肠胃反应调整\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后饮食不应该只吃肉和汤，熟蔬菜也是月子餐中重要的一部分。\n",
    "coverImage": "/images/blog/postpartum-vegetables-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-03"
  },
  {
    "id": 13,
    "title": "月子餐如何做到不油腻又有营养？",
    "slug": "postpartum-meal-less-oily-guide",
    "categorySlug": "postpartum-meal",
    "excerpt": "月子餐不一定要油腻，清爽的烹调方式也可以兼顾营养和恢复。",
    "content": "### 月子餐如何做到不油腻又有营养？\n\n很多妈妈产后胃口不稳定，过油的餐食反而会影响食欲。通过食材选择和烹调方式调整，可以让月子餐更舒服。\n\n#### 一、这篇文章的重点\n- 汤品撇油\n- 多用蒸炖煮\n- 选择瘦肉和鱼肉\n- 用熟蔬菜增加平衡\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n月子餐不一定要油腻，清爽的烹调方式也可以兼顾营养和恢复。\n",
    "coverImage": "/images/blog/postpartum-meal-less-oily-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-04"
  },
  {
    "id": 14,
    "title": "产后便秘怎么办？饮食上可以注意什么？",
    "slug": "postpartum-constipation-diet-tips",
    "categorySlug": "postpartum-recovery",
    "excerpt": "产后便秘较常见，饮食上可以从水分、熟蔬菜、主食和规律餐食入手。",
    "content": "### 产后便秘怎么办？饮食上可以注意什么？\n\n产后作息变化、活动减少和饮食结构变化，都可能让妈妈觉得排便不顺。饮食安排可以先从温和调整开始。\n\n#### 一、这篇文章的重点\n- 保持水分\n- 安排熟蔬菜\n- 选择燕麦、小米、全谷类主食\n- 不要长期只吃肉和汤\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后便秘较常见，饮食上可以从水分、熟蔬菜、主食和规律餐食入手。\n",
    "coverImage": "/images/blog/postpartum-constipation-diet-tips.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-05"
  },
  {
    "id": 15,
    "title": "产后胃口不好怎么安排月子餐？",
    "slug": "postpartum-low-appetite-meal-guide",
    "categorySlug": "postpartum-recovery",
    "excerpt": "产后胃口不好时，不建议勉强大补，可以先用少量多餐帮助恢复食欲。",
    "content": "### 产后胃口不好怎么安排月子餐？\n\n有些妈妈产后几天胃口较弱，这时候餐食应该更温和、更容易入口。少量多餐比硬吃大份量更实际。\n\n#### 一、这篇文章的重点\n- 从粥、汤面、蒸蛋开始\n- 口味保持清淡\n- 加餐小份多次\n- 按妈妈反馈调整菜单\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n产后胃口不好时，不建议勉强大补，可以先用少量多餐帮助恢复食欲。\n",
    "coverImage": "/images/blog/postpartum-low-appetite-meal-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-06"
  },
  {
    "id": 16,
    "title": "剖腹产后第二周怎么吃？",
    "slug": "c-section-week-2-diet-guide",
    "categorySlug": "postpartum-recovery",
    "excerpt": "剖腹产后第二周可以逐步增加营养，但仍应注意清淡和易消化。",
    "content": "### 剖腹产后第二周怎么吃？\n\n剖腹产妈妈第二周还在恢复阶段，饮食可以增加蛋白质和营养密度，但不要太油腻或太重口味。\n\n#### 一、这篇文章的重点\n- 继续选择软烂食物\n- 逐步增加蛋白质\n- 汤品保持清爽\n- 遵循医生或出院指导\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n剖腹产后第二周可以逐步增加营养，但仍应注意清淡和易消化。\n",
    "coverImage": "/images/blog/c-section-week-2-diet-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-07"
  },
  {
    "id": 17,
    "title": "哺乳期夜间加餐吃什么比较方便？",
    "slug": "breastfeeding-night-snack-guide",
    "categorySlug": "breastfeeding-nutrition",
    "excerpt": "夜间哺乳容易消耗体力，准备简单温和的加餐可以让妈妈更舒服。",
    "content": "### 哺乳期夜间加餐吃什么比较方便？\n\n夜间喂养时，妈妈可能会感到饿或口渴。提前准备容易入口的小份加餐，可以减少临时忙乱。\n\n#### 一、这篇文章的重点\n- 小米粥\n- 燕麦粥\n- 鸡蛋\n- 全麦面包\n- 水果或酸奶\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n夜间哺乳容易消耗体力，准备简单温和的加餐可以让妈妈更舒服。\n",
    "coverImage": "/images/blog/breastfeeding-night-snack-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-08"
  },
  {
    "id": 18,
    "title": "哺乳期可以喝汤吗？怎么喝更合适？",
    "slug": "breastfeeding-soup-guide",
    "categorySlug": "breastfeeding-nutrition",
    "excerpt": "哺乳期可以安排汤品，但重点是清淡、规律和妈妈喝得舒服。",
    "content": "### 哺乳期可以喝汤吗？怎么喝更合适？\n\n汤品可以作为水分和餐食的一部分，但不需要过分油腻。适合长期喝的汤通常更清爽、更温和。\n\n#### 一、这篇文章的重点\n- 清淡汤品更适合日常\n- 不必追求浓油厚汤\n- 搭配主食和蛋白质\n- 根据口味轮换\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n哺乳期可以安排汤品，但重点是清淡、规律和妈妈喝得舒服。\n",
    "coverImage": "/images/blog/breastfeeding-soup-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-09"
  },
  {
    "id": 19,
    "title": "孕晚期什么时候开始准备月子餐？",
    "slug": "third-trimester-postpartum-meal-prep",
    "categorySlug": "pregnancy-nutrition",
    "excerpt": "进入孕晚期后，家庭可以开始了解月子餐安排和配送服务。",
    "content": "### 孕晚期什么时候开始准备月子餐？\n\n孕晚期准备月子餐，不是要马上决定所有细节，而是先了解配送区域、套餐内容和家庭需求。\n\n#### 一、这篇文章的重点\n- 确认预产期\n- 了解配送区域\n- 沟通忌口\n- 提前保存联系方式\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n进入孕晚期后，家庭可以开始了解月子餐安排和配送服务。\n",
    "coverImage": "/images/blog/third-trimester-postpartum-meal-prep.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-10"
  },
  {
    "id": 20,
    "title": "预产期前月子餐沟通清单",
    "slug": "postpartum-meal-booking-checklist",
    "categorySlug": "pregnancy-nutrition",
    "excerpt": "预订月子餐前准备好关键信息，可以让沟通更清楚。",
    "content": "### 预产期前月子餐沟通清单\n\n很多家庭临近生产才开始沟通月子餐，如果提前整理信息，会更节省时间。\n\n#### 一、这篇文章的重点\n- 预产期\n- 地址\n- 生产方式预估\n- 忌口和过敏\n- 配送时间偏好\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n预订月子餐前准备好关键信息，可以让沟通更清楚。\n",
    "coverImage": "/images/blog/postpartum-meal-booking-checklist.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-11"
  },
  {
    "id": 21,
    "title": "新生儿回家第一周，家人要准备什么？",
    "slug": "newborn-first-week-home-guide",
    "categorySlug": "baby-care",
    "excerpt": "宝宝回家第一周，家庭最需要的是稳定节奏和减少临时压力。",
    "content": "### 新生儿回家第一周，家人要准备什么？\n\n新生儿回家后，喂养、睡眠、换尿布和妈妈恢复都需要适应。家人可以提前准备基础用品和餐食安排。\n\n#### 一、这篇文章的重点\n- 准备常用宝宝用品\n- 安排妈妈热餐\n- 减少访客打扰\n- 记录宝宝喂养和睡眠\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n宝宝回家第一周，家庭最需要的是稳定节奏和减少临时压力。\n",
    "coverImage": "/images/blog/newborn-first-week-home-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-12"
  },
  {
    "id": 22,
    "title": "宝宝满月前家庭照护节奏怎么安排？",
    "slug": "baby-first-month-family-routine",
    "categorySlug": "baby-care",
    "excerpt": "满月前家庭照护重点是建立简单、可执行的日常节奏。",
    "content": "### 宝宝满月前家庭照护节奏怎么安排？\n\n宝宝满月前，家庭不需要追求完美作息，而是建立基本的照护分工和饮食休息节奏。\n\n#### 一、这篇文章的重点\n- 谁负责餐食\n- 谁负责采购\n- 谁负责夜间协助\n- 妈妈什么时候休息\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n满月前家庭照护重点是建立简单、可执行的日常节奏。\n",
    "coverImage": "/images/blog/baby-first-month-family-routine.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-13"
  },
  {
    "id": 23,
    "title": "Richmond Hill 月子餐配送怎么选？",
    "slug": "richmond-hill-postpartum-meal-guide",
    "categorySlug": "gta-local-guide",
    "excerpt": "Richmond Hill 家庭选择月子餐时，可以关注配送范围、菜单阶段和沟通效率。",
    "content": "### Richmond Hill 月子餐配送怎么选？\n\nRichmond Hill 华人家庭较多，月子餐需求也比较集中。选择服务时，建议从配送稳定性和菜单是否适合长期食用开始。\n\n#### 一、这篇文章的重点\n- 确认是否覆盖地址\n- 了解配送时间\n- 看菜单是否分阶段\n- 确认忌口沟通方式\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\nRichmond Hill 家庭选择月子餐时，可以关注配送范围、菜单阶段和沟通效率。\n",
    "coverImage": "/images/blog/richmond-hill-postpartum-meal-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-14"
  },
  {
    "id": 24,
    "title": "North York 月子餐配送服务怎么选？",
    "slug": "north-york-postpartum-meal-guide",
    "categorySlug": "gta-local-guide",
    "excerpt": "North York 家庭选择月子餐时，建议提前确认配送区域和餐食安排。",
    "content": "### North York 月子餐配送服务怎么选？\n\nNorth York 区域较大，不同位置配送安排可能不同。提前确认服务范围可以减少产后临时沟通。\n\n#### 一、这篇文章的重点\n- 核对地址\n- 确认配送频率\n- 询问套餐内容\n- 了解调整规则\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\nNorth York 家庭选择月子餐时，建议提前确认配送区域和餐食安排。\n",
    "coverImage": "/images/blog/north-york-postpartum-meal-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-15"
  },
  {
    "id": 25,
    "title": "Aurora 月子餐配送服务适合哪些家庭？",
    "slug": "aurora-postpartum-meal-guide",
    "categorySlug": "gta-local-guide",
    "excerpt": "Aurora 家庭如果没有长辈长期帮忙，月子餐配送可以减少产后做饭压力。",
    "content": "### Aurora 月子餐配送服务适合哪些家庭？\n\nAurora 居住环境相对分散，家庭选择月子餐时更要提前确认配送安排和沟通流程。\n\n#### 一、这篇文章的重点\n- 提前确认配送\n- 了解加热方式\n- 安排备用餐食\n- 沟通特殊饮食需求\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\nAurora 家庭如果没有长辈长期帮忙，月子餐配送可以减少产后做饭压力。\n",
    "coverImage": "/images/blog/aurora-postpartum-meal-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-16"
  },
  {
    "id": 26,
    "title": "加华月子餐如何安排分阶段菜单？",
    "slug": "jiahua-staged-menu-guide",
    "categorySlug": "jiahua-news",
    "excerpt": "加华月子餐会按产后阶段设计餐食重点，帮助妈妈循序渐进恢复。",
    "content": "### 加华月子餐如何安排分阶段菜单？\n\n分阶段菜单的意义，是让第一周、第二周、第三周和第四周有不同饮食重点，而不是每天重复同样的餐食。\n\n#### 一、这篇文章的重点\n- 第一周清淡易消化\n- 第二周逐步增加营养\n- 第三周均衡支持\n- 第四周接近日常\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n加华月子餐会按产后阶段设计餐食重点，帮助妈妈循序渐进恢复。\n",
    "coverImage": "/images/blog/jiahua-staged-menu-guide.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-17"
  },
  {
    "id": 27,
    "title": "客户故事：提前准备月子餐让产后生活更从容",
    "slug": "customer-story-prepared-postpartum-meals",
    "categorySlug": "customer-stories",
    "excerpt": "一个家庭提前安排月子餐后，产后第一周减少了许多临时压力。",
    "content": "### 客户故事：提前准备月子餐让产后生活更从容\n\n很多家庭在宝宝出生后才发现，每天准备热餐比想象中更困难。提前安排月子餐，可以让家人把更多精力放在妈妈和宝宝身上。\n\n#### 一、这篇文章的重点\n- 提前确认套餐\n- 家人分工更清楚\n- 妈妈每天有稳定热餐\n- 产后沟通压力更小\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n一个家庭提前安排月子餐后，产后第一周减少了许多临时压力。\n",
    "coverImage": "/images/blog/customer-story-prepared-postpartum-meals.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-18"
  },
  {
    "id": 28,
    "title": "客户故事：第一次坐月子，最需要的不是复杂菜单",
    "slug": "customer-story-simple-postpartum-meals",
    "categorySlug": "customer-stories",
    "excerpt": "第一次坐月子的家庭往往会焦虑很多细节，其实最重要的是稳定、温和和可持续。",
    "content": "### 客户故事：第一次坐月子，最需要的不是复杂菜单\n\n月子餐不是越复杂越好。对新手家庭来说，清楚的阶段安排和稳定配送往往更有帮助。\n\n#### 一、这篇文章的重点\n- 菜单不用过度复杂\n- 口味要适合长期吃\n- 配送要稳定\n- 沟通要清楚\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n第一次坐月子的家庭往往会焦虑很多细节，其实最重要的是稳定、温和和可持续。\n",
    "coverImage": "/images/blog/customer-story-simple-postpartum-meals.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-19"
  },
  {
    "id": 29,
    "title": "月子餐和普通外卖有什么不同？",
    "slug": "postpartum-meal-vs-takeout",
    "categorySlug": "postpartum-meal",
    "excerpt": "月子餐和普通外卖的区别，在于阶段安排、口味温和和产后恢复需求。",
    "content": "### 月子餐和普通外卖有什么不同？\n\n普通外卖更强调方便和口味，月子餐更需要考虑妈妈产后的身体状态、阶段饮食和连续食用体验。\n\n#### 一、这篇文章的重点\n- 更重视阶段\n- 口味更温和\n- 不追求重油重盐\n- 更适合连续安排\n\n#### 二、家庭实际安排建议\n\n每个家庭的产后照护条件不同，月子餐安排也不需要完全一样。建议先从妈妈当下的胃口、生产方式、哺乳情况和家人照护能力出发，选择更容易坚持的餐食节奏。\n\n#### 三、加华月子餐的建议\n\n加华月子餐建议 GTA 华人家庭提前沟通配送区域、餐食偏好、忌口和预产期安排。产后餐食应温和、规律、清楚分阶段，并根据妈妈真实反馈做调整。\n\n#### 四、总结\n\n月子餐和普通外卖的区别，在于阶段安排、口味温和和产后恢复需求。\n",
    "coverImage": "/images/blog/postpartum-meal-vs-takeout.png",
    "status": "published",
    "isFeatured": false,
    "publishedAt": "2026-09-20"
  }
];

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug) ?? null;
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug && post.status === "published") ?? null;
}

export function getPublishedPosts() {
  return [...blogPosts]
    .filter((post) => post.status === "published")
    .sort((a, b) => {
      if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}
