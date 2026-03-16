import React from 'react';

const LEGENDS = [
  { 
    name: "Giorgio Chinaglia", 
    role: "Long John", 
    year: "Scudetto '74",
    // Immagine iconica di Chinaglia con la maglia bandiera
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Giorgio_Chinaglia_Lazio_1973-74.jpg/440px-Giorgio_Chinaglia_Lazio_1973-74.jpg" 
  },
  { 
    name: "Alessandro Nesta", 
    role: "Il Capitano", 
    year: "Scudetto '00",
    // Nesta che solleva lo scudetto
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Alessandro_Nesta_Lazio_2000.jpg/440px-Alessandro_Nesta_Lazio_2000.jpg"
  },
  { 
    name: "Beppe Signori", 
    role: "Re Beppe", 
    year: "Capocannoniere",
    // Esultanza classica di Signori
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Giuseppe_Signori_Lazio_1994.jpg/440px-Giuseppe_Signori_Lazio_1994.jpg"
  }
];

export default function HallOfFame() {
  return (
    <section id="hall-of-fame" className="py-24 bg-black px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#87D3F8] text-4xl font-black italic mb-12 tracking-tighter uppercase">Hall of Fame</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {LEGENDS.map((legend, i) => (
            <div key={i} className="group relative overflow-hidden bg-[#001e3c] border border-[#87D3F8]/10 hover:border-[#87D3F8] transition-all duration-300">
              {/* Contenitore Immagine */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={legend.image} 
                  alt={legend.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Dettagli Testo */}
              <div className="p-8 border-t border-[#87D3F8]/10 group-hover:border-[#87D3F8]/30 transition-colors">
                <p className="text-[#87D3F8] text-xs font-bold uppercase mb-2 tracking-widest">{legend.year}</p>
                <h3 className="text-2xl font-black text-white uppercase group-hover:text-[#87D3F8] transition-colors">{legend.name}</h3>
                <p className="text-white/40 uppercase text-xs tracking-widest mt-1 italic">{legend.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
