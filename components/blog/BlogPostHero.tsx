import PageHero from "@/components/PageHero";

type BlogPostHeroProps = {
  post: {
    title: string;
    excerpt: string | null;
    category?: {
      name: string;
    } | null;
  };
};

export default function BlogPostHero({ post }: BlogPostHeroProps) {
  return (
    <PageHero
      eyebrow={post.category?.name ?? "Jiahua Blog"}
      title={post.title}
      description={post.excerpt ?? "加华月子餐 Blog 文章。"}
      height="md"
    />
  );
}
