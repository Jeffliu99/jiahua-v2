import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { cSectionRecoveryMeals } from "@/data/services/c-section-recovery-meals";

export const metadata: Metadata = {
  title: cSectionRecoveryMeals.seo.title,
  description: cSectionRecoveryMeals.seo.description,
};

export default function Page() {
  return <ServicePage data={cSectionRecoveryMeals} />;
}
