"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const projectsData = [
  { month: "Янв", projects: 12 },
  { month: "Фев", projects: 18 },
  { month: "Мар", projects: 25 },
  { month: "Апр", projects: 22 },
  { month: "Май", projects: 30 },
  { month: "Июн", projects: 35 },
  { month: "Июл", projects: 28 },
  { month: "Авг", projects: 33 },
  { month: "Сен", projects: 40 },
  { month: "Окт", projects: 38 },
  { month: "Ноя", projects: 45 },
  { month: "Дек", projects: 42 },
];

const revenueData = [
  { quarter: "Q1", "2024": 820, "2025": 1050 },
  { quarter: "Q2", "2024": 1100, "2025": 1380 },
  { quarter: "Q3", "2024": 980, "2025": 1240 },
  { quarter: "Q4", "2024": 1350, "2025": 1720 },
];

const tooltipStyle = {
  backgroundColor: "#1E293B",
  border: "1px solid #334155",
  borderRadius: "8px",
  color: "#F8FAFC",
};

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Line chart */}
      <div className="bg-slate-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-xl mb-1">Проекты по месяцам</h2>
        <p className="text-slate-400 text-sm mb-6">Количество выполненных объектов в 2025 году</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={projectsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <Tooltip contentStyle={tooltipStyle} />
            <Line
              type="monotone"
              dataKey="projects"
              name="Проектов"
              stroke="#F59E0B"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#F59E0B" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart */}
      <div className="bg-slate-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-xl mb-1">Выручка по кварталам</h2>
        <p className="text-slate-400 text-sm mb-6">Сравнение 2024 и 2025 года, тыс. ₽</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData} barCategoryGap="30%">
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="quarter" tick={{ fill: "#94A3B8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} unit=" т₽" />
            <Tooltip contentStyle={tooltipStyle} />
            <Legend wrapperStyle={{ color: "#94A3B8", fontSize: 13 }} />
            <Bar dataKey="2024" name="2024" fill="#475569" radius={[4, 4, 0, 0]} />
            <Bar dataKey="2025" name="2025" fill="#F59E0B" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
