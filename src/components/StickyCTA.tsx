import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function StickyCTA({ onConsultation }: { onConsultation: () => void }) {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-40 md:hidden px-6">
      <motion.button 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Запустить подбор игрового компьютера"
        className="w-full py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-3xl shadow-[0_10px_40px_rgba(6,182,212,0.3)] flex items-center justify-center gap-3 border border-white/20 uppercase text-[10px] tracking-widest"
        onClick={onConsultation}
      >
        <Zap size={16} className="fill-current animate-pulse" />
        <span>Подобрать ПК сейчас</span>
      </motion.button>
    </div>
  );
}
