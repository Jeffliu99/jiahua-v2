export type ServiceFAQItem = {
  question: string;
  answer: string;
};

export type ServiceCardItem = {
  title: string;
  description: string;
};

export type ServiceSection = {
  eyebrow?: string;
  title: string;
  description: string[];
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  ctaText?: string;
  ctaHref?: string;
};

export type ServicePageData = {
  slug: string;
  url: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  benefits: string[];
  cardsTitle: string;
  cards: ServiceCardItem[];
  sections: ServiceSection[];
  faqs: ServiceFAQItem[];
  cta?: {
    title: string;
    description: string;
    buttonText?: string;
    buttonHref?: string;
  };
};
