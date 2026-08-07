import Image from "next/image";
import Link from "next/link";
import CustomerFeedbackSection from "@/components/CustomerFeedbackSection";
import SharePanel from "@/components/SharePanel";

export const metadata = {
  title: "月子餐菜单｜加华月子餐",
  description:
    "加华月子餐四阶段月子餐体系，近十年服务经验，每日三餐三点、两款养生煲汤、新鲜水果、养生甜品、手工面点与现烤糕点。",
};

const highlights = [
  "近十年运营经验",
  "每日三餐三点",
  "每日两款养生煲汤",
  "每日新鲜水果",
  "每日养生甜品",
  "手工面点与现烤糕点",
];

const premiumIngredients = ["鲈鱼", "三文鱼", "鲜虾", "优质鸡肉", "精选牛肉", "时令蔬菜"];

const deliveryMeals = [
  {
    src: "/images/meal-plans/postpartum-chicken-set.png",
    title: "滋补鸡肉套餐",
    description: "主菜、时蔬、养生汤与营养饭组合。",
  },
  {
    src: "/images/meal-plans/postpartum-shrimp-set.png",
    title: "鲜虾营养套餐",
    description: "鲜虾、时蔬、养生汤与营养饭组合。",
  },
  {
    src: "/images/meal-plans/postpartum-fish-set.png",
    title: "清蒸鲜鱼套餐",
    description: "鲜鱼、时蔬、养生汤与营养饭组合。",
  },
];

const dailyExtras = [
  {
    title: "养生甜品",
    description: "芝麻糊、杏仁糊、银耳羹、莲子百合糖水、草莓奶油甜品杯等每日轮换搭配。",
    image: "/images/desserts/traditional-dessert-selection.jpg",
  },
  {
    title: "手工面点",
    description: "小笼包、水饺、云吞、烧卖、馄饨、煎饼等手工面点，丰富三点搭配。",
    image: "/images/dim-sum/dim-sum-all.png",
  },
  {
    title: "现烤糕点",
    description: "紫菜肉松蛋糕、精品 Cupcake、蛋挞与每日烘焙点心，让月子期间饮食更加丰富。",
    image: "/images/desserts/handmade-desserts-all.png",
  },
];

const pastryItems = [
  {
    src: "/images/bakery/seaweed-pork-floss-cake.jpg",
    title: "紫菜肉松蛋糕",
    description: "加华特色手工糕点，咸香松软，适合作为三点搭配。",
  },
  {
    src: "/images/bakery/premium-cupcake-gift-box.jpg",
    title: "精品 Cupcake 礼盒",
    description: "每日现烤糕点，搭配水果与轻甜奶油。",
  },
  {
    src: "/images/desserts/strawberry-dessert-cups.jpg",
    title: "草莓甜品杯",
    description: "新鲜草莓、奶油与蛋糕层次组合，清爽丰富。",
  },
  {
    src: "/images/bakery/assorted-cupcake-boxes.jpg",
    title: "多款 Cupcake 组合",
    description: "多种口味轮换，丰富每日点心选择。",
  },
];

const samplePhotos = [
  {
    src: "/images/meal-plans/daily-meal-collage.jpg",
    title: "每日餐食组合",
    alt: "加华月子餐每日餐食组合，包含正餐、汤品、水果和点心",
  },
  {
    src: "/images/meal-plans/breakfast-fruit-dessert-set.jpg",
    title: "早餐与三点搭配",
    alt: "加华月子餐早餐与三点搭配，包含面点、水果、甜品和饮品",
  },
  {
    src: "/images/meal-plans/salmon-set-meal.jpg",
    title: "优质鱼类主餐",
    alt: "加华月子餐鱼类主餐，包含三文鱼、杂粮饭、蔬菜和煲汤",
  },
  {
    src: "/images/meal-plans/daily-delivery-meal.jpg",
    title: "客户实际配送餐",
    alt: "加华月子餐客户实际配送餐食，包含主菜、配菜、汤品与甜品",
  },
  {
    src: "/images/meal-plans/real-meal-variety-collage.jpg",
    title: "完整餐食示例",
    alt: "加华月子餐完整餐食示例，包含主菜、饭、汤、蔬菜、水果和甜品",
  },
  {
    src: "/images/desserts/fortifying-dessert-and-soup.jpg",
    title: "养生甜品与汤水",
    alt: "加华月子餐养生甜品与汤水展示",
  },
];

