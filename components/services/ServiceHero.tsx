import PageHero from "@/components/PageHero";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <PageHero
      eyebrow={eyebrow}
      title={title}
      description={description}
      backgroundImage={image}
      height="lg"
      primaryButton={{
        text: "预约咨询",
        href: "/contact",
      }}
      secondaryButton={{
        text: "查看服务详情",
        href: "#service-details",
      }}
    />
  );
}
