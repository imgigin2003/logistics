import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// حل مشکل marker آیکون پیش‌فرض (در Vite لازم است)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const location = [34.349351752378915, 47.21416478946306];

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // چون leaflet فقط باید در مرورگر اجرا بشه
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
        در حال بارگذاری نقشه...
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden">
      <MapContainer
        center={location}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
        className="rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            <div className="text-center">
              <MapPin className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-bold text-gray-900">
                دفتر مرکزی باربری نیلگون خلیج فارس
              </h3>
              <p className="text-sm text-gray-600">
                کیلومتر ۵ جاده کرمانشاه به بیستون، پایانه بزرگ کرمانشاه
              </p>
              <p className="text-xs text-emerald-600 mt-1">پشتیبانی ۲۴ ساعته</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