const stages = [
  {
    title: "第一周 · 恢复期",
    tag: "清淡 · 温和 · 易消化",
    description: "以清淡、温和、易消化为重点，帮助妈妈从产后初期逐步恢复。",
    meals: [
      "早餐：小米粥、蒸鸡蛋、清蒸鱼柳",
      "早点：养生甜品、新鲜水果",
      "午餐：主菜、配菜、米饭、养生煲汤",
      "午点：甜品、水果或手工点心",
      "晚餐：主菜、配菜、米饭、养生煲汤",
      "晚点：暖胃饮品或养生甜品",
    ],
  },
  {
    title: "第二周 · 调理期",
    tag: "增加蛋白质 · 提高营养密度",
    description: "逐步增加优质蛋白与营养密度，让身体恢复更加稳定。",
    meals: [
      "早餐：营养粥品、蒸蛋、手工面点",
      "早点：水果、甜品或养生饮品",
      "午餐：鱼类、鸡肉、时蔬、米饭、养生煲汤",
      "午点：芝麻糊、杏仁糊或现烤糕点",
      "晚餐：主菜、配菜、米饭、养生煲汤",
      "晚点：暖身饮品或手工点心",
    ],
  },
  {
    title: "第三周 · 滋养期",
    tag: "滋养恢复 · 菜品更丰富",
    description: "恢复进入更稳定阶段，可逐步加入特色滋补菜品与更丰富的蛋白质。",
    meals: [
      "早餐：杂粮粥、蛋类、面点",
      "早点：水果、养生甜品",
      "午餐：药膳鸡、鱼类、特色主菜、养生煲汤",
      "午点：滋养甜品或现烤糕点",
      "晚餐：主菜、时令蔬菜、米饭、养生煲汤",
      "晚点：暖身饮品或手工点心",
    ],
  },
  {
    title: "第四周 · 巩固期",
    tag: "均衡营养 · 接近日常饮食",
    description: "逐步过渡至均衡日常饮食，同时保持营养密度与饮食规律。",
    meals: [
      "早餐：营养主食、蛋类、手工面点",
      "早点：水果、养生甜品",
      "午餐：家常主菜、配菜、米饭、养生煲汤",
      "午点：甜品、糕点或新鲜水果",
      "晚餐：主菜、时蔬、米饭、养生煲汤",
      "晚点：暖胃汤水或手工点心",
    ],
  },
];

