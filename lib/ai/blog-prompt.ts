export type BlogLanguage = "zh" | "en";

export type BlogContentPillar =
  | "recovery"
  | "nutrition"
  | "breastfeeding"
  | "babycare"
  | "traditions"
  | "stories";

export interface BlogPromptOptions {
  keyword: string;
  language?: BlogLanguage;
  pillar?: BlogContentPillar;
  targetSite?: "jiahuameal" | "yuezicanada" | "both";
}

function getChinesePillarGuidance(pillar?: BlogContentPillar) {
  switch (pillar) {
    case "recovery":
      return "重点聚焦产后身体恢复、体力恢复、恶露期饮食、剖腹产/顺产恢复和产后42天调理。";
    case "nutrition":
      return "重点聚焦月子餐营养搭配、汤品、早餐、补气血、蛋白质、铁、钙和哺乳期营养。";
    case "breastfeeding":
      return "重点聚焦哺乳期饮食、追奶、回奶食物、乳腺炎预防、夜间哺乳和妈妈体力支持。";
    case "babycare":
      return "重点聚焦新生儿睡眠、黄疸、洗澡、红屁屁、日常护理和加拿大本地育儿资源。";
    case "traditions":
      return "重点聚焦传统坐月子习俗的科学解读，避免迷信化表达，用现代营养和生活习惯进行平衡说明。";
    case "stories":
      return "重点聚焦真实客户式故事、产后恢复经历、家庭支持、月子餐体验和温和可信的服务转化。";
    default:
      return "重点聚焦产后调理、营养食谱、哺乳知识、育儿心得和传统坐月子科学解读。";
  }
}

function getEnglishPillarGuidance(pillar?: BlogContentPillar) {
  switch (pillar) {
    case "recovery":
      return "Focus on postpartum recovery, physical healing, vaginal birth/C-section recovery, lochia period diet, and the first 42 days after birth.";
    case "nutrition":
      return "Focus on confinement meal nutrition, soups, breakfast ideas, iron-rich foods, protein, calcium, and breastfeeding nutrition.";
    case "breastfeeding":
      return "Focus on breastfeeding diet, milk supply support, foods that may affect lactation, mastitis prevention, and nighttime feeding support.";
    case "babycare":
      return "Focus on newborn sleep, jaundice care, bathing, diaper rash, daily care, and Canadian parenting resources.";
    case "traditions":
      return "Focus on evidence-informed explanations of traditional postpartum practices, balancing cultural wisdom with modern nutrition and daily care.";
    case "stories":
      return "Focus on customer-style recovery stories, family support, postpartum meal experiences, and gentle service conversion.";
    default:
      return "Focus on postpartum recovery, nutrition, breastfeeding, newborn care, cultural practices, and practical parenting insights.";
  }
}

function getChineseSiteGuidance(targetSite?: BlogPromptOptions["targetSite"]) {
  if (targetSite === "jiahuameal") {
    return "文章应自然引导读者了解加华月子餐服务，但不要过度销售。";
  }

  if (targetSite === "yuezicanada") {
    return "文章应更偏知识型和指南型，适合作为加拿大月子知识门户内容，结尾可轻度导流到加华月子餐。";
  }

  return "文章需适合 jiahuameal.com 和 yuezicanada.com 两个网站共用，兼顾专业知识和服务转化。";
}

function getEnglishSiteGuidance(targetSite?: BlogPromptOptions["targetSite"]) {
  if (targetSite === "jiahuameal") {
    return "The article should naturally introduce Jiahua postpartum meal services without sounding overly promotional.";
  }

  if (targetSite === "yuezicanada") {
    return "The article should be educational and guide-oriented for a Canadian postpartum knowledge website, with a light CTA to Jiahua Meal when appropriate.";
  }

  return "The article should work for both jiahuameal.com and yuezicanada.com, balancing educational value and gentle service conversion.";
}

export function buildBlogPrompt({
  keyword,
  language = "zh",
  pillar,
  targetSite = "both",
}: BlogPromptOptions) {
  if (language === "en") {
    return `
You are a professional postpartum nutrition expert, newborn care educator, and SEO content writer for Canadian families.

Topic keyword:
${keyword}

Content direction:
${getEnglishPillarGuidance(pillar)}

Website direction:
${getEnglishSiteGuidance(targetSite)}

Target audience:
Chinese families living in Canada, especially expecting parents, new mothers, and family caregivers.

Writing requirements:
- Write in clear, natural English.
- Length: 1500-2200 words.
- Use an SEO-friendly structure with H1, H2, and H3 headings.
- Provide practical, evidence-informed suggestions.
- Mention Canadian context where relevant.
- Avoid medical diagnosis, exaggerated claims, or absolute promises.
- If discussing health or recovery issues, recommend consulting a qualified healthcare professional when appropriate.
- Include a FAQ section with 4-6 questions.
- Include a gentle CTA section at the end.
- Make the tone professional, warm, and trustworthy.

Return ONLY valid JSON. Do not wrap the JSON in markdown.

JSON format:
{
  "title": "",
  "slug": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "keywords": []
}

Field requirements:
- title: natural article title.
- slug: lowercase English slug using hyphens only.
- excerpt: 120-180 characters.
- content: full article body in HTML string. Use <h1>, <h2>, <h3>, <p>, <ul>, <li>.
- seoTitle: under 60 characters when possible.
- seoDescription: 140-160 characters when possible.
- keywords: 6-10 SEO keywords.
`;
  }

  return `
你是一位专业的加拿大产后营养顾问、月子餐专家、新生儿护理内容编辑和 SEO 文章作者。

主题关键词：
${keyword}

内容方向：
${getChinesePillarGuidance(pillar)}

网站方向：
${getChineseSiteGuidance(targetSite)}

目标读者：
生活在加拿大的华人准妈妈、新妈妈、伴侣和家人。

写作要求：
- 使用自然、专业、清晰的中文。
- 文章长度 1800-2500 字。
- 使用符合 SEO 的 H1、H2、H3 结构。
- 内容要实用，能帮助准妈妈和新妈妈解决真实问题。
- 结合加拿大华人家庭的生活场景，例如 GTA、多伦多、产后恢复、家庭照护和本地资源。
- 可以进行传统坐月子习俗的科学解读，但不要迷信化、绝对化。
- 避免医疗诊断、夸大疗效或保证性表达。
- 涉及健康风险、严重症状、用药、乳腺炎、产后情绪等内容时，提醒读者咨询医生、助产士、营养师或合格医疗专业人士。
- 包含 FAQ，建议 4-6 个常见问题。
- 结尾加入自然 CTA，引导读者了解加华月子餐或继续阅读相关内容。
- 语气要温和、可信、专业，避免硬广。

只返回合法 JSON。不要使用 Markdown 代码块包裹。

JSON 格式：
{
  "title": "",
  "slug": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "keywords": []
}

字段要求：
- title：自然、适合中文读者点击的文章标题。
- slug：英文小写 slug，只使用字母、数字和连字符。
- excerpt：120-180 个中文字符，用于 Blog 列表页摘要。
- content：完整文章正文，使用 HTML 字符串，包含 <h1>、<h2>、<h3>、<p>、<ul>、<li>。
- seoTitle：尽量控制在 30 个中文字符以内。
- seoDescription：尽量控制在 80 个中文字符以内。
- keywords：6-10 个 SEO 关键词。
`;
}
