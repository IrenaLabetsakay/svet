import Link from "next/link";
import {
  Wrench,
  Zap,
  Shield,
  Clock,
  Home,
  Building2,
  Lightbulb,
  Settings,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги — ЭлектроСвет",
  description:
    "Полный перечень электромонтажных услуг: замена проводки, установка щитов, подключение оборудования, аварийный выезд.",
};

const services = [
  {
    icon: Wrench,
    title: "Электромонтажные работы",
    description:
      "Прокладка кабелей в стенах и под штукатурку, установка розеток, выключателей, распределительных коробок. Работаем с квартирами, домами и офисными помещениями.",
    price: "от 500 ₽/точка",
  },
  {
    icon: Zap,
    title: "Замена проводки",
    description:
      "Полная или частичная замена устаревшей алюминиевой проводки на медную. Соблюдаем нормы ПУЭ и требования пожарной безопасности. Составляем схему и акт выполненных работ.",
    price: "от 3 500 ₽/комната",
  },
  {
    icon: Shield,
    title: "Установка электрощитков",
    description:
      "Монтаж и замена вводных и квартирных щитков, счётчиков, автоматических выключателей, УЗО и дифавтоматов. Проектирование групп нагрузок.",
    price: "от 5 000 ₽",
  },
  {
    icon: Home,
    title: "Электрика под ключ",
    description:
      "Полная электрификация квартиры, частного дома или офиса с нуля. Разработка проекта, монтаж, сдача с документами. Рассчитываем стоимость по плану помещения.",
    price: "от 800 ₽/м²",
  },
  {
    icon: Clock,
    title: "Аварийный вызов",
    description:
      "Устранение аварийных ситуаций: пробои изоляции, короткие замыкания, отключение электроэнергии, выход из строя щитка. Приедем в течение 60 минут в любое время суток.",
    price: "от 2 000 ₽",
  },
  {
    icon: Lightbulb,
    title: "Освещение",
    description:
      "Монтаж точечных светильников, люстр, бра, LED-лент, умного освещения. Прокладка выделенных линий для мощных светильников.",
    price: "от 400 ₽/точка",
  },
  {
    icon: Settings,
    title: "Подключение бытовой техники",
    description:
      "Подключение стиральных машин, посудомоечных машин, духовых шкафов, кондиционеров, тёплых полов и электроплит с прокладкой выделенной линии.",
    price: "от 1 500 ₽",
  },
  {
    icon: Building2,
    title: "Коммерческие объекты",
    description:
      "Электромонтаж в офисах, магазинах, кафе, производственных помещениях. Прокладка силовых и слаботочных сетей, монтаж серверных стоек.",
    price: "по проекту",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Услуги и цены
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Выполняем все виды электромонтажных работ. Цены ориентировочные —
            точную стоимость назовём после осмотра объекта.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">
                          {service.title}
                        </h3>
                        <span className="text-amber-600 font-semibold text-sm shrink-0 mt-0.5">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-slate-900 rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Не нашли нужную услугу?
            </h2>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto">
              Позвоните или оставьте заявку — уточним детали и назовём точную стоимость.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors"
            >
              Оставить заявку
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
