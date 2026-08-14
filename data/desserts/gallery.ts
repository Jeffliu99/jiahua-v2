export type DessertGalleryImage = {
  title: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const dessertGalleryImages: DessertGalleryImage[] = [
  {
    title: "手作甜品总览",
    image: "/images/desserts/handmade-desserts-all.png",
    alt: "加华手作甜品总览照片墙",
    featured: true,
  },
  {
    title: "蛋糕卷",
    image: "/images/desserts/cake-roll.png",
    alt: "加华手作蛋糕卷",
  },
  {
    title: "草莓甜品杯",
    image: "/images/desserts/strawberry-dessert-cups.png",
    alt: "草莓甜品杯",
  },
  {
    title: "紫薯甜品杯",
    image: "/images/desserts/purple-yam-dessert-cups.jpg",
    alt: "紫薯甜品杯",
  },
  {
    title: "现烤蛋挞",
    image: "/images/desserts/egg-tarts.png",
    alt: "现烤蛋挞",
  },
  {
    title: "提拉米苏",
    image: "/images/desserts/tiramisu-series.png",
    alt: "提拉米苏甜品",
  },
];
