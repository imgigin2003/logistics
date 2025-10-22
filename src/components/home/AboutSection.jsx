import { Award, Users, Truck, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  const stats = [
    { icon: Users, value: "۸۰٪+", label: "رضایت مشتریان" },
    { icon: Truck, value: "۱۰۰٪", label: "ماشین‌های ملکی" },
    { icon: Globe, value: "سراسری", label: "پوشش ایران" },
    { icon: Award, value: "۸۰+", label: "سال تجربه" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
                <span className="text-sm font-medium">
                  درباره باربری نیلگون خلیج فارس
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                پیشگام در آینده
                <span className="text-emerald-600 block">حمل و نقل پایدار</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                باربری نیلگون خلیج فارس (مؤسسه اصفهان سابق) از سال ۱۳۴۰ در استان
                <strong>کرمانشاه</strong> در صدر نوآوری زنجیره تامین بوده و با
                ترکیب فناوری پیشرفته و مسئولیت زیست‌محیطی، نتایج استثنایی ارائه
                می‌دهد.
              </p>

              <div className="space-y-4 mb-8 text-xl">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      سرعت تحویل
                    </h3>
                    <p className="text-gray-600">
                      تحویل بار در کمترین زمان ممکن با استفاده از مسیرهای بهینه
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      بیمه بار معتبر
                    </h3>
                    <p className="text-gray-600">
                      پوشش کامل بیمه و جبران خسارت در کمترین زمان
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      پیگیری آنلاین
                    </h3>
                    <p className="text-gray-600">
                      امکان پیگیری بار از زمان بارگیری تا تحویل در مقصد
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      پشتیبانی شبانه‌روزی
                    </h3>
                    <p className="text-gray-600">
                      تیم پشتیبانی مشتریان ۲۴ ساعته در خدمت شماست
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet={`${
                    import.meta.env.BASE_URL
                  }assets/images/truck-small.webp`}
                  type="image/webp"
                />
                <source
                  media="(max-width: 1024px)"
                  srcSet={`${
                    import.meta.env.BASE_URL
                  }assets/images/truck-medium.webp`}
                  type="image/webp"
                />
                <source
                  srcSet={`${
                    import.meta.env.BASE_URL
                  }assets/images/truck-large.webp`}
                  type="image/webp"
                />
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }assets/images/truck-medium.webp`}
                  alt="کامیون حمل بار نیلگون خلیج فارس در حال بارگیری در پایانه بزرگ کرمانشاه"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </picture>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mt-20">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-8">
            دستاوردهای نیلگون لجستیک در یک نگاه
          </h3>

          <div className="stats-section grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
