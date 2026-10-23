import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-xl">
        <AnimatedSection>
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
              <article>
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
