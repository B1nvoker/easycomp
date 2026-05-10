/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBlock from "./components/TrustBlock";
import Comparison from "./components/Comparison";
import Reviews from "./components/Reviews";
import PopularBuilds from "./components/PopularBuilds";
import Steps from "./components/Steps";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import ConsultationModal from "./components/ConsultationModal";
import NotFound from "./pages/NotFound";
import { motion } from "motion/react";
import { Zap, ShieldCheck } from "lucide-react";

function Landing({ onConsultation }: { onConsultation: () => void }) {
  return (
    <main>
      <Hero onStartQuiz={onConsultation} />
      
      <div className="bg-gradient-to-b from-dark-bg via-dark-bg to-zinc-950">
        <TrustBlock />
        
        {/* GEO SEO Block */}
        <section className="py-24 px-6 border-t border-white/5 overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none italic">
                Бесплатная доставка <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                  По всей Беларуси
                </span>
              </h2>
              <div className="flex flex-wrap gap-3">
                {['Минск', 'Гомель', 'Брест', 'Гродно', 'Витебск', 'Могилев', 'и другие'].map(city => (
                  <span key={city} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Мы доставим ваш новый игровой компьютер в любую точку страны совершенно бесплатно. Наша курьерская служба гарантирует бережную транспортировку и передачу ПК прямо вам в руки. Мы работаем во всех областных центрах и крупных городах РБ.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 glass-card border-cyan-500/20 bg-cyan-500/5"
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase text-white">Доставка 1-2 дня</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Самая быстрая в РБ</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-xs tracking-widest uppercase text-white">Безопасная сделка</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Гарантия результата</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Comparison />
      </div>
      
      <div className="bg-dark-bg">
        <Reviews />
        <PopularBuilds />
        <Steps />
        
        <FAQ />
      </div>
      
      <div id="final-cta">
        <FinalCTA onStartQuiz={onConsultation} />
      </div>

      {/* SEO Text Block */}
      <section className="py-20 px-6 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto text-justify">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-8 italic text-center">Игровые компьютеры в рассрочку в Беларуси</h2>
          <div className="prose prose-invert prose-sm text-slate-400 space-y-6 max-w-none leading-relaxed">
            <p>
              EasyComp — профессиональная сборка мощных игровых компьютеров и ПК в рассрочку по всей Беларуси. Мы создаём современные игровые системы на базе топовых комплектующих от мировых брендов: NVIDIA GeForce RTX 5090 / 5080, Intel Core i9 и AMD Ryzen последнего поколения.
            </p>
            <p>
              Каждый компьютер собирается вручную опытными специалистами и проходит полное стресс-тестирование в течение 48 часов для максимальной стабильности, производительности и высокого FPS в современных играх.
            </p>
            <p>
              Наша цель — сделать мощные игровые ПК доступными каждому. В EasyComp вы можете купить игровой компьютер в рассрочку без переплат с доставкой по Минску, Бресту, Гомелю, Витебску, Могилёву и другим городам Беларуси.
            </p>
            <p>
              Мы предлагаем не просто комплектующие, а полностью готовое решение для игр, стриминга, монтажа и работы. Перед отправкой мы устанавливаем Windows, оптимизируем систему, настраиваем драйверы и обеспечиваем максимальную производительность в популярных играх: CS2, Warzone, Fortnite, GTA V, Cyberpunk 2077 и других.
            </p>
            <p>
              В каталоге EasyComp доступны как готовые игровые сборки RTX, так и индивидуальная сборка ПК под ваш бюджет, задачи и желаемый уровень производительности. На все компьютеры предоставляется официальная гарантия до 36 месяцев и профессиональная поддержка после покупки.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen selection:bg-neon-blue/30 selection:text-black">
        <Navbar onConsultation={() => setIsModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Landing onConsultation={() => setIsModalOpen(true)} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        
        {/* Interactive Elements */}
        <StickyCTA onConsultation={() => setIsModalOpen(true)} />

        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* Global Background Glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </Router>
  );
}

