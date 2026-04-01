import { Star } from "lucide-react";

const reviews = [
  {
    name: "Александр М.",
    role: "Владелец квартиры",
    text: "Обратились для полной замены проводки в трёхкомнатной квартире. Работу выполнили за 3 дня, аккуратно, без лишнего мусора. Все розетки и автоматы работают отлично. Рекомендую!",
    rating: 5,
  },
  {
    name: "Ольга С.",
    role: "Владелец офиса",
    text: "Нужно было подключить мощное оборудование в офисе и установить новый щиток. Сделали всё быстро, дали гарантию, предоставили все документы. Очень довольны качеством работы.",
    rating: 5,
  },
  {
    name: "Дмитрий К.",
    role: "Владелец частного дома",
    text: "Электрика под ключ в новом доме. От проекта до сдачи. Всё чётко, по смете, без лишних расходов. Приятно работать с профессионалами, которые объясняют что и зачем делают.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-slate-500 text-lg">
            Нас рекомендуют друзьям и возвращаются снова
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center text-amber-400 font-bold text-sm">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{review.name}</div>
                  <div className="text-slate-400 text-xs">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
