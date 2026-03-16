import React from 'react';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-lazio/30 py-4 px-8 flex justify-between items-center">
      <div className="font-black text-2xl text-lazio tracking-tighter">LAZIO 1900</div>
      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-white/70">
        <a href="#" className="hover:text-lazio transition-colors">Home</a>
        <a href="#" className="hover:text-lazio transition-colors">Curva Nord</a>
        <a href="#" className="hover:text-lazio transition-colors">Hall of Fame</a>
        <a href="#" className="hover:text-lazio transition-colors">Best 11</a>
      </div>
    </nav>
  );
}
