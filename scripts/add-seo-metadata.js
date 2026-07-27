// add-seo-metadata.js
// Usage: node scripts/add-seo-metadata.js
// Purpose: Automatically insert SEO metadata into Next.js App Router page.tsx files.

const fs = require("fs");
const path = require("path");

const pages = [
  {
    file: "app/page.tsx",
    title: "加华月子餐｜GTA专业产后营养支持与月子餐服务",
    description:
      "加华月子餐为大多伦多地区华人家庭提供专业产后营养支持、阶段化月子餐方案与贴心配送服务，陪伴妈妈安心度过产后恢复期。",
  },
  {
    file: "app/services/page.tsx",
    title: "服务方案｜加华月子餐｜30天月子餐与产后恢复营养支持",
    description:
      "了解加华月子餐的服务方案，包括30天月子餐、剖腹产恢复方案、哺乳期营养方案与高端定制产后营养服务，适合不同恢复阶段的妈妈。",
  },
  {
    file: "app/nutrition/page.tsx",
    title: "营养理念｜加华月子餐｜科学产后恢复与阶段化营养规划",
    description:
      "加华月子餐融合传统产后调理智慧与现代营养科学，根据产后不同恢复阶段制定营养重点，帮助妈妈更安心、更科学地恢复身体。",
  },
  {
    file: "app/stories/page.tsx",
    title: "妈妈故事｜加华月子餐｜来自GTA家庭的产后恢复体验",
    description:
      "阅读来自Markham、Richmond Hill、North York、Aurora等GTA家庭的月子餐体验，了解加华月子餐如何陪伴妈妈完成产后恢复旅程。",
  },
  {
    file: "app/about/page.tsx",
    title: "关于加华｜加华月子餐｜加拿大华人家庭的产后营养服务",
    description:
      "了解加华月子餐的品牌故事、服务理念、GTA配送范围与联系方式。我们为加拿大华人家庭提供专业、安心、贴心的产后营养支持。",
  },
];

function buildMetadata(title, description) {
  return `import type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: ${JSON.stringify(title)},\n  description: ${JSON.stringify(description)},\n};\n\n`;
}

function insertMetadata(page) {
  const filePath = path.join(process.cwd(), page.file);

  if (!fs.existsSync(filePath)) {
    console.warn(`SKIP: ${page.file} does not exist.`);
    return;
  }

  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("export const metadata")) {
    console.log(`SKIP: ${page.file} already has metadata.`);
    return;
  }

  if (content.includes('"use client"') || content.includes("'use client'")) {
    console.warn(`WARNING: ${page.file} is a client component. Metadata only works in server components.`);
    return;
  }

  const metadataBlock = buildMetadata(page.title, page.description);

  // If the file already imports Metadata, don't duplicate the import.
  if (content.includes('import type { Metadata } from "next";')) {
    content = content.replace(
      'import type { Metadata } from "next";\n',
      `import type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: ${JSON.stringify(page.title)},\n  description: ${JSON.stringify(page.description)},\n};\n\n`
    );
  } else {
    content = metadataBlock + content;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`UPDATED: ${page.file}`);
}

pages.forEach(insertMetadata);

console.log("SEO metadata update complete.");
