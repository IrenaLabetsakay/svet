import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-slate-900 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Нужна консультация?
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
          Позвоните нам или оставьте заявку — мастер перезвонит в течение 15 минут
          и ответит на все вопросы бесплатно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+70000000000"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-lg transition-colors text-base w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            +7 (000) 000-00-00
          </a>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base w-full sm:w-auto justify-center"
          >
            Оставить заявку
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
