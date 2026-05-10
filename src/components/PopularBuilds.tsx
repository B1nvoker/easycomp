
import React from 'react';
import { motion } from "motion/react";
import { Cpu, Database, Cpu as Gpu, ChevronRight, Sparkles, Zap, ShieldCheck, CreditCard } from "lucide-react";

const popularBuilds = [
  {
    id: "93481",
    name: "TGPC HYPE Flame Aqua 93481 A-X",
    tag: "ULTRA",
    gpu: "NVIDIA GeForce RTX 5070 12 ГБ",
    cpu: "AMD Ryzen 7 9800X3D",
    ram: "32 ГБ DDR5",
    ssd: "1000 ГБ",
    psu: "750 Вт",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "93424",
    name: "TGPC HYPE Flame 93424 A-X",
    tag: "PRO",
    gpu: "AMD Radeon RX 9060 XT 16 ГБ",
    cpu: "AMD Ryzen 5 7500F",
    ram: "32 ГБ DDR5",
    ssd: "1000 ГБ",
    psu: "650 Вт",
    image: "https://images.unsplash.com/photo-1625842268584-8f3bf9ff167c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "93162",
    name: "TGPC Osprey 93162 A-X",
    tag: "GAMER",
    gpu: "NVIDIA GeForce RTX 5060 8 ГБ",
    cpu: "AMD Ryzen 5 5600",
    ram: "32 ГБ DDR4",
    ssd: "1024 ГБ",
    psu: "650 Вт",
    image: "https://images.unsplash.com/photo-1587202376732-817926308043?auto=format&fit=crop&q=80&w=800",
  }
];

export default function PopularBuilds() {
  return (
    <section id="popular-builds" className="py-20 md:py-32 px-6 max-w-7xl mx-auto scroll-mt-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-2 text-cyan-400 mb-4">
            <Sparkles size={18} />
            <span className="text-xs font-black uppercase tracking-[0.3em] italic">Top Choice</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1] italic mb-6">
            Популярные <br className="hidden sm:block" /> <span className="text-cyan-400">Сборки</span>
          </h2>
          <p className="text-slate-400 font-medium text-base md:text-lg italic leading-relaxed">
            Самые востребованные конфигурации этого месяца. Мощность, проверенная временем и геймерами.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {popularBuilds.map((pc, index) => (
          <motion.div
            key={pc.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-fuchsia-600/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative glass-card flex flex-col h-full border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden rounded-[2.5rem] transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]">
              {/* Image Header */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={pc.image} 
                  alt={`Игровой ПК ${pc.name} - ${pc.gpu}, ${pc.cpu}, ${pc.ram}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="800"
                  height="500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="px-3 py-1 bg-cyan-500 text-black font-black text-[9px] uppercase tracking-widest rounded-full">
                    {pc.tag}
                  </div>
                  <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-white font-black text-[9px] uppercase tracking-widest rounded-full">
                    В Наличии
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-black mb-8 tracking-tighter uppercase italic leading-none group-hover:text-cyan-400 transition-colors">
                  {pc.name}
                </h3>

                <div className="grid grid-cols-1 gap-5">
                  <SpecItem icon={<Gpu size={18} />} label="Видеокарта" value={pc.gpu} />
                  <SpecItem icon={<Cpu size={18} />} label="Процессор" value={pc.cpu} />
                  <SpecItem icon={<Database size={18} />} label="Память" value={pc.ram} />
                  <SpecItem icon={<ShieldCheck size={18} />} label="Накопитель" value={pc.ssd} />
                  <SpecItem icon={<Zap size={18} />} label="Блок питания" value={pc.psu} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 group/spec">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover/spec:text-cyan-400 group-hover/spec:border-cyan-500/30 transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[9px] font-black uppercase tracking-widest text-slate-600 mb-0.5">{label}</div>
        <div className="text-sm font-bold text-white/90 tracking-tight">{value}</div>
      </div>
    </div>
  );
}
