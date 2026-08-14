import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { breastfeedingMeals } from "@/data/services/breastfeeding-meals";

export const metadata: Metadata = {
  title: breastfeedingMeals.seo.title,
  description: breastfeedingMeals.seo.description,
};

export default function Page() {
  return <ServicePage data={breastfeedingMeals} />;
}
