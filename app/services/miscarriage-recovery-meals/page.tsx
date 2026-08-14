import type { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { miscarriageRecoveryMeals } from "@/data/services/miscarriage-recovery-meals";

export const metadata: Metadata = {
  title: miscarriageRecoveryMeals.seo.title,
  description: miscarriageRecoveryMeals.seo.description,
};

export default function Page() {
  return <ServicePage data={miscarriageRecoveryMeals} />;
}
