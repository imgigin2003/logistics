import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { PAGES } from "@/config/seo";
import { createPageUrl } from "@/utils";

export default function NotFound() {
  return (
    <>
      <Seo {...PAGES.notFound} noindex />
      <section className="min-h-[60vh] bg-gradient-to-b from-emerald-50 to-white flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            صفحه پیدا نشد
          </h1>
          <p className="text-gray-600 mb-8">
            صفحه‌ای که به دنبال آن هستید وجود ندارد یا جابه‌جا شده است.
          </p>
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full"
          >
            <Link to={createPageUrl("Home")}>بازگشت به صفحه اصلی</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
