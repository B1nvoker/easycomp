import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Есть ли переплата в рассрочку?",
    a: "Нет, мы сотрудничаем с крупнейшими банками Беларуси и предлагаем честную рассрочку 0% без скрытых комиссий и страховок."
  },
  {
    q: "Можно ли оформить без первого взноса?",
    a: "Да, большинство наших программ позволяют забрать компьютер с нулевым первым взносом. Первый платеж будет только через месяц."
  },
  {
    q: "Можно ли изменить сборку под себя?",
    a: "Конечно! Наши менеджеры помогут изменить любые комплектующие (видеокарту, память, корпус) или собрать ПК полностью с нуля под ваши задачи."
  },
  {
    q: "Как работает доставка по Беларуси?",
    a: "Мы доставляем собственной курьерской службой. В Минске — в день заказа, по Беларуси — на следующий день до дверей."
  },
  {
    q: "Какую гарантию вы даете?",
    a: "На все сборки действует официальная гарантия от 12 до 36 месяцев на каждый компонент в отдельности и на всю систему целиком."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-cyan-400 mb-4">
          <HelpCircle size={20} />
          <span className="font-black uppercase tracking-[0.3em] text-[10px]">Information</span>
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">Часто задаваемые вопросы</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass-card border-white/10 overflow-hidden bg-white/[0.02]">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/[0.03] transition-colors"
            >
              <span className="font-black text-sm uppercase tracking-tight pr-8">{faq.q}</span>
              <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                {openIndex === index ? <Minus size={16} className="text-cyan-400" /> : <Plus size={16} className="text-slate-500" />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 text-slate-400 font-medium text-xs leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
