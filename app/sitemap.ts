import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jiahuameal.com";

  const routes = [
    "",

    // 中文页面
    "/about",
    "/meal-plans",
    "/faq",
    "/contact",
    "/blog",

    // 未来服务页面（提前保留）
    "/miscarriage-recovery-meals",
    "/prenatal-lactation-meals",
    "/post-surgery-meals",
    "/family-meals",

    // 未来功能页面
    "/customer-login",
    "/shop",

    // 英文版（上线时启用）
    "/en",
    "/en/about",
    "/en/meal-plans",
    "/en/faq",
    "/en/contact",
    "/en/blog",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency:
      route === ""
        ? "weekly"
        : route.includes("/blog")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/meal-plans"
        ? 0.9
        : route === "/contact"
        ? 0.9
        : route.includes("/blog")
        ? 0.8
        : 0.7,
  }));
}