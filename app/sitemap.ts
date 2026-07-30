import type { MetadataRoute } from "next";

const siteUrl = "https://v2.jiahuameal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/services",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/nutrition",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/stories",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}