export default function MealPlansPage() {
  return (
    <main className="bg-[#FAF8F5]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#153d3b]">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/meal-plans/home-meal-set.jpg"
            alt="加华月子餐完整套餐展示"
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
            四阶段科学月子餐体系
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/90">
            每日三餐三点、两款养生煲汤、新鲜水果、养生甜品、手工面点与现烤糕点，
            根据妈妈不同恢复阶段科学搭配，让坐月子更安心、更轻松。
          </p>
          <div className="mt-8 max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-lg leading-8 text-white/95">
              加华月子餐深耕 GTA 华人市场近十年，坚持每日现煮配送与分阶段月子餐理念，
              为众多产后家庭提供专业月子餐服务。
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1F4E4C] shadow-sm transition hover:bg-[#F7EDEA]"
            >
              预约咨询
            </Link>
            <a
              href="#weekly-menu"
              className="inline-flex justify-center rounded-full border border-white/70 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              查看四阶段菜单
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
                每日现煮 · 新鲜出餐
              </h2>
              <p className="mt-6 leading-8 text-gray-600">
                加华月子餐坚持每日现煮制作，根据当天订单安排生产与配送，确保餐食的新鲜度、口感与品质。
              </p>
              <p className="mt-4 leading-8 text-gray-600">
                深耕 GTA 华人市场近十年，已形成成熟稳定的出餐与配送流程。
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-[#E8DCC9] shadow-sm">
              <Image
                src="/images/production/daily-production-line.jpg"
                alt="加华月子餐每日现煮出餐现场"
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
              精选优质食材
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              根据产后恢复阶段搭配优质蛋白、时令蔬菜与丰富主食，让每一餐兼顾营养、口味与变化。
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
              真实配送餐食
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              以下为客户实际收到的餐食组合示例。菜品会根据阶段、季节、食材供应与妈妈需求进行调整。
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
              甜品、面点与现烤糕点
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              除正餐与煲汤外，每日搭配甜品、手工面点与新鲜水果，让月子期间饮食更丰富、更有期待。
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
              每日现烤糕点
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              除正餐外，加华月子餐每日搭配特色烘焙点心与养生糕点，让妈妈在恢复期间享受更多元化的饮食体验。
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

      {/* Real Meals Gallery */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Real Meals
              </div>
              <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">
                真实餐食展示
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-gray-600">
              每日餐食包含正餐、汤品、水果、甜品、面点与糕点。以下图片展示实际餐食组合示例。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {samplePhotos.map((photo) => (
              <article key={photo.src} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                <div className="relative aspect-[4/5] w-full bg-[#FAF8F5]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1F4E4C]">{photo.title}</h3>
                </div>
              </article>
            ))}
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
                alt="加华月子餐真实出餐与餐食组合"
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
                为什么妈妈选择加华月子餐
              </h2>
              <ul className="mt-8 space-y-4 leading-8 text-gray-700">
                <li>✓ 近十年运营经验</li>
                <li>✓ 四阶段科学调理体系</li>
                <li>✓ 每日三餐三点</li>
                <li>✓ 每日两款养生煲汤</li>
                <li>✓ 新鲜水果与养生甜品</li>
                <li>✓ 手工面点与现烤糕点</li>
                <li>✓ GTA 多地区配送</li>
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
              四阶段餐单安排
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              每一阶段的餐食重点不同，实际菜单会根据妈妈恢复状态、口味偏好与特殊需求做适当调整。
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
            加华月子餐特别说明
          </h2>
          <div className="space-y-4 leading-8 text-gray-600">
            <p>加华月子餐采用分阶段调理理念，根据妈妈不同恢复阶段安排每日餐食。</p>
            <p>
              部分特色菜品，例如广式猪脚姜、药膳炖品等，通常不会在开餐初期安排，而会随着身体恢复情况循序渐进加入菜单。
            </p>
            <p>实际菜单会根据妈妈身体状况、饮食偏好、季节食材及特殊需求进行适当调整。</p>
          </div>
        </div>
      </section>
{/* Share */}
<section className="bg-white py-16">
  <div className="mx-auto max-w-5xl px-6 md:px-8">
    <div className="mb-8 text-center">
      <div className="mb-3 text-sm font-semi-bold uppercase tracking-widest text-[#C9A18A]">
        SHARE
      </div>
      <h2 className="text-3xl-font-bold text-[#1F4E4C]">
       分享给家人朋友
      </h2>
      <p className="mt-4 text-gray-600">
       如果这份菜单对您有帮助，欢迎分享给正在备产或产后恢复的妈妈和家人。
      </p>
    </div>

    <SharePanel
      title="月子餐菜单｜加华月子餐"
    />
  </div>
</section>
      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
          <h2 className="mb-6 text-4xl font-bold text-[#1F4E4C]">
            想了解适合您的月子餐方案？
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            欢迎联系我们了解套餐内容、配送范围与开餐安排。
          </p>
          <Link href="/contact" className="inline-flex rounded-full bg-[#1F4E4C] px-8 py-4 font-semibold text-white shadow-sm transition hover:bg-[#173D3B]">
            预约咨询
          </Link>
        </div>
      </section>
    </main>
  );
}
