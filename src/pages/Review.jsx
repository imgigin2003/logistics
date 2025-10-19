import { useState } from "react";
import { Star, ArrowRight, Send, CheckCircle } from "lucide-react";
import { Reviews } from "@/entities/Review";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import AnimatedSection from "@/components/home/AnimatedSection";

export default function ReviewPage() {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    email: "",
    phone: "",
    service_type: "",
    rating: 0,
    review_text: "",
    would_recommend: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Reviews.entities.Review.create(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting review:", error);
    }

    setIsSubmitting(false);
  };

  const serviceTypes = [
    { value: "freight_transport", label: "حمل بار تجاری" },
    { value: "warehousing", label: "حمل ماشین‌آلات" },
    { value: "supply_chain", label: "بارهای ترافیکی" },
    { value: "international_shipping", label: "ارسال به بنادر" },
    { value: "last_mile_delivery", label: "محصولات کشاورزی" },
    { value: "customs_clearance", label: "محصولات پتروشیمی" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-6">
        <AnimatedSection>
          <Card className="max-w-md w-full border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                متشکریم!
              </h2>
              <p className="text-gray-600 mb-6">
                نظر شما با موفقیت ثبت شد. از بازخورد شما سپاسگزاریم و از آن برای
                بهبود خدمات‌مان استفاده خواهیم کرد.
              </p>
              <Link to={createPageUrl("Home")}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full">
                  بازگشت به صفحه اصلی
                </Button>
              </Link>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link to={createPageUrl("Home")}>
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">ثبت بازخورد</h1>
            <p className="text-gray-600">
              تجربه خود را با باربری نیلگون خلیج فارس به اشتراک بگذارید
            </p>
          </div>
        </div>

        <AnimatedSection>
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                نظر شما برای ما مهم است
              </CardTitle>
              <p className="text-emerald-100">
                با به اشتراک گذاشتن بازخورد صادقانه خود درباره تجربه‌تان، به ما
                در بهبود خدمات‌مان کمک کنید.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      نام شرکت *
                    </label>
                    <Input
                      placeholder="نام شرکت شما"
                      value={formData.company_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          company_name: e.target.value,
                        })
                      }
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      نام و نام خانوادگی *
                    </label>
                    <Input
                      placeholder="نام کامل شما"
                      value={formData.contact_person}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contact_person: e.target.value,
                        })
                      }
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      ایمیل *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      required
                    />
                  </div>
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
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    نوع خدمت *
                  </label>
                  <Select
                    value={formData.service_type}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service_type: value })
                    }
                  >
                    <SelectTrigger className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500">
                      <SelectValue placeholder="خدمتی که استفاده کردید را انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceTypes.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-4 block">
                    امتیاز کلی *
                  </label>
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, rating: star })
                        }
                        className="transition-colors duration-200"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= formData.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 hover:text-yellow-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {formData.rating === 1 && "ضعیف"}
                    {formData.rating === 2 && "متوسط"}
                    {formData.rating === 3 && "خوب"}
                    {formData.rating === 4 && "خیلی خوب"}
                    {formData.rating === 5 && "عالی"}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    نظر شما *
                  </label>
                  <Textarea
                    placeholder="درباره تجربه خود با باربری نیلگون خلیج فارس بنویسید. چه کارهایی را خوب انجام دادیم؟ چگونه می‌توانیم بهتر شویم؟"
                    rows={6}
                    value={formData.review_text}
                    onChange={(e) =>
                      setFormData({ ...formData, review_text: e.target.value })
                    }
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                    required
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="recommend"
                    checked={formData.would_recommend}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        would_recommend: e.target.checked,
                      })
                    }
                    className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                  />
                  <label
                    htmlFor="recommend"
                    className="text-sm font-medium text-gray-700"
                  >
                    باربری نیلگون خلیج فارس را به دیگران توصیه می‌کنم
                  </label>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <Button
                    type="submit"
                    disabled={isSubmitting || formData.rating === 0}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-xlg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        در حال ارسال بازخورد...
                      </>
                    ) : (
                      <>
                        ثبت بازخورد
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
