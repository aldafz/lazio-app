import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#001e3c]">
      <div className="relative z-10 text-center px-4">
        <h2 className="text-lazio font-bold uppercase tracking-[0.3em] mb-4 animate-fade-in">S.S. Lazio Official Site</h2>
        <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none">
          AVANTI <span className="text-lazio">LAZIO</span>
        </h1>
        <p className="mt-6 text-white/50 max-w-lg mx-auto uppercase text-sm tracking-widest">
          Dal 1900 la prima squadra della capitale.
        </p>
      </div>
      {/* Elemento decorativo dietro il testo */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
        <span className="text-[30rem] font-black text-white selection:bg-transparent">🦅</span>
      </div>
    </section>
  );
}
