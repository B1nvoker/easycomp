import { motion } from "motion/react";

const steps = [
  { id: "01", title: "Оставьте заявку", desc: "Просто заполните форму или напишите нам в Telegram" },
  { id: "02", title: "Подберём ПК", desc: "Специалист свяжется с вами и предложит лучшие варианты под ваш бюджет" },
  { id: "03", title: "Одобрим рассрочку", desc: "Быстрое онлайн оформление без поездок в банк" },
  { id: "04", title: "Доставка", desc: "Привезём ваш новый ПК прямо к вам домой в любую точку Беларуси" }
];

export default function Steps() {
  return (
    <section id="steps" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Как мы <br/> <span className="text-cyan-400">работаем</span></h2>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-0" />

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-[32px] bg-slate-950 border border-white/10 flex items-center justify-center font-display text-3xl font-black text-white mb-8 group-hover:border-cyan-500 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-700 italic">
              {step.id}
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight mb-3">{step.title}</h3>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed px-4">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
