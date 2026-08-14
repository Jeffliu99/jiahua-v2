import type { ServicePageData } from "@/types/service";
import ServiceBenefits from "./ServiceBenefits";
import ServiceCards from "./ServiceCards";
import ServiceCTA from "./ServiceCTA";
import ServiceFAQ from "./ServiceFAQ";
import ServiceHero from "./ServiceHero";
import ServiceImageText from "./ServiceImageText";
import ServiceSchema from "./ServiceSchema";

type ServicePageProps = {
  data: ServicePageData;
};

export default function ServicePage({ data }: ServicePageProps) {
  return (
    <main className="bg-[#FAF8F5]">
      <ServiceSchema
        name={data.seo.title}
        description={data.seo.description}
        url={data.url}
        faqs={data.faqs}
      />

      <ServiceHero
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        description={data.hero.description}
        image={data.hero.image}
      />

      <ServiceBenefits items={data.benefits} />
      <ServiceCards title={data.cardsTitle} items={data.cards} />

      {data.sections.map((section) => (
        <ServiceImageText key={section.title} section={section} />
      ))}

      <ServiceFAQ items={data.faqs} />

      <ServiceCTA
        title={data.cta?.title}
        description={data.cta?.description}
        buttonText={data.cta?.buttonText}
        buttonHref={data.cta?.buttonHref}
      />
    </main>
  );
}
