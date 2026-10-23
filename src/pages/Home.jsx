import Seo from "@/components/Seo";
import { PAGES, homeSchema } from "@/config/seo";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Seo {...PAGES.home} jsonLd={homeSchema} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
