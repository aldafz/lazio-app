"use client";
import React, { useState } from 'react';

export default function Voting() {
  // Stato iniziale dei voti
  const [votes, setVotes] = useState({
    "Chinaglia": 0,
    "Nesta": 0,
    "Signori": 0,
    "Mihajlovic": 0
  });

  const handleVote = (player: string) => {
    setVotes(prev => ({
      ...prev,
      [player]: prev[player as keyof typeof votes] + 1
    }));
  };

  return (
    <section id="voting" className="py-24 bg-[#001e3c] px-8 border-t border-[#87D3F8]/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[#87D3F8] text-4xl font-black italic mb-6 tracking-tighter uppercase">Vota la tua Leggenda</h2>
        <p className="text-white/60 mb-12 uppercase text-xs tracking-[0.2em]">Chi è stato il più grande di sempre? Clicca per votare!</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(votes).map(([name, count]) => (
            <div key={name} className="bg-black/40 p-6 border border-[#87D3F8]/10 flex flex-col items-center">
              <span className="text-white font-bold uppercase mb-2 text-sm">{name}</span>
              <span className="text-3xl font-black text-[#87D3F8] mb-4">{count}</span>
              <button 
                onClick={() => handleVote(name)}
                className="w-full bg-[#87D3F8] text-[#001e3c] py-2 text-xs font-black uppercase hover:bg-white transition-colors"
              >
                VOTA
              </button>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-white/30 text-[10px] uppercase tracking-widest italic">
          Nota: I voti sono temporanei e si resettano ricaricando la pagina.
        </p>
      </div>
    </section>
  );
}
