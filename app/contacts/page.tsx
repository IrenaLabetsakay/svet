import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contacts/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — ЭлектроСвет",
  description:
    "Свяжитесь с нами любым удобным способом или оставьте заявку на сайте. Перезвоним в течение 15 минут.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (000) 000-00-00",
    href: "tel:+70000000000",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@electrosveet.ru",
    href: "mailto:info@electrosveet.ru",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "г. Ваш город, ул. Примерная, 1",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Режим работы",
    value: "Пн–Вс: 08:00 – 22:00 (аварийная служба 24/7)",
    href: undefined,
  },
];

export default function ContactsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Контакты
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Оставьте заявку или свяжитесь удобным способом — ответим быстро
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3 bg-white border border-slate-100 rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Оставить заявку
              </h2>
              <p className="text-slate-500 text-sm mb-6">
                Заполните форму и мы перезвоним вам в течение 15 минут
              </p>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-6">
                  Наши контакты
                </h2>
                <ul className="space-y-5">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-amber-400" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 mb-0.5">{item.label}</div>
                          <div className="text-slate-800 text-sm font-medium">{item.value}</div>
                        </div>
                      </div>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a href={item.href} className="hover:opacity-80 transition-opacity block">
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-slate-200 rounded-2xl overflow-hidden flex-1 min-h-48 flex items-center justify-center border border-slate-200">
                <div className="text-center text-slate-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Карта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
