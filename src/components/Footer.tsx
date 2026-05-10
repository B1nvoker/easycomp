import { Github, Instagram, Send } from "lucide-react";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Logo className="h-8" />
          </div>
          <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed mb-6">
            Первый в Беларуси премиальный сервис по сборке игровых систем в честную рассрочку без переплат.
          </p>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-slate-600">Навигация</h4>
          <ul className="space-y-3 text-[11px] text-slate-400 font-black uppercase tracking-widest">
            <li><a href="#popular-builds" className="hover:text-cyan-400 transition-colors">Сборки</a></li>
            <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Почему мы</a></li>
            <li><a href="#trust" className="hover:text-cyan-400 transition-colors">Отзывы</a></li>
            <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Вопросы</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-slate-600">Связь</h4>
          <div className="space-y-4">
            <div>
              <a href="tel:+375333857085" className="text-xl font-display font-black text-white hover:text-cyan-400 transition-colors leading-none tracking-tighter uppercase">+375 (33) 385-70-85</a>
            </div>
            <div>
              <div className="text-[9px] uppercase font-black text-slate-700 mb-1 tracking-widest leading-none">Email</div>
              <a href="mailto:info@easycomp.by" className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-widest italic">info@easycomp.by</a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-6 text-[10px] uppercase tracking-[0.3em] text-slate-600">Юридическая информация</h4>
          <div className="space-y-4 text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
            <p>ИП Сушко Игорь Леонидович</p>
            <p>Юр.адрес: 225413, г. Барановичи, ул. Железнодорожная, д. 46</p>
            <p>Свидетельство № 291676056 от 12.11.2020, Барановичский горисполком</p>
            <p>В торговом реестре с 25 ноября 2020 г., № регистрации 496956</p>
            <p className="text-slate-600 pt-2 border-t border-white/5">
              Уполномоченные рассматривать обращения покупателей (горисполком): <br />
              <span className="text-slate-400">8 (0163) 65-17-13</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-white/5 text-[9px] text-slate-700 font-black uppercase tracking-[0.3em]">
              <div>© 2026 EASYCOMP BY. FOR ALL GAMERS.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all">
      {icon}
    </a>
  );
}
