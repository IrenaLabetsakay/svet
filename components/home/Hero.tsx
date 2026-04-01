import Link from "next/link";
import { Zap, ArrowRight, Phone } from "lucide-react";
import LightningEffect from "@/components/home/LightningEffect";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Soft ambient glow blobs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Animated lightning bolts */}
      <LightningEffect />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            Работаем 24/7 — Аварийный вызов
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Профессиональная{" "}
            <span className="text-amber-400">электрика</span>{" "}
            под ключ
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Электромонтажные работы любой сложности. Опыт 10+ лет, гарантия 2
            года, лицензированные специалисты. Выезд мастера бесплатно.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
            >
              Наши услуги
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-sm">
            {[
              { value: "10+", label: "лет опыта" },
              { value: "500+", label: "объектов" },
              { value: "2 года", label: "гарантия" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-amber-400 font-bold text-2xl">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emergency call strip */}
      <div className="relative bg-amber-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-900">
          <span className="font-semibold text-sm">Аварийная служба — круглосуточно:</span>
          <a href="tel:+70000000000" className="flex items-center gap-1.5 font-bold text-sm hover:underline">
            <Phone className="w-4 h-4" />
            +7 (000) 000-00-00
          </a>
        </div>
      </div>
    </section>
  );
}
