import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Check, MousePointer2, Monitor, Keyboard, Mouse, Laptop, Wifi, Zap } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: QuizModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    purpose: '',
    installment: null as boolean | null,
    budget: '',
    addons: [] as string[],
    name: '',
    phone: '+375 ',
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const validatePhone = (phone: string) => {
    // Regex for Belarus: +375 (25|29|33|44) XXX-XX-XX
    const re = /^\+375\s\((25|29|33|44)\)\s\d{3}-\d{2}-\d{2}$/;
    return re.test(phone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // Ensure it starts with +375
    if (!value.startsWith('+375 ')) {
      value = '+375 ';
    }

    // Strip non-digits after +375
    const digits = value.slice(5).replace(/\D/g, '').slice(0, 9);
    
    // Apply mask: (XX) XXX-XX-XX
    let masked = '+375 ';
    if (digits.length > 0) {
      masked += '(' + digits.slice(0, 2);
      if (digits.length >= 2) masked += ') ';
      if (digits.length > 2) masked += digits.slice(2, 5);
      if (digits.length >= 5) masked += '-';
      if (digits.length > 5) masked += digits.slice(5, 7);
      if (digits.length >= 7) masked += '-';
      if (digits.length > 7) masked += digits.slice(7, 9);
    }
    
    setFormData({ ...formData, phone: masked });
  };

  const handleSubmit = async () => {
    if (!formData.name || !validatePhone(formData.phone)) return;
    
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          // Reset for next time
          setStep(1);
          setIsSuccess(false);
          setFormData({
            purpose: '',
            installment: null as boolean | null,
            budget: '',
            addons: [] as string[],
            name: '',
            phone: '',
          });
        }, 3000);
      } else {
        setErrorMsg(data.details || data.error || 'Ошибка при отправке');
      }
    } catch (error) {
      console.error('Error sending lead:', error);
      setErrorMsg('Сетевая ошибка. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePurpose = (val: string) => {
    setFormData({ ...formData, purpose: val });
    nextStep();
  };

  const handleInstallment = (val: boolean) => {
    setFormData({ ...formData, installment: val });
    nextStep();
  };

  const handleBudget = (val: string) => {
    setFormData({ ...formData, budget: val });
    nextStep();
  };

  const toggleAddon = (val: string) => {
    setFormData(prev => ({
      ...prev,
      addons: prev.addons.includes(val) 
        ? prev.addons.filter(a => a !== val) 
        : [...prev.addons, val]
    }));
  };

  const isLastStep = step === 5;

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">Для чего нужен компьютер?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <QuizCard icon="🎮" label="Игры" onClick={() => handlePurpose('Игры')} selected={formData.purpose === 'Игры'} />
              <QuizCard icon="🎥" label="Монтаж / стриминг" onClick={() => handlePurpose('Монтаж / стриминг')} selected={formData.purpose === 'Монтаж / стриминг'} />
              <QuizCard icon="💼" label="Работа / офис" onClick={() => handlePurpose('Работа / офис')} selected={formData.purpose === 'Работа / офис'} />
              <QuizCard icon="🎨" label="Дизайн / 3D" onClick={() => handlePurpose('Дизайн / 3D')} selected={formData.purpose === 'Дизайн / 3D'} />
              <QuizCard icon="🔥" label="Всё сразу" onClick={() => handlePurpose('Всё сразу')} selected={formData.purpose === 'Всё сразу'} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">Нужна рассрочка?</h3>
            <div className="grid grid-cols-2 gap-4">
              <QuizCard icon="✅" label="Да" onClick={() => handleInstallment(true)} selected={formData.installment === true} />
              <QuizCard icon="❌" label="Нет" onClick={() => handleInstallment(false)} selected={formData.installment === false} />
            </div>
          </div>
        );
      case 3:
        const budgetOptions = formData.installment 
          ? ['до 59 рублей в месяц', 'до 89 рублей в месяц', 'до 109 рублей в месяц', 'от 120 рублей в месяц']
          : ['до 1999 рублей', 'до 2599 рублей', 'до 3109 рублей', 'от 3500 рублей'];
        
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">Какой бюджет?</h3>
            <div className="grid grid-cols-1 gap-4">
              {budgetOptions.map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleBudget(opt)}
                  className={`w-full p-6 bg-white/5 border rounded-2xl text-left transition-all flex items-center justify-between group ${formData.budget === opt ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 hover:border-white/20'}`}
                >
                  <span className="font-bold text-slate-200">{opt}</span>
                  <ChevronRight size={18} className="text-slate-600 group-hover:text-cyan-400" />
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        const addons = [
          { id: 'monitor', label: 'Монитор', icon: <Monitor size={18} /> },
          { id: 'keyboard', label: 'Клавиатура', icon: <Keyboard size={18} /> },
          { id: 'mouse', label: 'Мышка', icon: <Mouse size={18} /> },
          { id: 'windows', label: 'Windows', icon: <Laptop size={18} /> },
          { id: 'wifi', label: 'Wi-Fi', icon: <Wifi size={18} /> },
          { id: 'backlight', label: 'Подсветка', icon: <Zap size={18} /> },
        ];
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-8">Нужны ли дополнительные опции?</h3>
            <div className="grid grid-cols-2 gap-4">
              {addons.map(a => (
                <button 
                  key={a.id}
                  onClick={() => toggleAddon(a.label)}
                  className={`p-4 bg-white/5 border rounded-2xl flex items-center gap-4 transition-all ${formData.addons.includes(a.label) ? 'border-fuchsia-500 bg-fuchsia-500/10' : 'border-white/10'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${formData.addons.includes(a.label) ? 'bg-fuchsia-500 text-white' : 'bg-white/5 text-slate-500'}`}>
                    {formData.addons.includes(a.label) ? <Check size={14} strokeWidth={4} /> : a.icon}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-300">{a.label}</span>
                </button>
              ))}
            </div>
            <button 
              onClick={nextStep}
              className="w-full mt-8 py-5 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-2xl uppercase text-xs tracking-[0.2em] shadow-lg"
            >
              Далее
            </button>
          </div>
        );
      case 5:
        if (isSuccess) {
          return (
            <div className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
              >
                <Check size={40} strokeWidth={3} />
              </motion.div>
              <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4 italic">Заявка принята!</h3>
              <p className="text-slate-400 font-medium max-w-xs mx-auto">Мы свяжемся с вами в течение 15 минут для уточнения деталей</p>
            </div>
          );
        }
        return (
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4 italic">Спасибо за ответы!</h3>
              <p className="text-slate-400 font-medium">Оставьте ваши контакты, чтобы мы могли отправить вам расчет и проконсультировать</p>
            </div>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="ВАШЕ ФИО" 
                className="w-full py-5 px-8 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-cyan-500 transition-all text-white placeholder:text-slate-600 text-xs font-black uppercase tracking-widest"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                disabled={isSubmitting}
              />
              <input 
                type="tel" 
                placeholder="+375 (__) ___-__-__" 
                className={`w-full py-5 px-8 bg-white/5 border rounded-2xl focus:outline-none transition-all text-white placeholder:text-slate-600 text-xs font-black uppercase tracking-widest ${
                  formData.phone.length > 5 && !validatePhone(formData.phone) && formData.phone.length < 19
                    ? 'border-fuchsia-500/50' 
                    : 'border-white/10 focus:border-cyan-500'
                }`}
                value={formData.phone}
                onChange={handlePhoneChange}
                disabled={isSubmitting}
              />
              
              {errorMsg && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] font-bold text-rose-500 uppercase tracking-widest bg-rose-500/10 py-3 px-6 rounded-xl border border-rose-500/20"
                >
                  ⚠️ {errorMsg}
                </motion.p>
              )}

              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !formData.name || !validatePhone(formData.phone)}
                className="w-full py-6 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-black rounded-2xl uppercase text-sm tracking-[0.2em] shadow-xl shadow-cyan-500/20 disabled:opacity-40 disabled:grayscale disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ОТПРАВКА...
                  </div>
                ) : (
                  "ОТПРАВИТЬ ЗАЯВКУ"
                )}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl glass-card border-white/10 bg-slate-950/80 p-8 md:p-12 overflow-hidden"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Progress Bar */}
        {step < 5 && (
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 italic">Шаг {step} из 4</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">{Math.round((step/4)*100)}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-600"
                initial={{ width: 0 }}
                animate={{ width: `${(step/4)*100}%` }}
              />
            </div>
          </div>
        )}

        {/* Back Button */}
        {step > 1 && step < 5 && (
          <button 
            onClick={prevStep}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <ChevronLeft size={14} /> Назад
          </button>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function QuizCard({ icon, label, onClick, selected }: { icon: string, label: string, onClick: () => void, selected?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`relative p-6 bg-white/5 border rounded-[32px] transition-all flex flex-col items-center gap-4 text-center group ${selected ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 hover:border-white/20'}`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 leading-tight">{label}</span>
      {selected && <div className="absolute top-4 right-4 text-cyan-400"><Check size={16} strokeWidth={4} /></div>}
    </button>
  );
}
