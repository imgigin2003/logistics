import React from "react";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TransportationService",
    name: "پایانه بار کرمانشاه - باربری نیلگون خلیج فارس",
    alternateName: ["باربری کرمانشاه", "حمل و نقل بار کرمانشاه"],
    description:
      "بزرگ‌ترین پایانه بار غرب کشور با خدمات حمل بار زمینی به تمام ایران",
    url: "https://nilgoonlogistics.ir",
    telephone: "+98-918-1316405",
    priceRange: "توافقی",
    areaServed: {
      "@type": "Place",
      name: "ایران",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه بزرگ بار کرمانشاه",
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
    sameAs: [
      "https://www.google.com/maps/place/...",
      "https://www.instagram.com/nilgoonlogistics/",
      "https://t.me/nilgoonlogistics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
