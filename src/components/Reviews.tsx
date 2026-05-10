import { motion } from "motion/react";
import { Play, Star } from "lucide-react";

const reviews = [
  {
    name: "Дмитрий",
    model: "TITAN RTX Build",
    comment: "Не ожидал что всё будет настолько быстро. На следующий день уже играл. Сборка идеальная, кабель-менеджмент на высоте.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Алексей",
    model: "EASY PRO EVO",
    comment: "Рассрочка реально без переплат. Оформили за 10 минут онлайн. Довезли в Гомель за сутки. Рекомендую пацанов!",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Мария",
    model: "CUSTOM WHITE PC",
    comment: "Очень красивый корпус, всё светится как и хотела. FPS в киберпанке выдаёт больше чем ожидала. Спасибо!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Иван",
    model: "GAMER PRO X",
    comment: "Лучший сервис. Помогли выбрать комплектующие под мой бюджет. Всё работает тихо и быстро.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Сергей",
    model: "WORKSTATION 3000",
    comment: "Брал для монтажа видео. Всё летает. Качество сборки на 10/10. Доставка до Бреста очень оперативная.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Елена",
    model: "COMPACT GAMER",
    comment: "Маленький, мощный и очень тихий. Именно то, что я искала. Менеджеры очень вежливые.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Reviews() {
  return (
    <section id="trust" className="py-32 px-6 overflow-hidden max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Нас <span className="text-cyan-400">любят</span></h2>
        <div className="flex items-center justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
          <span className="ml-2 font-black text-sm uppercase tracking-widest text-slate-500">рейтинг 5.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass-card p-6 h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-500/30 p-0.5 group-hover:border-cyan-500 transition-colors duration-500">
                  <img 
                    src={rev.image} 
                    alt={rev.name} 
                    className="w-full h-full object-cover rounded-full transition-all duration-700 group-hover:scale-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-black text-sm uppercase tracking-tight">{rev.name}</div>
                  <div className="text-cyan-400 text-[9px] font-black uppercase tracking-widest">{rev.model}</div>
                </div>
              </div>
              
              <div className="space-y-3 px-2">
                <p className="text-slate-400 font-medium text-xs leading-relaxed italic">
                  «{rev.comment}»
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
