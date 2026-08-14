import { serviceHubCategories } from "@/data/services-hub/categories";
import { serviceHubFaqs } from "@/data/services-hub/faq";

export default function ServiceHubSchema() {
  const services = serviceHubCategories.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Service",
      name: item.englishTitle,
      alternateName: item.title,
      description: item.description,
      url: item.href ? `https://www.jiahuameal.com${item.href}` : "https://www.jiahuameal.com/services",
      image: `https://www.jiahuameal.com${item.image}`,
    }))
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jiahua Nutrition Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceHubFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
