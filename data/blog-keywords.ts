export const BLOG_KEYWORDS = {
  recovery: [
    "加拿大坐月子吃什么",
    "剖腹产恢复饮食",
    "顺产后恢复指南",
    "产后恶露期间吃什么",
    "产后42天恢复计划",
  ],

  nutrition: [
    "产后补气血食谱",
    "花胶鸡汤功效",
    "月子餐早餐推荐",
    "催乳汤推荐",
    "哺乳期补钙食谱",
  ],

  breastfeeding: [
    "母乳不足怎么办",
    "如何科学追奶",
    "哪些食物容易回奶",
    "夜间哺乳技巧",
    "乳腺炎预防措施",
  ],

  babycare: [
    "新生儿睡眠规律",
    "宝宝黄疸护理",
    "新生儿洗澡注意事项",
    "宝宝红屁屁怎么办",
    "婴儿护理技巧",
  ],

  traditions: [
    "坐月子不能洗头是真的吗",
    "坐月子不能吹风是真的吗",
    "红糖真的适合天天喝吗",
    "传统坐月子科学解读",
    "现代营养学如何看待坐月子",
  ],

  stories: [
    "多伦多妈妈产后恢复故事",
    "剖腹产妈妈真实经历",
    "双胞胎妈妈坐月子经验",
    "客户月子餐体验分享",
    "高龄产妇恢复案例",
  ],
} as const;

export const BLOG_CATEGORIES = Object.keys(
  BLOG_KEYWORDS
);

export function getAllBlogKeywords() {
  return Object.values(BLOG_KEYWORDS).flat();
}
