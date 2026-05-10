import { motion } from "motion/react";
import { Zap, ShieldCheck, CreditCard, Play } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-fuchsia-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full mb-8">
            <div className="w-5 h-5 bg-gradient-to-tr from-cyan-400 to-fuchsia-600 rounded-full flex items-center justify-center">
              <Zap size={10} className="text-white fill-white" />
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase text-white/80">№1 В БЕЛАРУСИ</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase italic">
            ИГРОВЫЕ ПК <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">В РАССРОЧКУ</span> <br/>
            БЕЗ ПЕРЕПЛАТ
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
            Мощные RTX сборки для игр, стриминга и работы. <br />
            Плати потом — <span className="text-white italic underline underline-offset-4 decoration-fuchsia-500/50">играй сейчас!</span>
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <FeatureIcon icon={<ShieldCheck className="text-cyan-400" size={20} />} text="Без первого взноса" />
            <FeatureIcon icon={<Zap className="text-fuchsia-400" size={20} />} text="Гарантия до 3 лет" />
            <FeatureIcon icon={<CreditCard className="text-cyan-400" size={20} />} text="Доставка за 1 день" />
            <FeatureIcon icon={<Play className="text-fuchsia-400" size={20} />} text="Одобрение за 15 мин" />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-6 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
              onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ПОДОБРАТЬ ПК <span className="text-xl">→</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-6 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold rounded-3xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 uppercase text-sm tracking-widest"
            >
              СМОТРЕТЬ СБОРКИ <span className="opacity-50">▷</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative z-10 w-full">
            <img 
              src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200" 
              alt="Premium Gaming PC" 
              className="w-full h-auto object-contain rounded-[40px] shadow-[0_0_100px_rgba(0,229,255,0.3)] border border-white/5"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Specs */}
            <div className="absolute top-[-5%] right-[5%] z-20">
              <FloatingBadge title="RTX 5070" subtitle="12GB GDDR7" />
            </div>
            <div className="absolute top-[15%] left-[-10%] z-20">
              <FloatingBadge title="144+ FPS" subtitle="Cyberpunk 2077" color="cyan" />
            </div>
            <div className="absolute bottom-[40%] right-[-10%] z-20">
              <FloatingBadge title="32GB" subtitle="DDR5 6000MHz" />
            </div>
            <div className="absolute bottom-[20%] right-[0%] z-20">
              <FloatingBadge title="1TB" subtitle="NVMe SSD" color="fuchsia" />
            </div>
            <div className="absolute bottom-[5%] left-[20%] z-20">
              <FloatingBadge title="Ryzen 7" subtitle="7800X3D" />
            </div>
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-full w-full bg-cyan-500/20 blur-[150px] -z-10 rounded-full scale-110 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureIcon({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex flex-col gap-3 group">
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
        {icon}
      </div>
      <span className="text-[11px] font-black uppercase tracking-tight text-white/60 leading-tight">{text}</span>
    </div>
  );
}

function FloatingBadge({ title, subtitle, color = "cyan" }: any) {
  const colorClass = color === "cyan" ? "text-cyan-400" : "text-fuchsia-400";
  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="glass-card px-4 py-3 border-white/10 shadow-2xl backdrop-blur-2xl bg-black/40"
    >
      <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${colorClass}`}>{title}</div>
      <div className="text-[11px] font-bold whitespace-nowrap text-white/80">{subtitle}</div>
    </motion.div>
  );
}
