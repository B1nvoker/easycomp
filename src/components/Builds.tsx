import { motion } from "motion/react";
import { Cpu, Database, Cpu as Gpu, ChevronRight, Sparkles } from "lucide-react";

const builds = [
  {
    name: "TITAN GAMER",
    tag: "TOP",
    gpu: "RTX 5070",
    cpu: "Ryzen 7 7800X3D",
    ram: "32GB DDR5",
    fps: [
      { game: "CS2", value: "450 FPS" },
      { game: "Warzone", value: "180 FPS" }
    ],
    price: "249 BYN / мес",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "CYBER PRO",
    tag: "PRO",
    gpu: "RTX 4060 Ti",
    cpu: "Intel i5-13400F",
    ram: "16GB DDR4",
    fps: [
      { game: "CS2", value: "320 FPS" },
      { game: "Warzone", value: "135 FPS" }
    ],
    price: "159 BYN / мес",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "ENTRY LEVEL",
    tag: "LIGHT",
    gpu: "RTX 3060",
    cpu: "Intel i5-12400F",
    ram: "16GB DDR4",
    fps: [
      { game: "CS2", value: "240 FPS" },
      { game: "DOTA 2", value: "180 FPS" }
    ],
    price: "89 BYN / мес",
    image: "https://images.unsplash.com/photo-1614018424553-29f84d666a1f?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Builds() {
  return (
    <section id="builds" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 mb-4">
            <Sparkles size={18} />
            <span className="text-sm font-bold uppercase tracking-widest italic leading-none">Premium</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">Готовые <br/> сборки</h2>
        </div>
        <button className="text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
          Весь каталог <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {builds.map((pc, index) => (
          <PCItem key={index} pc={pc} index={index} />
        ))}
      </div>
    </section>
  );
}

function PCItem({ pc, index }: { pc: any, index: number, key?: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] transition-all duration-500 hover:-translate-y-2 border-white/10"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={pc.image} 
          alt={pc.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-fuchsia-600 text-white font-black text-[10px] px-2 py-1 rounded">
          {pc.tag}
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold border border-white/10 text-cyan-400">
          RTX ON
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-2xl font-black mb-6 tracking-tighter uppercase">{pc.name}</h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
            <Gpu size={16} className="text-cyan-400" />
            <span>{pc.gpu}</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
            <Cpu size={16} className="text-slate-600" />
            <span>{pc.cpu}</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
            <Database size={16} className="text-slate-600" />
            <span>{pc.ram}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-8">
          {pc.fps.map((stat: any, i: number) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-2 text-center">
              <div className="text-[9px] text-slate-500 uppercase font-black mb-1">{stat.game}</div>
              <div className="text-sm font-black text-white">{stat.value}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
          <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Рассрочка</div>
          <div className="text-xl font-display font-black text-cyan-400">{pc.price}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-[10px] font-black py-4 rounded-xl shadow-lg hover:brightness-110 transition-all uppercase tracking-widest">
            КУПИТЬ
          </button>
          <button className="bg-white/5 border border-white/10 text-white text-[10px] font-bold py-4 rounded-xl hover:bg-white/10 transition-all uppercase tracking-widest">
            ПОДОБРАТЬ
          </button>
        </div>
      </div>
    </motion.div>
  );
}
