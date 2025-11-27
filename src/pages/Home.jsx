import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "پایانه بار کرمانشاه | باربری نیلگون خلیج فارس",
    logo: "https://nilgoonlogistics.ir/favicon.ico",
    image: "https://nilgoonlogistics.ir/favicon.svg",
    url: "https://nilgoonlogistics.ir",
    telephone: "+98-918-1316405",
    priceRange: "توافقی",
    address: {
      "@type": "PostalAddress",
      streetAddress: "کیلومتر ۵ جاده کرمانشاه به بیستون, پایانه بزرگ کرمانشاه",
      addressLocality: "Kermanshah",
      addressRegion: "Kermanshah",
      postalCode: "",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+98-918-1316405",
        contactType: "Customer Service",
        availableLanguage: ["Persian", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+98-337-103072",
        contactType: "Office",
      },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>
          پایانه بار کرمانشاه | باربری نیلگون خلیج فارس - حمل بار سریع و مطمئن
        </title>
        <meta
          name="description"
          content="باربری نیلگون خلیج فارس در کرمانشاه: حمل سریع و مطمئن بار با بیمه معتبر، قیمت منصفانه و پشتیبانی ۲۴ ساعته"
        />
        <meta
          name="keywords"
          content="باربری کرمانشاه, حمل بار کرمانشاه, نیلگون لجستیک, حمل بار بین‌شهری, شرکت حمل و نقل کرمانشاه, ارسال بار, logistics Iran, moving company, cargo transport"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media networks */}
        <meta
          property="og:title"
          content="نیلگون خلیج‌فارس | پایانه بار کرمانشاه - حمل بار سریع"
        />
        <meta
          property="og:description"
          content="حمل بار مطمئن در کرمانشاه و سراسر ایران با بیش از ۸۰ سال تجربه. بیمه معتبر و پشتیبانی ۲۴ ساعته."
        />
        <meta property="og:url" content="https://nilgoonlogistics.ir" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nilgoonlogistics.ir/truck.svg"
        />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="Nilgoon Logistics" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="باربری نیلگون خلیج فارس" />
        <meta
          name="twitter:description"
          content="خدمات حمل بار در کرمانشاه و سراسر ایران با بیش از ۸۰ سال تجربه"
        />

        <link rel="canonical" href="https://nilgoonlogistics.ir/" />

        {/* Schema.org for google */}
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
