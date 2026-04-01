import { Award, Clock, Shield, ThumbsUp, Users, FileCheck } from "lucide-react";

const advantages = [
  {
    icon: Award,
    title: "Опыт 10+ лет",
    description: "Сотни выполненных объектов — квартиры, дома, офисы, производственные помещения.",
  },
  {
    icon: Shield,
    title: "Гарантия 2 года",
    description: "Даём письменную гарантию на все выполненные работы и использованные материалы.",
  },
  {
    icon: Clock,
    title: "Работаем 24/7",
    description: "Аварийная служба без выходных и праздников. Выезд в течение 60 минут.",
  },
  {
    icon: ThumbsUp,
    title: "Бесплатный выезд",
    description: "Мастер приедет, осмотрит объект и составит смету — без предоплаты и скрытых платежей.",
  },
  {
    icon: Users,
    title: "Лицензированные специалисты",
    description: "Все электрики имеют группу допуска и необходимые удостоверения.",
  },
  {
    icon: FileCheck,
    title: "Официальный договор",
    description: "Работаем по договору с физическими и юридическими лицами. Закрывающие документы.",
  },
];

export default function Advantages() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Качество, безопасность и честность — основа нашей работы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
