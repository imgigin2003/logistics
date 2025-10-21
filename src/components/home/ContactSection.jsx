import { useState } from "react";
import { Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import InteractiveMap from "./InteractiveMap";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("از پیام شما متشکریم! به زودی با شما تماس خواهیم گرفت.");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "تماس با ما - موبایل",
      details: [
        "+989181316405",
        "+989183341953",
        "+989181300370",
        "+989181300369",
      ],
      description: "پشتیبانی ۲۴ ساعته",
    },
    {
      icon: Phone,
      title: "تماس با ما - ثابت",
      details: ["+98337103072", "+98337103081"],
      description: "تضمین شده",
    },
    {
      icon: MapPin,
      title: "آدرس دفتر مرکزی",
      details: ["کیلومتر ۵ جاده کرمانشاه به بیستون", "پایانه بزرگ کرمانشاه"],
      description: "شبانه‌روزی در خدمت شما",
    },
    {
      icon: Clock,
      title: "ساعات کاری",
      details: ["۲۴ ساعته - ۷ روز هفته"],
      description: "پشتیبانی شبانه‌روزی",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6">
              <span className="text-sm font-medium">تماس با ما</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              آماده بهینه‌سازی
              <span className="text-emerald-600 block">
                زنجیره تامین شما هستیم
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              بیایید در مورد اینکه باربری نیلگون خلیج فارس چگونه می‌تواند عملیات
              کسب‌وکار شما را متحول کند، صحبت کنیم. همین امروز برای مشاوره
              رایگان با ما تماس بگیرید.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedSection className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                اطلاعات تماس
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                        <info.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => {
                          const cleanedNumber = detail.replace(/[^\d]/g, "");

                          const localNumber = cleanedNumber.startsWith("98")
                            ? "0" + cleanedNumber.slice(2)
                            : cleanedNumber;

                          return (
                            <a
                              key={idx}
                              href={`tel:${localNumber}`}
                              className="block text-gray-600 text-sm hover:text-emerald-600 transition-colors"
                              dir="ltr"
                            >
                              {detail}
                            </a>
                          );
                        })}
                      </div>
                      <p className="text-xs text-emerald-600 font-medium">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <ErrorBoundary>
                <InteractiveMap />
              </ErrorBoundary>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  پیام خود را برای ما ارسال کنید
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        نام و نام خانوادگی
                      </label>
                      <Input
                        placeholder="احمد احمدی"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        ایمیل
                      </label>
                      <Input
                        type="email"
                        placeholder="ahmad@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        شماره تماس
                      </label>
                      <Input
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">
                        نام شرکت
                      </label>
                      <Input
                        placeholder="شرکت شما"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      پیام
                    </label>
                    <Textarea
                      placeholder="نیازهای حمل و نقل خود را برای ما توضیح دهید..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-xlg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    ارسال پیام
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
