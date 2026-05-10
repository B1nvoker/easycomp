import { motion } from "motion/react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="text-center max-w-xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative -mt-10 mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">Страница не найдена</h2>
          <p className="text-slate-400 font-medium max-w-sm mx-auto">
            Похоже, этот системный блок пуст. Возможно, ссылка устарела или страница была перенесена.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/" 
            className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-black rounded-2xl uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
          >
            <Home size={16} />
            На главную
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft size={16} />
            Вернуться назад
          </button>
        </motion.div>
      </div>
    </div>
  );
}
