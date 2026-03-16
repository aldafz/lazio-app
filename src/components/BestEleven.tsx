"use client";
import React, { useState } from 'react';

const INITIAL_TEAM = [
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
  { pos: "Mister", name: "Tommaso Maestrelli" }
];

export default function BestEleven() {
  const [likes, setLikes] = useState(0);

  return (
    <section id="best-11" className="py-24 bg-black px-8 border-t border-[#87D3F8]/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#87D3F8] text-4xl font-black italic tracking-tighter uppercase">Best XI Storica</h2>
            <p className="text-white/50 uppercase text-xs tracking-widest mt-2">La formazione dei sogni biancocelesti</p>
          </div>
          
          {/* Funzione di approvazione della formazione */}
          <button 
            onClick={() => setLikes(likes + 1)}
            className="group flex items-center gap-4 bg-[#001e3c] border border-[#87D3F8]/30 px-6 py-3 hover:border-[#87D3F8] transition-all"
          >
            <span className="text-white/70 uppercase text-xs font-bold tracking-widest">Approvi questa formazione?</span>
            <span className="text-[#87D3F8] font-black text-xl group-hover:scale-125 transition-transform">💙 {likes}</span>
          </button>
        </div>
        
        {
