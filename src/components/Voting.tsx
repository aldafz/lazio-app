"use client"; // Obbligatorio per rendere i bottoni cliccabili
import React, { useState } from 'react';

export default function Voting() {
  const [votes, setVotes] = useState({ chinaglia: 0, nesta: 0, signori: 0 });

  const addVote = (player: 'chinaglia' | 'nesta' | 'signori') => {
    setVotes(prev => ({ ...prev, [player]: prev[player] + 1 }));
  };

  return (
    <section id="voting" className="py-24 bg-[#001e3c] px-8 border-t border-[#87D3F8]/10 text-center">
      <h2 className="text-[#87D3F8] text-4xl font-black italic mb-12 uppercase">Vota la tua Leggenda</h2>
      
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {Object.entries(votes).map(([key, value]) => (
          <div key={key} className="bg-black/40 p-6 border border-[#87D3F8]/20 min-w-[200px]">
            <h3 className="text-white font-bold uppercase mb-4">{key}</h3>
            <p className="text-4xl font-black text-[#87D3F8] mb-4">{value}</p>
            <button 
              onClick={() => addVote(key as any)}
              className="bg-[#87D3F8] text-black px-6 py-2 font-bold uppercase text-xs hover:bg-white transition-all"
            >
              Vota +1
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
