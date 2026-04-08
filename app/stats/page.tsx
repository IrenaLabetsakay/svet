import type { Metadata } from "next";
import ChartsSection from "@/components/stats/ChartsSection";

export const metadata: Metadata = {
  title: "Статистика — ЭлектроСвет",
  description:
    "Аналитика и показатели компании ЭлектроСвет: динамика проектов и выручки по периодам.",
};

export default function StatsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-slate-900 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Статистика
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Динамика роста компании в цифрах и графиках
          </p>
        </div>
      </section>

      {/* Charts */}
      <section className="bg-slate-900 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChartsSection />
        </div>
      </section>
    </>
  );
}
