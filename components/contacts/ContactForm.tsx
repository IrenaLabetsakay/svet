"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Электромонтажные работы",
  "Замена проводки",
  "Установка электрощитка",
  "Электрика под ключ",
  "Аварийный вызов",
  "Освещение",
  "Подключение бытовой техники",
  "Коммерческий объект",
  "Другое",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send form data to backend / email service
    console.log("Form submitted:", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle className="w-14 h-14 text-green-500" />
        <h3 className="text-2xl font-bold text-slate-900">Заявка отправлена!</h3>
        <p className="text-slate-500 max-w-sm">
          Мы перезвоним вам в течение 15 минут. Спасибо, что выбрали ЭлектроСвет!
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", email: "", service: "", message: "" });
          }}
          className="mt-2 text-amber-600 hover:text-amber-700 font-medium text-sm underline"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+7 (___) ___-__-__"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@mail.ru"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Услуга
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition bg-white"
        >
          <option value="">Выберите услугу...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Описание задачи
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Расскажите подробнее о вашей задаче: тип помещения, объём работ, сроки..."
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 py-4 rounded-lg transition-colors"
      >
        <Send className="w-4 h-4" />
        Отправить заявку
      </button>

      <p className="text-xs text-slate-400 text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
