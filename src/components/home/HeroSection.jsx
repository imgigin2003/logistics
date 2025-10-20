import { useState, useEffect } from "react";
import { ArrowLeft, Globe, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroBg = `${import.meta.env.BASE_URL}assets/images/hero-bg.jpg`;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-emerald-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                  <span className="text-sm font-medium text-white">
                    تأسیس از سال ۱۳۴۰
                  </span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                باربری نیلگون
                <span className="block text-emerald-300">خلیج فارس</span>
                <span className="block text-white text-4xl md:text-5xl mt-2">
                  (مؤسسه اصفهان سابق)
                </span>
              </h1>

              <p className="text-xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                حمل کلیه بارهای تجاری، ماشین‌آلات و بارهای ترافیکی، محصولات
                کشاورزی، سیمان، محصولات پتروشیمی و سایر محموله‌ها با بالاترین
                کیفیت خدمات و پشتیبانی کامل.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-xlg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                  همین حالا شروع کنید
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">پوشش سراسری</p>
                    <p className="text-emerald-200">
                      تمام نقاط ایران، بنادر و مرزها
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">تحویل سریع</p>
                    <p className="text-emerald-200">در کمترین زمان ممکن</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">حمل مطمئن</p>
                    <p className="text-emerald-200">بیمه بار و جبران خسارت</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
