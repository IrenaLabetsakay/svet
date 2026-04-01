import Link from "next/link";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Zap className="text-amber-400 w-6 h-6" fill="currentColor" />
              <span className="text-white font-bold text-lg">
                Электро<span className="text-amber-400">Свет</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Профессиональные электромонтажные работы под ключ. Гарантия
              качества и безопасности на все виды работ.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Навигация
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Главная" },
                { href: "/services", label: "Услуги" },
                { href: "/about", label: "О нас" },
                { href: "/contacts", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+70000000000"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  +7 (000) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@electrosveet.ru"
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  info@electrosveet.ru
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>г. Ваш город, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ЭлектроСвет. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
