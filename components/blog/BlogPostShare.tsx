import SharePanel from "@/components/SharePanel";

type BlogPostShareProps = {
  post: {
    title: string;
  };
};

export default function BlogPostShare({ post }: BlogPostShareProps) {
  return (
    <section className="mt-10 rounded-[2rem] border border-[#F0E8DD] bg-white p-8 shadow-sm">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#B8915D]">
        Share
      </div>

      <h2 className="text-2xl font-bold text-[#1F4E4C]">分享给更多妈妈</h2>

      <p className="mt-3 text-gray-600">
        如果这篇文章对您有帮助，欢迎分享给正在备产或产后恢复的家人朋友。
      </p>

      <div className="mt-6">
        <SharePanel title={post.title} />
      </div>
    </section>
  );
}
