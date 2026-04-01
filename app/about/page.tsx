import Link from "next/link";
import { Award, Users, Star, ShieldCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас — ЭлектроСвет",
  description:
    "Компания ЭлектроСвет — профессиональные электромонтажные работы с 2014 года. Опытная команда, лицензии, гарантия качества.",
};

const stats = [
  { icon: Award, value: "10+", label: "лет на рынке" },
  { icon: Users, value: "500+", label: "выполненных объектов" },
  { icon: Star, value: "4.9", label: "средняя оценка" },
  { icon: ShieldCheck, value: "2 года", label: "гарантия работ" },
];

const values = [
  {
    title: "Безопасность",
    description:
      "Строго соблюдаем нормы ПУЭ и требования пожарной безопасности. Используем только сертифицированные материалы и кабели.",
  },
  {
    title: "Прозрачность",
    description:
      "Составляем подробную смету до начала работ. Никаких скрытых доплат и изменений стоимости без согласования.",
  },
  {
    title: "Аккуратность",
    description:
      "Работаем бережно — защищаем мебель и отделку, убираем за собой весь мусор, не оставляем следов пребывания.",
  },
  {
    title: "Надёжность",
    description:
      "Даём письменную гарантию на все работы. Если что-то выйдет из строя по нашей вине — устраним за наш счёт.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            О компании
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Профессиональные электромонтажные работы с 2014 года
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Компания <strong className="text-slate-900">ЭлектроСвет</strong> основана в 2014 году
                  группой опытных электриков, которые хотели предоставлять качественные услуги
                  по честным ценам. За 10 лет мы выросли из небольшой бригады в полноценную
                  компанию с командой сертифицированных специалистов.
                </p>
                <p>
                  Мы работаем с частными лицами и бизнесом: делаем электрику в квартирах
                  и частных домах, торговых помещениях, офисах и производственных объектах.
                  Каждый проект для нас — это ответственность перед людьми, которые будут
                  пользоваться этой электрикой каждый день.
                </p>
                <p>
                  Все наши электрики имеют группу допуска, регулярно проходят повышение
                  квалификации и знают актуальные требования ПУЭ. Компания работает
                  официально, заключает договор и выдаёт закрывающие документы.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-slate-50 rounded-xl p-6 text-center border border-slate-100"
                  >
                    <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Наши принципы
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
              >
                <div className="w-2 h-8 bg-amber-400 rounded-full mb-4" />
                <h3 className="font-bold text-slate-900 text-lg mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Готовы доверить нам свой объект?
          </h2>
          <p className="text-slate-500 text-lg mb-8 max-w-lg mx-auto">
            Оставьте заявку, и мы свяжемся с вами в течение 15 минут
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Связаться с нами
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
