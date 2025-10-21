import {
  Truck,
  Warehouse,
  Globe2,
  Ship,
  Package,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "حمل بار تجاری",
      description:
        "حمل کلیه بارهای تجاری با ماشین‌های ملکی و تحت پوشش به سراسر ایران.",
      features: ["پیگیری آنلاین", "ماشین‌های مجهز", "تحویل سریع"],
    },
    {
      icon: Warehouse,
      title: "حمل ماشین‌آلات",
      description:
        "حمل ماشین‌آلات سنگین و تجهیزات صنعتی با بالاترین استانداردهای ایمنی.",
      features: ["بیمه کامل", "تجهیزات تخصصی", "نظارت ۲۴ساعته"],
    },
    {
      icon: Globe2,
      title: "بارهای ترافیکی",
      description: "حمل بارهای ترافیکی با رعایت کامل ضوابط و مقررات حمل و نقل.",
      features: ["مسیریابی بهینه", "کاهش هزینه", "آنالیز عملکرد"],
    },
    {
      icon: Ship,
      title: "ارسال به بنادر",
      description: "حمل بار به کلیه بنادر و مناطق آزاد با خدمات ترخیص کامل.",
      features: ["ترخیص کالا", "پوشش بیمه", "حمل چندوجهی"],
    },
    {
      icon: Package,
      title: "محصولات کشاورزی",
      description: "حمل محصولات کشاورزی با تجهیزات ویژه و رعایت شرایط نگهداری.",
      features: ["دمای کنترل شده", "تحویل سریع", "اعلان پیامکی"],
    },
    {
      icon: FileText,
      title: "محصولات پتروشیمی",
      description:
        "حمل محصولات پتروشیمی و سیمان با رعایت استانداردهای بین‌المللی.",
      features: ["مستندسازی", "بهینه‌سازی هزینه", "مدیریت مطابقت"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-xl">
        <AnimatedSection>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "Service",
                position: i + 1,
                name: s.title,
                description: s.description,
                provider: {
                  "@type": "Organization",
                  name: "نیلگون لجستیک",
                  url: "https://nilgoonlogistics.ir",
                },
                areaServed: { "@type": "Place", name: "Iran" },
              })),
            })}
          </script>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">خدمات ما</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              راه‌حل‌های جامع
              <span className="text-emerald-600 block">حمل و نقل</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              از حمل‌های محلی تا مدیریت زنجیره تامین جهانی، ما راه‌حل‌های
              یکپارچه‌ای ارائه می‌دهیم که با نیازهای کسب‌وکار شما رشد می‌کند.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index}>
              <article key={index}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
                          <span className="text-xl text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
