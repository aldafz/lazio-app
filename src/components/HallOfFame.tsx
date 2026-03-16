import React from 'react';

// Funzione per generare immagini segnaposto eleganti (visto che i link esterni spesso falliscono)
const getPlaceHolderImage = (name: string) => {
  const initial = name.split(' ')[1]?.substring(0, 1) || name.substring(0, 1);
  return `https://placehold.co/400x533/001e3c/87D3F8?text=${initial}&font=Montserrat`;
};

const LEGENDS = [
  { 
    name: "Giorgio Chinaglia", 
    role: "Long John", 
    year: "Scudetto '74",
    image: getPlaceHolderImage("Giorgio Chinaglia")
  },
  { 
    name: "Alessandro Nesta", 
    role: "Il Capitano", 
    year: "Scudetto '00",
    image: getPlaceHolderImage("Alessandro Nesta")
  },
  { 
    name: "Beppe Signori", 
    role: "Re Beppe", 
    year: "Capocannoniere",
    image: getPlaceHolderImage("Beppe Signori")
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
              <div className="aspect-[3/4] overflow-hidden bg-slate-800">
                <img 
                  src={legend.image} 
                  alt={legend.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 border-t border-[#87D3F8]/10">
                <p className="text-[#87D3F8] text-xs font-bold uppercase mb-2 tracking-widest">{legend.year}</p>
                <h3 className="text-2xl font-black text-white uppercase">{legend.name}</h3>
                <p className="text-white/40 uppercase text-xs tracking-widest mt-1 italic">{legend.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
