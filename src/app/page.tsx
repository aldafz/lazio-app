import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HallOfFame from '../components/HallOfFame';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navigation />
      <Hero />
      <HallOfFame />
      
      {/* Sezione Curva Nord provvisoria */}
      <section id="curva-nord" className="py-40 bg-[#001e3c] text-center border-t border-[#87D3F8]/10">
        <h2 className="text-6xl font-black italic text-white uppercase opacity-20">Curva Nord</h2>
        <p className="text-[#87D3F8] tracking-[0.5em] font-bold mt-4 italic">NON MOLLARE MAI</p>
      </section>
    </main>
  );
}
