import Link from "next/link";
import { Wrench, Zap, Shield, Clock, ArrowRight, Home } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Электромонтажные работы",
    description:
      "Полный спектр монтажа: прокладка кабелей, установка розеток, выключателей, светильников и распределительных коробок.",
  },
  {
    icon: Zap,
    title: "Замена проводки",
    description:
      "Замена устаревшей алюминиевой проводки на медную, с соблюдением всех норм ПУЭ и пожарной безопасности.",
  },
  {
    icon: Shield,
    title: "Установка щитов",
    description:
      "Монтаж и замена электрощитков, счётчиков, автоматических выключателей и УЗО. Проектирование групп.",
  },
  {
    icon: Home,
    title: "Электрика под ключ",
    description:
      "Полная электрификация квартиры, дома или офиса с нуля — от проекта до сдачи с документами.",
  },
  {
    icon: Clock,
    title: "Аварийный выезд",
    description:
      "Устранение аварий: пробои, короткие замыкания, отключение электроэнергии. Приедем в течение часа.",
  },
  {
    icon: Wrench,
    title: "Подключение техники",
    description:
      "Подключение стиральных машин, духовых шкафов, кондиционеров, электроплит с прокладкой отдельной линии.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Выполняем все виды электромонтажных работ для частных и юридических лиц
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all group"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Все услуги и цены
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
