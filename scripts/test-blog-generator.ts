import { generateBlogDraftFromKeyword } from "@/lib/ai/blog-generator";

async function main() {
  const result = await generateBlogDraftFromKeyword({
    keyword: "加拿大坐月子吃什么",
    pillar: "recovery",
    targetSite: "jiahuameal",
  });

  console.log(result);
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

export {};