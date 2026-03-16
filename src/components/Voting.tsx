import React from 'react';

export default function Voting() {
  return (
    <section id="voting" className="py-24 bg-[#001e3c] px-8 border-t border-[#87D3F8]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#87D3F8] text-4xl font-black italic mb-6 tracking-tighter uppercase">VOTA LE TUE LEGGENDE</h2>
        <p className="text-white/70 mb-12 uppercase text-sm tracking-widest max-w-2xl mx-auto">
          Chi merita di entrare nella Hall of Fame? Qual è la tua Best XI di sempre? Fai la tua scelta.
        </p>
        
        {/* Placeholder per il Google Form */}
        <div className="bg-black/50 p-10 border border-[#87D3F8]/20 flex flex-col items-center justify-center gap-6">
          <p className="text-white font-bold uppercase text-lg">MODULO DI VOTO UFFICIALE</p>
          <button className="bg-[#87D3F8] text-[#001e3c] px-12 py-4 font-black uppercase text-sm tracking-widest hover:bg-white transition-colors">
            APRI IL SONDAGGIO
          </button>
          <p className="text-white/40 text-xs uppercase tracking-widest mt-4">
            (Powered by Google Forms - I risultati saranno pubblici)
          </p>
        </div>
      </div>
    </section>
  );
}
