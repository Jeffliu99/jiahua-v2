import Image from "next/image";
import Link from "next/link";
import CustomerFeedbackSection from "@/components/CustomerFeedbackSection";
import SharePanel from "@/components/SharePanel";

export const metadata = {
  title: "Postpartum Meal Plans | Jiahua Postpartum Meals",
  description:
    "Jiahua's four-stage postpartum meal system includes nearly ten years of service experience, three meals and three snacks daily, two nourishing soups, fresh fruit, healthy desserts, handmade dim sum, and freshly baked pastries.",
};

const highlights = [
  "Nearly 10 Years of Experience",
  "Three Meals & Three Snacks Daily",
  "Two Nourishing Soups Daily",
  "Fresh Fruit Daily",
  "Healthy Desserts Daily",
  "Handmade Dim Sum & Fresh Pastries",
];

const premiumIngredients = ["Sea Bass", "Salmon", "Fresh Shrimp", "Quality Chicken", "Selected Beef", "Seasonal Vegetables"];

const deliveryMeals = [
  {
    src: "/images/meal-plans/postpartum-chicken-set.png",
    title: "Nourishing Chicken Set",
    description:
      "A balanced combination of protein, seasonal vegetables, nourishing soup, and nutritious rice.",
  },
  {
    src: "/images/meal-plans/postpartum-shrimp-set.png",
    title: "Fresh Shrimp Nutrition Set",
    description:
      "Fresh shrimp, seasonal vegetables, nourishing soup, and nutritious rice.",
  },
  {
    src: "/images/meal-plans/postpartum-fish-set.png",
    title: "Steamed Fish Set",
    description:
      "Fresh fish, seasonal vegetables, nourishing soup, and nutritious rice.",
  },
];

const dailyExtras = [
  {
    title: "Healthy Desserts",
    description:
      "Daily rotating desserts such as black sesame paste, almond paste, snow fungus soup, lotus seed and lily bulb dessert soup, and strawberry cream dessert cups.",
    image: "/images/desserts/traditional-dessert-selection.jpg",
  },
  {
    title: "Handmade Dim Sum",
    description:
      "Handmade snacks such as soup dumplings, dumplings, wontons, shumai, pan-fried pancakes, and other small bites to enrich the three daily snack times.",
    image: "/images/dim-sum/dim-sum-all.png",
  },
  {
    title: "Freshly Baked Pastries",
    description:
      "Seaweed pork floss cake, premium cupcakes, egg tarts, and daily baked pastries help make postpartum meals more varied and enjoyable.",
    image: "/images/desserts/handmade-desserts-all.png",
  },
];

const pastryItems = [
  {
    src: "/images/bakery/seaweed-pork-floss-cake.jpg",
    title: "Seaweed Pork Floss Cake",
    description: "A Jiahua handmade pastry with a soft texture and savory flavor, suitable as part of the daily snack pairing.",
  },
  {
    src: "/images/bakery/premium-cupcake-gift-box.jpg",
    title: "Premium Cupcake Gift Box",
    description: "Freshly baked daily pastries paired with fruit and lightly sweet cream.",
  },
  {
    src: "/images/desserts/strawberry-dessert-cups.jpg",
    title: "Strawberry Dessert Cup",
    description: "Fresh strawberries, cream, and cake layers combined into a refreshing dessert option.",
  },
  {
    src: "/images/bakery/assorted-cupcake-boxes.jpg",
    title: "Assorted Cupcake Selection",
    description: "A rotating variety of flavors to bring more enjoyment to daily snack time.",
  },
];

const samplePhotos = [
  {
    src: "/images/meal-plans/daily-meal-collage.jpg",
    title: "Daily Meal Combination",
    alt: "Jiahua postpartum daily meal combination with main meals, soups, fruit, and snacks",
  },
  {
    src: "/images/meal-plans/breakfast-fruit-dessert-set.jpg",
    title: "Breakfast and Snack Pairing",
    alt: "Jiahua postpartum breakfast and snack pairing with dim sum, fruit, dessert, and drinks",
  },
  {
    src: "/images/meal-plans/salmon-set-meal.jpg",
    title: "Premium Fish Main Meal",
    alt: "Jiahua postpartum fish meal with salmon, multigrain rice, vegetables, and soup",
  },
  {
    src: "/images/meal-plans/daily-delivery-meal.jpg",
    title: "Actual Customer Delivery Meal",
    alt: "Jiahua actual customer delivery meal with main dish, sides, soup, and dessert",
  },
  {
    src: "/images/meal-plans/real-meal-variety-collage.jpg",
    title: "Complete Meal Example",
    alt: "Jiahua complete postpartum meal example with main dish, rice, soup, vegetables, fruit, and dessert",
  },
  {
    src: "/images/desserts/fortifying-dessert-and-soup.jpg",
    title: "Nourishing Desserts and Soups",
    alt: "Jiahua nourishing postpartum desserts and soup display",
  },
];

