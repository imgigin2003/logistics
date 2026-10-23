import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Globe, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

export default function HeroSection() {
  const imageRef = useRef(null);

  // Parallax: write the transform directly instead of re-rendering on every scroll
  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${window.scrollY * 0.5}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[120vh] md:h-screen overflow-hidden items-center">
      {/* Preload the LCP image; media queries mirror the <picture> sources below */}
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={`${import.meta.env.BASE_URL}assets/images/hero-small.webp`}
          type="image/webp"
          media="(max-width: 480px)"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={`${import.meta.env.BASE_URL}assets/images/hero-medium.webp`}
          type="image/webp"
          media="(min-width: 481px) and (max-width: 768px)"
          fetchpriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={`${import.meta.env.BASE_URL}assets/images/hero-large.webp`}
          type="image/webp"
          media="(min-width: 769px)"
          fetchpriority="high"
        />
      </Helmet>
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <picture className="absolute inset-0">
          <source
            media="(max-width: 480px)"
            srcSet={`${import.meta.env.BASE_URL}assets/images/hero-small.webp`}
            type="image/webp"
          />
          <source
            media="(max-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}assets/images/hero-medium.webp`}
            type="image/webp"
          />
          <source
            srcSet={`${import.meta.env.BASE_URL}assets/images/hero-large.webp`}
            type="image/webp"
          />
          <img
            src={`${import.meta.env.BASE_URL}assets/images/hero-medium.webp`}
            alt="انبار کالا با قفسه‌ها و جعبه‌های آماده ارسال - خدمات باربری و لجستیک در سراسر ایران"
            width={800}
            height={533}
            fetchpriority="high"
            decoding="async"
            ref={imageRef}
            className="w-full h-full object-cover"
          />
        </picture>
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
                پایانه بار کرمانشاه
                <span className="block text-emerald-300">نیلگون خلیج‌فارس</span>
                <span className="block text-white text-4xl md:text-5xl mt-2">
                  (مؤسسه اصفهان سابق)
                </span>
              </h1>

              <p className="text-xl text-emerald-100 leading-relaxed mb-8 max-w-2xl">
                نیلگون لجستیک، با سابقه‌ای بیش از ۶۰ سال در خدمات{" "}
                <strong>باربری کرمانشاه</strong>، حمل‌ونقل بین‌شهری و درون‌شهری
                را با ناوگان مجهز، بیمه معتبر و پشتیبانی ۲۴ ساعته ارائه می‌دهد.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-xlg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                >
                  <a href="#contact">
                    همین حالا حمل بار خود را شروع کنید
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="first-heading font-semibold">پوشش سراسری</p>
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
                    <p className="first-heading font-semibold">تحویل سریع</p>
                    <p className="text-emerald-200">در کمترین زمان ممکن</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="first-heading font-semibold">حمل مطمئن</p>
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
