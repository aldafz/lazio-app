import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001e3c] pt-20">
      <div className="relative z-10 text-center px-4">
        <p className="text-[#87D3F8] font-bold uppercase tracking-[0.3em] mb-4">S.S. Lazio Official Site</p>
        <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-none mb-6">
          AVANTI <span className="text-[#87D3F8]">LAZIO</span>
        </h1>
        <p className="text-white/60 max-w-lg mx-auto uppercase text-xs tracking-[0.2em]">
          Dal 1900 la prima squadra della capitale
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <span className="text-[20rem] md:text-[40rem]">🦅</span>
      </div>
    </section>
  );
}
