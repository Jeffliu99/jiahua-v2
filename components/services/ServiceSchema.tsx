import type { ServiceFAQItem } from "@/types/service";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  faqs?: ServiceFAQItem[];
};

export default function ServiceSchema({
  name,
  description,
  url,
  faqs = [],
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Jiahua Postpartum Meals",
      url: "https://www.jiahuameal.com",
    },
    areaServed: [
      "Toronto",
      "Markham",
      "Richmond Hill",
      "Vaughan",
      "North York",
      "Scarborough",
      "Mississauga",
      "Aurora",
      "Newmarket",
      "Greater Toronto Area",
    ],
    url,
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
    </>
  );
}
