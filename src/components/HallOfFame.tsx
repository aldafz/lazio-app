import React from 'react';

const LEGENDS = [
  { name: "Giorgio Chinaglia", role: "Long John", year: "Scudetto '74" },
  { name: "Alessandro Nesta", role: "Il Capitano", year: "Scudetto '00" },
  { name: "Beppe Signori", role: "Re Beppe", year: "Capocannoniere" }
];

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="py-24 bg-black px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#87D3F8] text-4xl font-black italic mb-12 tracking-tighter uppercase">Hall of Fame</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {LEGENDS.map((legend, i) => (
            <div key={i} className="group relative overflow-hidden bg-[#001e3c] p-8 border border-[#87D3F8]/20 hover:border-[#87D3F8] transition-all">
              <p className="text-[#87D3F8] text-xs font-bold uppercase mb-2">{legend.year}</p>
              <h3 className="text-2xl font-black text-white uppercase group-hover:scale-105 transition-transform">{legend.name}</h3>
              <p className="text-white/40 uppercase text-xs tracking-widest mt-1">{legend.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
