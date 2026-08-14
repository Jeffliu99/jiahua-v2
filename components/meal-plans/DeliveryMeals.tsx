import Image from "next/image";
import { deliveryMeals } from "@/data/meal-plans/deliveryMeals";

export default function DeliveryMeals() { return <section className="py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A18A]">
                Real Delivery Meals
            </p>
            <h2 className="text-3xl font-bold text-[#1F4E4C] md:text-5xl">真实配送餐食</h2>
            <p className="mt-5 leading-8 text-gray-600">客户实际收到的餐食组合示例。菜品会根据阶段、季节、食材供应与妈妈需求进行调整。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {deliveryMeals.map((meal) => (
                <article key={meal.src} className="overflow-hidden rounded-[2rem] border border-[#E8DCC9] bg-white shadow-sm">
                    <div className="relative aspect-[4/3] w-full bg-[#FAF8F5]">
                        <Image src={meal.src} alt={meal.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1F4E4C]">{meal.title}</h3>
                        <p className="mt-3 leading-7 text-gray-600">{meal.description}</p>
                    </div>
                </article>
            ))}
        </div>
    </div>
</section>; }
