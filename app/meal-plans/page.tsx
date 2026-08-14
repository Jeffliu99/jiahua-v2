import type { Metadata } from "next";

import MealSchema from "@/components/meal-plans/MealSchema";
import MealHero from "@/components/meal-plans/MealHero";
import ProductionSection from "@/components/meal-plans/ProductionSection";
import CustomPlanSection from "@/components/meal-plans/CustomPlanSection";
import MealHighlights from "@/components/meal-plans/MealHighlights";
import PremiumIngredients from "@/components/meal-plans/PremiumIngredients";
import DeliveryMeals from "@/components/meal-plans/DeliveryMeals";
import DailyMealShowcase from "@/components/meal-plans/DailyMealShowcase";
import DailyExtras from "@/components/meal-plans/DailyExtras";
import FreshBakedSection from "@/components/meal-plans/FreshBakedSection";
import WhyChooseJiahua from "@/components/meal-plans/WhyChooseJiahua";
import CustomerFeedbackSection from "@/components/CustomerFeedbackSection";
import FourStageProgram from "@/components/meal-plans/FourStageProgram";
import MealNotes from "@/components/meal-plans/MealNotes";
import MealFAQ from "@/components/meal-plans/MealFAQ";
import MealShare from "@/components/meal-plans/MealShare";
import MealCTA from "@/components/meal-plans/MealCTA";

export const metadata: Metadata = {
  title: "月子餐菜单｜加华月子餐",
  description:
    "加华月子餐四阶段月子餐体系，每日三餐三点、养生煲汤、新鲜水果、养生甜品、手工面点与现烤糕点，服务 GTA 华人家庭。",
};

export default function MealPlansPage() {
  return (
    <main className="bg-[#FAF8F5]">
      <MealSchema />
      <MealHero />
      <ProductionSection />
      <CustomPlanSection />
      <MealHighlights />
      <PremiumIngredients />
      <DeliveryMeals />
      <DailyMealShowcase />
      <DailyExtras />
      <FreshBakedSection />
      <WhyChooseJiahua />
      <CustomerFeedbackSection />
      <FourStageProgram />
      <MealNotes />
      <MealFAQ />
      <MealShare />
      <MealCTA />
    </main>
  );
}
