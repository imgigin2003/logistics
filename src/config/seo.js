// Single source of truth for site-wide SEO metadata and structured data.
import { services } from "@/data/services";

export const SITE_URL = "https://nilgoonlogistics.ir";
export const SITE_NAME = "باربری نیلگون خلیج فارس";

export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: "انبار کالا و قفسه‌های بار - باربری نیلگون خلیج فارس",
};

// Titles stay under 60 characters and descriptions under 160.
export const PAGES = {
  home: {
    path: "/",
    title: "باربری کرمانشاه نیلگون خلیج فارس | حمل بار به سراسر ایران",
    description:
      "باربری نیلگون خلیج فارس (مؤسسه اصفهان سابق)، فعال از سال ۱۳۴۰ در پایانه بزرگ کرمانشاه: حمل بار تجاری، ماشین‌آلات و محصولات کشاورزی با بیمه معتبر.",
  },
  review: {
    path: "/review",
    title: "ثبت نظر و بازخورد | باربری نیلگون خلیج فارس",
    description:
      "نظر خود را درباره خدمات باربری و حمل بار نیلگون خلیج فارس در کرمانشاه ثبت کنید. بازخورد شما به بهبود خدمات ما کمک می‌کند.",
  },
  notFound: {
    path: "/404",
    title: "صفحه پیدا نشد | باربری نیلگون خلیج فارس",
    description:
      "صفحه‌ای که به دنبال آن هستید وجود ندارد. به صفحه اصلی باربری نیلگون خلیج فارس بازگردید.",
  },
};

const BUSINESS_ID = `${SITE_URL}/#business`;

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: ["نیلگون لجستیک", "Nilgoon Logistics"],
      inLanguage: "fa-IR",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      alternateName: [
        "پایانه بار کرمانشاه - نیلگون خلیج فارس",
        "مؤسسه اصفهان سابق",
        "Nilgoon Logistics",
      ],
      description: PAGES.home.description,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      image: DEFAULT_OG_IMAGE.url,
      foundingDate: "1961",
      telephone: "+98-918-131-6405",
      address: {
        "@type": "PostalAddress",
        streetAddress: "کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه بزرگ کرمانشاه",
        addressLocality: "کرمانشاه",
        addressRegion: "کرمانشاه",
        addressCountry: "IR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.349351752378915,
        longitude: 47.21416478946306,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: { "@type": "Country", name: "Iran" },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+98-918-131-6405",
          contactType: "customer service",
          availableLanguage: ["Persian", "English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+98-83-3710-3072",
          contactType: "sales",
          availableLanguage: "Persian",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "خدمات حمل بار",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: { "@type": "Country", name: "Iran" },
          },
        })),
      },
    },
  ],
};
