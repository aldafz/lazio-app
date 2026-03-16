import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#87D3F8]/30 py-4 px-8 flex justify-between items-center">
      <div className="font-black text-2xl text-[#87D3F8] tracking-tighter">LAZIO 1900</div>
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
        <a href="#" className="hover:text-[#87D3F8] transition-colors">Home</a>
        <a href="#curva-nord" className="hover:text-[#87D3F8] transition-colors">Curva Nord</a>
        <a href="#hall-of-fame" className="hover:text-[#87D3F8] transition-colors">Hall of Fame</a>
      </div>
    </nav>
  );
}
