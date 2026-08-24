import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pub-0a35ebea015342aea2122e9bb9640c10.r2.dev",
          pathname: "/**",
        },
      ],
    },

  experimental: {
    serverActions: {
      bodySizeLimit: "8mb",
    },
  },

  async redirects() {
  return [
    {
      source: "/shop",
      destination: "/meal-plans",
      permanent: true,
    },

    {
      source: "/menu-and-gallery",
      destination: "/meal-plans",
      permanent: true,
    },

    {
      source:
        "/product-category/产后养生商店-postpartum-health-store",
      destination: "/meal-plans",
      permanent: true,
    },

    {
      source: "/product-category/trial-meal",
      destination: "/meal-plans",
      permanent: true,
    },

    {
      source: "/product-category/postpartum-meal",
      destination: "/meal-plans",
      permanent: true,
    },

    {
      source: "/product-category/miscarriage-recovery-meals",
      destination: "/contact",
      permanent: true,
    },

    {
      source: "/product-category/pregnancy-lactation-support-meals",
      destination: "/contact",
      permanent: true,
    },

    {
      source: "/product-category/post-surgery-recovery-meal",
      destination: "/contact",
      permanent: true,
    },

    {
      source: "/product-category/family-daily-meal",
      destination: "/contact",
      permanent: true,
    },

    {
      source: "/contact-us",
      destination: "/contact",
      permanent: true,
    },

    {
      source: "/user-account",
      destination: "/contact",
      permanent: true,
    },
  ];
}
};

export default nextConfig;