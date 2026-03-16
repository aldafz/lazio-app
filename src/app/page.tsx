import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HallOfFame from '../components/HallOfFame';
import BestEleven from '../components/BestEleven';
import Voting from '../components/Voting'; // Importa il nuovo componente

export default function Home() {
  return (
    <main className="scroll-smooth bg-black min-h-screen">
      <Navigation />
      <Hero />
      <HallOfFame />
      <BestEleven />
      <Voting /> {/* Aggiunge la sezione di voto */}
      
      {/* Footer Provvisorio */}
      <footer className="py-10 bg-black text-center border-t border-[#87D3F8]/10 text-white/40 text-xs uppercase tracking-widest px-8">
        S.S. LAZIO 1900 - UNOFFICIAL SITE - PROUDLY BIANCOCELESTE
      </footer>
    </main>
  );
}
