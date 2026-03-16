import React from 'react';

const TEAM = [
  { pos: "POR", name: "Angelo Peruzzi" },
  { pos: "DIF", name: "Alessandro Nesta" },
  { pos: "DIF", name: "Giuseppe Wilson" },
  { pos: "DIF", name: "Sinisa Mihajlovic" },
  { pos: "CEN", name: "Dejan Stankovic" },
  { pos: "CEN", name: "Pavel Nedved" },
  { pos: "CEN", name: "Juan Sebastian Veron" },
  { pos: "ATT", name: "Beppe Signori" },
  { pos: "ATT", name: "Giorgio Chinaglia" },
  { pos: "ATT", name: "Hernan Crespo" },
  { pos: "ATT", name: "Reja (Mister)" } // Un mister d'onore
];

export default function BestEleven() {
  return (
    <section id="best-11" className="py-24 bg-black px-8 border-t border-[#87D3F8]/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#87D3F8] text-4xl font-black italic mb-12 tracking-tighter uppercase text-center">BEST XI STORICA</h2>
        
        {/* Schema Tattico Ultra-Semplificato */}
        <div className="bg-[#001e3c] p-10 border border-[#87D3F8]/20 relative">
          
          {/* Sfondo Campo Provvisorio (Linee decorative) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 border-t border-b border-[#87D3F8]/10" />
          <div className="absolute inset-x-1/4 h-full border-l border-r border-[#87D3F8]/10 top-0" />

          {/* Lista Giocatori (In griglia) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 relative z-10">
            {TEAM.map((player, i) => (
              <div key={i} className="flex gap-3 items-center bg-black/40 p-4 border border-[#87D3F8]/5">
                <span className="text-lazio text-sm font-black w-10 text-right uppercase tracking-wider">{player.pos}</span>
                <span className="text-white font-bold uppercase text-lg">{player.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
