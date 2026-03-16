import React from 'react';
import Hero from '../components/Hero';
import HallOfFame from '../components/HallOfFame';
import BestEleven from '../components/BestEleven';

export default function Home() {
  return (
    <main className="bg-[#001e3c] min-h-screen">
      <Hero />
      
      <section id="leggende" className="py-24 bg-black/60 border-y border-[#87D3F8]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-ultras text-5xl md:text-7xl text-white italic sky-glow">
              I NOSTRI <span className="text-[#87D3F8]">IMMORTALI</span>
            </h2>
            <div className="w-32 h-2 bg-[#87D3F8] mt-4 skew-x-[-15deg]"></div>
          </div>
          <HallOfFame />
        </div>
      </section>

      <section id="undici" className="py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <BestEleven />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-ultras text-5xl md:text-6xl text-[#87D3F8] mb-6 italic leading-none">
                L'UNDICI <br/>DA BATTAGLIA
              </h2>
              <div className="bg-[#87D3F8] text-black p-6 border-l-8 border-[#001e3c]">
                <p className="text-sm font-bold uppercase">S.S. Lazio 1900</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-16 text-center border-t-4 border-[#87D3F8]">
        <p className="font-ultras text-4xl text-white mb-4 italic">NON MOLLARE MAI</p>
      </footer>
    </main>
  );
}
