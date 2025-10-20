import React, { useState } from "react";
import { createPageUrl } from "@/utils";
import { useLocation } from "react-router-dom";
import { Phone, MapPin, Truck, Clock, Menu, X } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === createPageUrl("Home");
  const footerBg = `${import.meta.env.BASE_URL}assets/images/footer-bg.jpg`;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (!isHomePage) {
      window.location.href = createPageUrl("Home") + sectionId;
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isHomePage
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to={createPageUrl("Home")}
              onClick={(e) => {
                e.preventDefault();
                if (!isHomePage) {
                  window.location.href = createPageUrl("Home");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="first-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                باربری نیلگون خلیج فارس
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer"
              >
                درباره ما
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer"
              >
                خدمات
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "#testimonials")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer"
              >
                نظرات مشتریان
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors cursor-pointer"
              >
                تماس با ما
              </a>
              <Link
                to={createPageUrl("Review")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                ثبت بازخورد
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-emerald-600 p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              >
                درباره ما
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "#services")}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              >
                خدمات
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, "#testimonials")}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              >
                نظرات مشتریان
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block text-gray-700 hover:text-emerald-600 font-medium py-2 border-b border-gray-100"
              >
                تماس با ما
              </a>
              <Link
                to={createPageUrl("Review")}
                className="block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium text-center transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ثبت بازخورد
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer - بدون تغییر، اما اگر مشکلی داشت، بگو */}
      <footer className="relative bg-emerald-900 text-white py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${footerBg})`,
            transform: `translateY(${window.scrollY * 0.5}px)`, // scrollY رو به window.scrollY تغییر دادم (در کد اصلی scrollY تعریف نشده بود)
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-800/80 to-emerald-700/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  باربری نیلگون خلیج فارس
                </span>
              </div>
              <p className="text-emerald-200 leading-relaxed mb-6">
                مؤسسه اصفهان سابق | تأسیس از سال ۱۳۴۰
              </p>
              <p className="text-emerald-200 leading-relaxed mb-6">
                مدیرعامل و سهام‌دار: رامین پارسه
              </p>
              <p className="text-emerald-200 leading-relaxed mb-6">
                شریک مطمئن شما در حمل و نقل. ما راه‌حل‌هایی ارائه می‌دهیم که
                کسب‌وکار شما را با قابلیت اطمینان، کارایی و پایداری به جلو
                می‌برد.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Phone className="w-4 h-4" />
                  <span>۰۹۱۸۱۳۱۶۴۰۵ | ۰۹۱۸۳۳۴۱۹۵۳</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-200">
                  <Phone className="w-4 h-4" />
                  <span>۰۸۳۳۷۱۰۳۰۷۲ | ۰۸۳۳۷۱۰۳۰۸۱</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">خدمات</h3>
              <div className="space-y-2 text-emerald-200">
                <p>حمل بار تجاری</p>
                <p>حمل ماشین‌آلات</p>
                <p>محصولات کشاورزی</p>
                <p>محصولات پتروشیمی</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">تماس</h3>
              <div className="space-y-2 text-emerald-200">
                <div className="flex items-start gap-2">
                  <MapPin className="w-6 h-6" />
                  <span>
                    کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه بزرگ کرمانشاه
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-5 h-5" />
                  <span> ساعات کاری: شبانه‌روزی </span>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-right border-t border-emerald-800 mt-12 pt-8 text-center text-white-300">
            <p>© ۱۴۰۳ باربری نیلگون خلیج فارس. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
