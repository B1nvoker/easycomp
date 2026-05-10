import { useState } from "react";
import { motion } from "motion/react";
import { Calculator as CalcIcon, Terminal } from "lucide-react";

export default function Calculator() {
  const [price, setPrice] = useState(2500);
  const [months, setMonths] = useState(12);
  
  const monthlyPayment = Math.round(price / months);

  return (
    <section id="calculator" className="py-24 px-6 bg-gradient-to-b from-dark-bg to-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-fuchsia-600/20 border border-fuchsia-500/30 rounded-full mb-4">
            <CalcIcon size={14} className="text-fuchsia-400" />
            <span className="text-[10px] font-black uppercase text-fuchsia-400 tracking-[0.2em]">Calculator</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Рассчитайте <br/> платёж</h2>
        </div>

        <div className="glass-card p-8 lg:p-12 border-white/10 relative overflow-hidden">
          {/* Decorative background numbers */}
          <div className="absolute top-0 right-0 opacity-[0.02] font-display text-[200px] leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
            %
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Стоимость ПК</label>
                  <span className="text-xl font-display font-black text-cyan-400">{price} BYN</span>
                </div>
                <input 
                  type="range" 
                  min="800" 
                  max="15000" 
                  step="100"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-full appearance-none cursor-pointer accent-cyan-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Срок (месяцев)</label>
                  <span className="text-xl font-display font-black text-cyan-400">{months}</span>
                </div>
                <div className="flex gap-2">
                  {[3, 6, 12, 18, 24].map((m) => (
                    <button
                      key={m}
                      onClick={() => setMonths(m)}
                      className={`flex-1 py-3 rounded-xl border text-[11px] font-black uppercase tracking-widest transition-all ${
                        months === m 
                          ? "bg-cyan-500 border-cyan-500 text-slate-950" 
                          : "bg-white/5 border-white/10 text-slate-400"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center md:text-left bg-slate-950/80 backdrop-blur-xl rounded-[40px] p-8 border border-white/10 relative shadow-2xl">
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6">Ваш платёж составит</div>
              <div className="flex items-baseline justify-center md:justify-start gap-3 mb-6">
                <motion.span 
                  key={monthlyPayment}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-6xl md:text-7xl font-display font-black text-cyan-400 tracking-tighter"
                >
                  {monthlyPayment}
                </motion.span>
                <span className="text-sm font-black text-slate-400 italic">BYN/мес</span>
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>БЕЗ ПЕРЕПЛАТ</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <Terminal size={14} />
                  <span>БЕЗ СКРЫТЫХ КОМИССИЙ</span>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-slate-950 font-black rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all uppercase text-sm tracking-widest"
              >
                Оформить заявку
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
