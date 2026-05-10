import { motion } from "motion/react";
import { Truck, ShieldCheck, Wallet, CheckCircle2 } from "lucide-react";

const stats = [
  {
    icon: <Truck className="text-cyan-400" />,
    bg: "bg-cyan-500/20",
    title: "Быстрая доставка",
    description: "Привезём ПК уже завтра в любой город"
  },
  {
    icon: <ShieldCheck className="text-fuchsia-400" />,
    bg: "bg-fuchsia-500/20",
    title: "Гарантия 36 мес",
    description: "Только новые комплектующие"
  },
  {
    icon: <Wallet className="text-amber-400" />,
    bg: "bg-amber-500/20",
    title: "0% Переплат",
    description: "Оформление онлайн за 15 минут"
  },
  {
    icon: <CheckCircle2 className="text-emerald-400" />,
    bg: "bg-emerald-500/20",
    title: "Готов к играм",
    description: "Windows и драйвера уже установлены"
  }
];

export default function TrustBlock() {
  return (
    <section id="why-us" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-4 uppercase">ПОЧЕМУ МЫ</h2>
        <p className="text-slate-400 font-medium">Лучший сервис по сборке и продаже игровых систем в Беларуси</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
            className="p-8 glass-card border-white/10 transition-all group"
          >
            <div className={`w-12 h-12 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
