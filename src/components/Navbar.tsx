import { motion } from "motion/react";
import { Phone, MessageSquare } from "lucide-react";
import Logo from "./Logo";

export default function Navbar({ onConsultation }: { onConsultation: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-3 border-white/10">
        <div className="flex items-center gap-4">
          <Logo className="h-8 md:h-10" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#quiz" aria-label="Перейти к подбору ПК" className="hover:text-white transition-colors">Подбор ПК</a>
          <a href="#popular-builds" aria-label="Посмотреть популярные сборки" className="hover:text-white transition-colors">Сборки</a>
          <a href="#why-us" aria-label="Узнать почему выбирают нас" className="hover:text-white transition-colors">Почему мы</a>
          <a href="#trust" aria-label="Посмотреть отзывы клиентов" className="hover:text-white transition-colors">Отзывы</a>
          <a href="#faq" aria-label="Часто задаваемые вопросы" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block text-right">
            <div className="text-sm font-bold">+375 (33) 385-70-85</div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onConsultation}
            aria-label="Открыть окно консультации"
            className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <MessageSquare size={14} className="text-cyan-400" />
            Консультация
          </motion.button>
        </div>
      </div>
    </header>
  );
}
