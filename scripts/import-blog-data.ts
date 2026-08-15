import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function main() {
  const { prisma } = await import("../lib/prisma");
  const { blogCategories, blogPosts } = await import("../lib/blog-data");

  function normalizeDate(value: string) {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? new Date() : date;
  }

  console.log("Importing Chinese blog categories...");

  for (const category of blogCategories) {
    await prisma.blogCategory.upsert({
      where: { slug: category.slug },
      update: { name: category.name },
      create: {
        name: category.name,
        slug: category.slug,
      },
    });
  }

  const categories = await prisma.blogCategory.findMany();
  const categoryBySlug = new Map(
    categories.map((category) => [category.slug, category])
  );

  console.log("Importing Chinese blog posts...");

  for (const post of blogPosts) {
    const category = categoryBySlug.get(post.categorySlug);
    const publishedAt = normalizeDate(post.publishedAt);

    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt || null,
        content: post.content,
        coverImage: post.coverImage || null,
        status: post.status,
        isFeatured: post.isFeatured,
        site: "both",
        seoTitle: post.title,
        seoDescription: post.excerpt || null,
        seoKeywords: null,
        publishedAt,
        categoryId: category?.id ?? null,
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || null,
        content: post.content,
        coverImage: post.coverImage || null,
        status: post.status,
        isFeatured: post.isFeatured,
        site: "both",
        seoTitle: post.title,
        seoDescription: post.excerpt || null,
        seoKeywords: null,
        publishedAt,
        categoryId: category?.id ?? null,
      },
    });
  }

  console.log(
    `Done. Imported ${blogCategories.length} categories and ${blogPosts.length} posts.`
  );

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
