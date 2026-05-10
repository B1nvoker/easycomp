import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dark-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-blue/5 blur-[150px] rounded-full scale-110" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-20 border-white/10 flex flex-col lg:flex-row gap-16 items-center rounded-[40px] bg-slate-950/50 backdrop-blur-3xl shadow-2xl">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-display text-5xl md:text-8xl font-black mb-8 leading-[0.9] uppercase tracking-tighter italic text-center lg:text-left">
              ТВОЙ <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">EASYCOMP</span> <br/> ЖДЕТ ТЕБЯ
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-xl font-medium">
              Оставьте заявку и получите бесплатную консультацию специалиста и индивидуальный подбор уже через 5 минут
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Бесплатно</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Одобрение 99%</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Ответим за 5 мин</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[450px]">
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="КАК ВАС ЗОВУТ?" 
                  className="w-full py-5 px-8 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600 text-xs font-black uppercase tracking-widest"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="НОМЕР ТЕЛЕФОНА" 
                  className="w-full py-5 px-8 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500/50 transition-all text-white placeholder:text-slate-600 text-xs font-black uppercase tracking-widest"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] flex items-center justify-center gap-3 mt-8 uppercase text-sm tracking-[0.2em]"
              >
                ЗАКАЗАТЬ РАССЧЕТ
              </motion.button>
              
              <p className="text-[9px] text-slate-600 text-center uppercase font-bold tracking-widest mt-6 bg-white/5 py-2 rounded-full">
                * Ваша конфиденциальность защищена
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
