import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <section id="why-us" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Почему <span className="text-cyan-400">мы?</span></h2>
        <p className="text-slate-400 font-medium">Мы делаем ставку на качество и поддержку каждого клиента</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="glass-card overflow-x-auto border-white/10">
          <table className="w-full text-left min-w-[500px]">
            <thead>
              <tr className="border-bottom border-white/10">
                <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Особенности</th>
                <th className="p-6 text-[10px] font-black uppercase text-cyan-400 tracking-[0.2em] bg-cyan-500/5 text-center">EASYCOMP</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] text-center">Обычные магазины</th>
              </tr>
            </thead>
            <tbody className="text-[13px] font-bold">
              <Row label="Premium сборки" hyper={true} other="Обычные ПК" />
              <Row label="Кабель-менеджмент" hyper={true} other={false} />
              <Row label="Настройка Windows" hyper={true} other={false} />
              <Row label="Онлайн поддержка" hyper={true} other={false} />
              <Row label="Реальная гарантия" hyper={true} other="Часто проблемы" />
              <Row label="Помощь с апгрейдом" hyper={true} other={false} />
            </tbody>
          </table>
        </div>

        <div className="space-y-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=800" 
              alt="Процесс профессиональной сборки игрового компьютера в EasyComp" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="800"
              height="450"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom p-8">
              <p className="text-white/90 text-sm font-medium mt-auto">
                Каждый компьютер собирается вручную и проходит полное 48-часовое тестирование перед отправкой.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 glass-card border-white/10 shadow-xl">
              <div className="text-3xl font-display font-black text-white mb-1">500+</div>
              <div className="text-[10px] text-cyan-400 uppercase font-black tracking-widest">Собрано ПК</div>
            </div>
            <div className="p-6 glass-card border-white/10 shadow-xl">
              <div className="text-3xl font-display font-black text-white mb-1">4.9/5</div>
              <div className="text-[10px] text-cyan-400 uppercase font-black tracking-widest">Рейтинг</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, hyper, other }: { label: string, hyper: any, other: any }) {
  return (
    <tr className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
      <td className="p-6 text-slate-300">{label}</td>
      <td className="p-6 bg-cyan-500/5 text-center">
        {typeof hyper === 'boolean' ? (
          hyper ? <Check className="text-cyan-400 mx-auto" size={20} /> : <X className="text-white/20 mx-auto" size={20} />
        ) : <span className="text-white font-black">{hyper}</span>}
      </td>
      <td className="p-6 text-center">
        {typeof other === 'boolean' ? (
          other ? <Check className="text-slate-500 mx-auto" size={20} /> : <X className="text-white/20 mx-auto" size={20} />
        ) : <span className="text-slate-500">{other}</span>}
      </td>
    </tr>
  );
}