const stages = [
  {
    title: "Week 1 · Recovery Phase",
    tag: "Light · Gentle · Easy to Digest",
    description:
      "Focused on light, gentle, and easy-to-digest meals to help mothers gradually adjust during the early postpartum stage.",
    meals: [
      "Breakfast: millet porridge, steamed egg, steamed fish fillet",
      "Morning snack: healthy dessert and fresh fruit",
      "Lunch: main dish, side dish, rice, and nourishing soup",
      "Afternoon snack: dessert, fruit, or handmade snack",
      "Dinner: main dish, side dish, rice, and nourishing soup",
      "Evening snack: warm drink or healthy dessert",
    ],
  },
  {
    title: "Week 2 · Nourishment Phase",
    tag: "More Protein · Higher Nutrient Density",
    description:
      "Gradually increases quality protein and nutrient density to support a steadier recovery process.",
    meals: [
      "Breakfast: nourishing porridge, steamed egg, handmade dim sum",
      "Morning snack: fruit, dessert, or nourishing drink",
      "Lunch: fish, chicken, seasonal vegetables, rice, and nourishing soup",
      "Afternoon snack: black sesame paste, almond paste, or freshly baked pastry",
      "Dinner: main dish, side dish, rice, and nourishing soup",
      "Evening snack: warm drink or handmade snack",
    ],
  },
  {
    title: "Week 3 · Strengthening Phase",
    tag: "Restorative Nourishment · More Variety",
    description:
      "As recovery becomes more stable, the menu can gradually include richer nourishing dishes and a wider variety of proteins.",
    meals: [
      "Breakfast: multigrain porridge, eggs, and dim sum",
      "Morning snack: fruit and healthy dessert",
      "Lunch: herbal chicken, fish, specialty main dish, and nourishing soup",
      "Afternoon snack: nourishing dessert or freshly baked pastry",
      "Dinner: main dish, seasonal vegetables, rice, and nourishing soup",
      "Evening snack: warm drink or handmade snack",
    ],
  },
  {
    title: "Week 4 · Transition Phase",
    tag: "Balanced Nutrition · Closer to Daily Eating",
    description:
      "Gradually transitions toward balanced everyday meals while maintaining nutrient density and a steady eating routine.",
    meals: [
      "Breakfast: nourishing staple food, eggs, and handmade dim sum",
      "Morning snack: fruit and healthy dessert",
      "Lunch: home-style main dish, side dish, rice, and nourishing soup",
      "Afternoon snack: dessert, pastry, or fresh fruit",
      "Dinner: main dish, seasonal vegetables, rice, and nourishing soup",
      "Evening snack: warm soup or handmade snack",
    ],
  },
];
const featuredMealdaily =  {
  image: "/images/meal-plans/meal-plan-daily-showcase.png",
  alt: "加华每日月子餐搭配示例",
};
export default function MealPlansPage() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#153d3b]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/meal-plans/home-meal-set.jpg"
            alt="Complete Jiahua postpartum meal set"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#153d3b]/95 via-[#153d3b]/78 to-[#153d3b]/35" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D6B37F]">
            Meal Plans
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Four-Stage Postpartum Nutrition Program
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
            Three meals, three snacks, two nourishing soups, fresh fruit, healthy desserts, handmade dim sum, and freshly baked pastries are carefully arranged to support mothers through different stages of postpartum recovery.
          </p>
          <div className="mt-8 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-lg leading-8 text-white/95">
              With nearly ten years of experience serving Chinese families across the GTA, Jiahua follows a daily fresh-cooking model and a stage-based postpartum meal philosophy to support families during recovery.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F4E4C] shadow-sm transition hover:bg-[#F7EDEA]"
            >
              Book a Consultation
            </Link>
            <a
              href="#weekly-menu"
              className="inline-flex justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Four-Stage Menu
            </a>
          </div>
        </div>
      </section>

      {/* Daily Production */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Daily Production
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                Freshly Cooked Daily
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                Jiahua Postpartum Meals are prepared fresh each day, with production and delivery arranged according to daily orders to help maintain freshness, taste, and quality.
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                After nearly ten years serving Chinese families across the GTA, Jiahua has developed a stable and mature production and delivery process.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] shadow-sm">
              <Image
                src="/images/production/daily-production-line.jpg"
                alt="Jiahua daily postpartum meal production"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {highlights.map((item) => (
              <div key={item} className="rounded-3xl border border-[#E8DCC9] bg-white p-5 text-center shadow-sm">
                <p className="font-semibold text-[#1F4E4C]">✓ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Ingredients */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Premium Ingredients
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Carefully Selected Quality Ingredients
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Quality proteins, seasonal vegetables, and balanced staple foods are paired according to each recovery stage, helping every meal balance nutrition, taste, and variety.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {premiumIngredients.map((item) => (
              <div key={item} className="rounded-3xl border border-[#E8DCC9] bg-[#FAF8F5] p-6 text-center shadow-sm">
                <h3 className="text-xl font-bold text-[#1F4E4C]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Delivery Meals */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Real Delivery Meals
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Real Delivered Meal Examples
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              The following are examples of meal combinations received by customers. Dishes may be adjusted based on recovery stage, season, ingredient availability, and individual needs.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {deliveryMeals.map((meal) => (
              <article key={meal.src} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] w-full bg-[#FAF8F5]">
                  <Image
                    src={meal.src}
                    alt={meal.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1F4E4C]">{meal.title}</h3>
                  <p className="mt-3 leading-7 text-gray-600">{meal.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Extras */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Daily Extras
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Desserts, Dim Sum, and Freshly Baked Pastries
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              In addition to main meals and soups, each day includes desserts, handmade dim sum, and fresh fruit to make postpartum meals more varied and enjoyable.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dailyExtras.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] w-full bg-[#FAF8F5]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-bold text-[#1F4E4C]">{item.title}</h3>
                  <p className="leading-8 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Baked Daily */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Fresh Baked Daily
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Freshly Baked Pastries Every Day
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Beyond main meals, Jiahua includes specialty baked pastries and nourishing snacks daily, bringing more variety to the postpartum recovery experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pastryItems.map((item) => (
              <article key={item.src} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] w-full bg-[#FAF8F5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1F4E4C]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Typical Daily Meal Plan */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Typical Daily Meal Plan
            </div>

            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              A Typical Day of Postpartum Nutrition
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Start the day with a warm and nourishing breakfast,
              enjoy high-quality protein at lunch,
              and finish with a gentle, balanced dinner that supports postpartum recovery and overall wellness.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-xl">
            <div className="relative aspect-[16/10]">
              <Image
                src={featuredMealdaily.image}
                alt={featuredMealdaily.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] bg-[#FAF8F5] shadow-sm">
              <Image
                src="/images/production/production-scale-overview.jpg"
                alt="Jiahua real production and meal combinations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Why Jiahua
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                Why Mothers Choose Jiahua Postpartum Meals
              </h2>
              <ul className="mt-8 space-y-4 leading-8 text-gray-700">
                <li>✓ Nearly 10 Years of Experience</li>
                <li>✓ Four-Stage Recovery System</li>
                <li>✓ Three Meals & Three Snacks Daily</li>
                <li>✓ Two Nourishing Soups Daily</li>
                <li>✓ Fresh Fruit & Healthy Desserts</li>
                <li>✓ Handmade Dim Sum & Fresh Pastries</li>
                <li>✓ Delivery Across Multiple GTA Communities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CustomerFeedbackSection />

      {/* Weekly Menu */}
      <section id="weekly-menu" className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Weekly Stages
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
              Four-Stage Meal Schedule
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Each stage has a different meal focus. The actual menu may be adjusted according to the mother's recovery status, taste preferences, and special needs.
            </p>
          </div>
          <div className="space-y-8">
            {stages.map((stage) => (
              <section key={stage.title} className="rounded-[32px] border border-[#E8DCC9] bg-white p-8 shadow-sm">
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-[#1F4E4C]">{stage.title}</h3>
                    <p className="mt-3 leading-8 text-gray-600">{stage.description}</p>
                  </div>
                  <span className="w-fit rounded-full bg-[#F7EDEA] px-4 py-2 text-sm font-semibold text-[#B8915D]">
                    {stage.tag}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {stage.meals.map((meal) => (
                    <div key={meal} className="rounded-2xl bg-[#FAF8F5] p-4 leading-7 text-[#1F4E4C]">
                      {meal}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="border-y border-[#E8DCC9] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-8">
          <h2 className="mb-6 text-3xl font-bold text-[#1F4E4C]">
            Important Notes From Jiahua
          </h2>
          <div className="space-y-4 leading-8 text-gray-600">
            <p>Jiahua Postpartum Meals follow a stage-based recovery philosophy, with daily meals arranged according to different recovery stages.</p>
            <p>
              Certain specialty dishes, such as Cantonese pork knuckle ginger or herbal stews, are usually not included at the very beginning of service and may be gradually introduced as recovery progresses.
            </p>
            <p>The actual menu may be adjusted based on the mother's condition, dietary preferences, seasonal ingredients, and special needs.</p>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-8 text-center">
            <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
              Share
            </div>
            <h2 className="text-3xl font-bold text-[#1F4E4C]">
              Share With Family & Friends
            </h2>
            <p className="mt-4 text-gray-600">
              If this menu is helpful, feel free to share it with expecting mothers, new moms, and family members preparing for postpartum recovery.
            </p>
          </div>
          <SharePanel title="Postpartum Meal Plans | Jiahua Postpartum Meals" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="mb-6 text-4xl font-bold text-[#1F4E4C]">
            Looking for the Right Postpartum Meal Program?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Contact us to learn about program details, delivery areas, and meal start arrangements.
          </p>
          <Link href="/contact" className="inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white shadow-sm transition hover:bg-[#173D3B]">
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
