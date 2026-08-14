import { mealFaqs } from "@/data/meal-plans/faq";

export default function MealSchema() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Jiahua Postpartum Meal Plans", alternateName: "加华月子餐四阶段月子餐体系", provider: { "@type": "LocalBusiness", name: "Jiahua Postpartum Meals", url: "https://www.jiahuameal.com" }, areaServed: ["Toronto", "Markham", "Richmond Hill", "Vaughan", "North York", "Scarborough", "Mississauga", "Aurora", "Newmarket", "Greater Toronto Area"], description: "Four-stage postpartum meal plans with daily meals, soups, fruits, desserts, handmade dim sum and baked goods for GTA families." };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: mealFaqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} /></>;
}
