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
    name: "نیلگون لجستیک - باربری نیلگون خلیج فارس",
    image: "https://nilgoonlogistics.ir/truck.svg",
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
        <title>نیلگون لجستیک | باربری کرمانشاه - حمل بار سریع و مطمئن</title>
        <meta
          name="description"
          content="شرکت نیلگون لجستیک ارائه‌دهنده خدمات باربری در کرمانشاه و سراسر کشور، با ناوگان مدرن، قیمت مناسب و پشتیبانی ۲۴ ساعته."
        />
        <meta
          name="keywords"
          content="باربری کرمانشاه, حمل بار کرمانشاه, باربری نیلگون, نیلگون لجستیک, باربری بین‌شهری, ارسال بار, شرکت حمل و نقل, پایانه بار کرمانشاه, logistics, moving company, cargo"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media networks */}
        <meta property="og:title" content="نیلگون لجستیک | باربری کرمانشاه" />
        <meta
          property="og:description"
          content="خدمات تخصصی حمل‌ونقل و باربری در کرمانشاه. سریع، ایمن و مقرون‌به‌صرفه."
        />
        <meta property="og:url" content="https://nilgoonlogistics.ir" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nilgoonlogistics.ir/truck.svg"
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
