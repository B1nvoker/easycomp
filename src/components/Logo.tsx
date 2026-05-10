import React from 'react';

export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className} group`}>
      <img 
        src="https://storage.googleapis.com/test-proxy-public/ais-artifact-d18e578c-0f9c-4384-903b-df9c1a5b8f9a/logo_easycomp_transparent.png" 
        alt="EasyComp — Магазин игровых компьютеров в Беларуси"
        className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback if image fails to load
          e.currentTarget.style.display = 'none';
          e.currentTarget.nextElementSibling?.classList.remove('hidden');
        }}
      />
      <div className="hidden flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-fuchsia-600 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
        <div className="absolute inset-0.5 bg-[#050505] rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
        <span className="relative font-display font-black text-xl italic text-white tracking-tighter">E</span>
      </div>
    </div>
  );
}
