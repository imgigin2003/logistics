import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "علی رضایی",
      title: "مدیر زنجیره تامین",
      company: "شرکت صنعتی پارس",
      rating: 5,
      text: "بسیار سریع و مطمئن. از همکاری با باربری نیلگون خلیج فارس کاملاً راضی‌ام. تیم حرفه‌ای و خدمات عالی.",
    },
    {
      name: "مهدی کریمی",
      title: "مدیر عملیات",
      company: "شرکت بازرگانی کیان",
      rating: 5,
      text: "حمل بار صنعتی من بدون هیچ مشکلی انجام شد. خدمات عالی و پشتیبانی سریع. قیمت‌ها هم بسیار منصفانه است.",
    },
    {
      name: "زهرا احمدی",
      title: "مسئول لجستیک",
      company: "گروه تولیدی آریا",
      rating: 5,
      text: "پیگیری آنلاین بار و اطلاع‌رسانی به‌موقع از ویژگی‌های برجسته این باربری است. واقعاً حرفه‌ای کار می‌کنند.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">نظرات مشتریان</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              مشتریان درباره ما
              <span className="text-emerald-600 block">چه می‌گویند</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              فقط حرف ما را قبول نکنید. ببینید رهبران صنعت درباره تجربه کار با
              باربری نیلگون خلیج فارس چه می‌گویند.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 text-xl">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -right-2 w-8 h-8 text-emerald-200" />
                    <p className="text-gray-600 leading-relaxed pr-6">
                      «{testimonial.text}»
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-emerald-600 font-medium mt-1">
                      {testimonial.title}
                    </p>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-2xl shadow-lg">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">امتیاز ۵/۵</p>
                <p className="text-xl text-gray-600">بر اساس بیش از ۲۰۰ نظر</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
