import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Send, RefreshCw, X } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const QUESTIONS = [
  {
    id: "games",
    q: "В какие игры планируете играть?",
    options: ["Киберспорт (CS2, Dota)", "ААА-проекты (Cyberpunk, Elden Ring)", "Всё подряд", "Симуляторы / Стратегии"]
  },
  {
    id: "budget",
    q: "Ваш примерный бюджет?",
    options: ["До 2000 BYN", "2000 - 4000 BYN", "4000 - 7000 BYN", "Максимальная мощь"]
  },
  {
    id: "streaming",
    q: "Нужен ли стриминг или видеомонтаж?",
    options: ["Нет, только игры", "Да, планирую стримить", "Только легкий монтаж", "Профессиональная работа"]
  },
  {
    id: "design",
    q: "Какой дизайн предпочитаете?",
    options: ["Черный с RGB", "Белый минимализм", "Строгий без подсветок", "Компактный корпус"]
  }
];

export default function AISelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleSelect = (option: string) => {
    const newAnswers = { ...answers, [QUESTIONS[step].id]: option };
    setAnswers(newAnswers);
    
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      generateRecommendation(newAnswers);
    }
  };

  const generateRecommendation = async (finalAnswers: any) => {
    setIsTyping(true);
    setResult("");
    
    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      
      const prompt = `Ты - эксперт по игровым ПК в Беларуси. На основе ответов пользователя подбери идеальную конфигурацию (Процессор, Видеокарта, ОЗУ) и дай краткое пояснение почему. 
      Ответы пользователя:
      Игры: ${finalAnswers.games}
      Бюджет: ${finalAnswers.budget}
      Стриминг: ${finalAnswers.streaming}
      Дизайн: ${finalAnswers.design}
      
      Ответь в формате:
      РЕКОМЕНДУЕМАЯ СБОРКА: [Название]
      КОНФИГУРАЦИЯ: ...
      ПОЧЕМУ: ...
      ПРИМЕРНАЯ ЦЕНА В РАССРОЧКУ: ...
      `;

      const res = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt
      });
      
      const text = res.text || "Не удалось сгенерировать ответ.";
      setResult(text);
    } catch (e) {
      setResult("Упс! Не удалось подключиться к нейросети. Но наши менеджеры всё равно знают лучше всех — оставьте заявку!");
    } finally {
      setIsTyping(false);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 hidden md:block">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-white/20"
        >
          <Bot className="text-white" size={32} />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg glass-card p-10 border-white/10 relative shadow-2xl bg-slate-950/80 backdrop-blur-3xl rounded-[40px]"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20">
                  <Sparkles size={24} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl uppercase tracking-tighter italic">AI Configurator</h3>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em]">Neural Advisor</p>
                </div>
              </div>

              {!result ? (
                <div>
                  <div className="mb-8">
                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-2">Step {step + 1} of {QUESTIONS.length}</div>
                    <div className="text-xl font-black uppercase tracking-tight italic">{QUESTIONS[step].q}</div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {QUESTIONS[step].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(opt)}
                        className="w-full p-5 text-left bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all font-black uppercase text-[10px] tracking-widest"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-10 flex gap-2 h-1 bg-white/5 rounded-full overflow-hidden">
                    {QUESTIONS.map((_, i) => (
                      <div key={i} className={`flex-1 transition-all duration-500 ${i <= step ? "bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "bg-white/5"}`} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    {isTyping ? (
                      <div className="flex flex-col items-center justify-center py-12 gap-4 text-cyan-400">
                        <RefreshCw className="animate-spin" size={32} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Анализируем рынок комплектующих...</span>
                      </div>
                    ) : (
                      <div className="text-xs leading-relaxed text-slate-400 whitespace-pre-wrap font-bold uppercase tracking-wider">
                        {result}
                      </div>
                    )}
                  </div>

                  {!isTyping && (
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/5">
                      <button 
                        onClick={reset}
                        className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-slate-400"
                      >
                        <RefreshCw size={14} /> Заново
                      </button>
                      <button 
                        onClick={() => setIsOpen(false)}
                        className="flex-1 py-4 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-2xl uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-xl"
                      >
                        <Send size={14} /> Оставить заявку
                      </button>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
