import React from "react";
import { Link } from "react-router-dom";
import { Home, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center">
            <Truck className="w-10 h-10 text-emerald-600" />
          </div>
        </div>

        <h1 className="text-6xl md:text-9xl font-bold text-emerald-600 mb-4">
          ۴۰۴
        </h1>

        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          صفحه مورد نظر یافت نشد
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              بازگشت به صفحه اصلی
            </Link>
          </Button>

          <Button asChild variant="outline">
            <a href="#contact" className="flex items-center gap-2">
              تماس با ما
            </a>
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>باربری نیلگون خلیج فارس - خدمات حمل بار مطمئن در سراسر ایران</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
