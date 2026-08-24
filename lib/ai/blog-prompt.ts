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

function getSiteInstruction(
  targetSite: NonNullable<BlogPromptOptions["targetSite"]>,
  language: BlogLanguage
) {
  if (language === "en") {
    if (targetSite === "jiahuameal") {
      return "Use a practical service-oriented angle and end with a gentle invitation to learn about JiahuaMeal postpartum meal services.";
    }

    if (targetSite === "yuezicanada") {
      return "Use an educational guide-oriented angle for a Canadian postpartum knowledge website. Keep promotion minimal.";
    }

    return "Balance educational value with a gentle, non-promotional reference to JiahuaMeal where relevant.";
  }

  if (targetSite === "jiahuameal") {
    return "内容以实用和服务转化为导向，结尾自然引导读者了解加华月子餐，避免硬广。";
  }

  if (targetSite === "yuezicanada") {
    return "内容以加拿大坐月子知识指南为主，保持中立、实用，减少销售表达。";
  }

  return "内容兼顾知识价值与服务转化，只在相关位置自然提及加华月子餐。";
}

function getPillarInstruction(
  pillar: BlogContentPillar | undefined,
  language: BlogLanguage
) {
  const instructions = {
    zh: {
      recovery: "重点讲产后恢复、体力支持、顺产或剖腹产后的日常调理。",
      nutrition: "重点讲均衡营养、月子餐搭配、加拿大常见食材和实用食谱建议。",
      breastfeeding: "重点讲哺乳期营养与日常支持，避免把食物描述成保证增奶的治疗方法。",
      babycare: "重点讲新生儿日常护理和加拿大本地生活场景。",
      traditions: "重点对传统坐月子习俗作科学、平衡的解读，避免迷信和绝对化表达。",
      stories: "重点采用真实、自然的案例式叙事，但不得虚构客户身份、评价或治疗结果。",
      general: "围绕产后调理、营养、哺乳或新生儿护理提供实用信息。",
    },
    en: {
      recovery: "Focus on postpartum recovery, daily care, and practical support after vaginal birth or C-section.",
      nutrition: "Focus on balanced nutrition, postpartum meals, familiar Canadian ingredients, and practical food ideas.",
      breastfeeding: "Focus on breastfeeding nutrition and daily support without promising that foods will medically increase milk supply.",
      babycare: "Focus on practical newborn care in a Canadian home setting.",
      traditions: "Explain traditional postpartum practices in a balanced, evidence-informed way without absolute claims.",
      stories: "Use a natural case-study style, but do not invent customer identities, testimonials, or medical outcomes.",
      general: "Provide practical information about postpartum recovery, nutrition, breastfeeding, or newborn care.",
    },
  } as const;

  return instructions[language][pillar ?? "general"];
}

export function buildBlogPrompt({
  keyword,
  language = "zh",
  pillar,
  targetSite = "both",
}: BlogPromptOptions) {
  if (language === "en") {
    return `You are an experienced Canadian postpartum content editor.

Write an original, practical article about: ${keyword}
Content direction: ${getPillarInstruction(pillar, "en")}
Website direction: ${getSiteInstruction(targetSite, "en")}

Return ONLY one valid JSON object with exactly these fields:
{
  "title": "",
  "slug": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "keywords": []
}

Requirements:
- Target length: 700-1000 English words.
- Audience: families in Canada preparing for or experiencing the postpartum period.
- Tone: clear, warm, practical, and trustworthy.
- Avoid diagnosis, guaranteed outcomes, exaggerated health claims, and absolute medical advice.
- When health risks or persistent symptoms are discussed, advise consulting a qualified healthcare professional.
- content must be semantic HTML, not Markdown.
- Use only <h2>, <h3>, <p>, <ul>, <li>, and <strong> inside content.
- Use 5-7 concise <h2> sections.
- Each paragraph must be wrapped in its own <p> tag and contain no more than 2-3 sentences.
- Include one practical list, a short FAQ with 3 questions, a conclusion, and a gentle CTA.
- slug must be lowercase English with hyphens.
- excerpt should be concise.
- keywords must contain 5-8 relevant phrases.
- Do not place an <h1> inside content because the page already displays the article title.
- Escape the HTML correctly as a JSON string.
- Do not add commentary or code fences outside the JSON object.`;
  }

  return `你是一位熟悉加拿大生活场景的产后内容编辑。

请围绕以下主题撰写原创实用文章：${keyword}
内容方向：${getPillarInstruction(pillar, "zh")}
网站方向：${getSiteInstruction(targetSite, "zh")}

只返回一个合法 JSON 对象，字段必须完整且仅包含：
{
  "title": "",
  "slug": "",
  "excerpt": "",
  "content": "",
  "seoTitle": "",
  "seoDescription": "",
  "keywords": []
}

要求：
- 正文控制在 700-1000 个中文字符左右，不要超过 1000 字。
- 读者为生活在加拿大的准妈妈、新妈妈及家人。
- 语气清晰、温和、实用、可信，不写成学术论文。
- 不作医疗诊断，不保证疗效，不使用夸大或绝对化健康表述。
- 涉及持续症状、严重不适或健康风险时，提醒咨询医生、助产士、营养师或其他合格专业人士。
- content 必须是标准 HTML，不得使用 Markdown。
- content 只使用 <h2>、<h3>、<p>、<ul>、<li>、<strong>。
- 正文安排 5-7 个简洁的 <h2> 章节。
- 每个自然段必须独立放在 <p> 标签中，每段最多 2-3 句话。
- 至少包含一个实用列表。
- FAQ 只写 3 个常见问题，每个问题使用 <h3>，回答使用 <p>。
- 包含简短总结和自然 CTA。
- 页面会单独显示文章标题，因此 content 内不要加入 <h1>。
- slug 使用小写英文和连字符。
- excerpt 保持简洁。
- keywords 返回 5-8 个相关关键词。
- HTML 必须正确转义为 JSON 字符串。
- JSON 外不得添加解释、Markdown 代码块或其它文字。`;
}
