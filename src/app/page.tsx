import Hero from '../components/Hero';
import HallOfFame from '../components/HallOfFame';
import BestEleven from '../components/BestEleven';

export default function Home() {
  return (
    <main className="bg-stadium-texture min-h-screen">
      {/* Sezione d'impatto principale */}
      <Hero />
      
      {/* Sezione Hall of Fame - Gli Immortali */}
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

      {/* Sezione Tattica e Top 11 */}
      <section id="undici" className="py-24 relative overflow-hidden">
        {/* Sfondo decorativo "1900" per la sezione */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none font-ultras">
          1900
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <BestEleven />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-ultras text-5xl md:text-6xl text-[#87D3F8] mb-6 italic leading-none">
                L'UNDICI <br/>DA BATTAGLIA
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-sky-100/80 font-bold uppercase italic tracking-wide">
                  "Non è la forza del braccio, ma la forza del cuore."
                </p>
                <div className="bg-[#87D3F8] text-black p-6 border-l-8 border-[#001e3c] shadow-2xl transform lg:-rotate-2">
                  <h4 className="font-
