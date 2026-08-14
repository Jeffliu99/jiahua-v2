import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { familyNutritionMeals } from "@/data/services/family-nutrition-meals";

export const metadata: Metadata = {
  title: familyNutritionMeals.seo.title,
  description: familyNutritionMeals.seo.description,
};

export default function Page() {
  return <ServicePage data={familyNutritionMeals} />;
}
