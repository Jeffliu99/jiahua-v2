import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { postpartumMeals } from "@/data/services/postpartum-meals";

export const metadata: Metadata = {
  title: postpartumMeals.seo.title,
  description: postpartumMeals.seo.description,
};

export default function Page() {
  return <ServicePage data={postpartumMeals} />;
}
