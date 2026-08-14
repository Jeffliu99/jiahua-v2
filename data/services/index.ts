import { breastfeedingMeals } from "./breastfeeding-meals";
import { cSectionRecoveryMeals } from "./c-section-recovery-meals";
import { familyNutritionMeals } from "./family-nutrition-meals";
import { miscarriageRecoveryMeals } from "./miscarriage-recovery-meals";
import { postpartumMeals } from "./postpartum-meals";

export const servicePages = {
  "postpartum-meals": postpartumMeals,
  "c-section-recovery-meals": cSectionRecoveryMeals,
  "breastfeeding-meals": breastfeedingMeals,
  "miscarriage-recovery-meals": miscarriageRecoveryMeals,
  "family-nutrition-meals": familyNutritionMeals,
};

export type ServiceSlug = keyof typeof servicePages;
