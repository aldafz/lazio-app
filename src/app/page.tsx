import Hero from '@/components/Hero';
import HallOfFame from '@/components/HallOfFame';
import BestEleven from '@/components/BestEleven';

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="leggende" className="py-20 bg-black/40"><div className="max-w-6xl mx-auto px-6">
        <h2 className="font-ultras text-6xl text-[#87D3F8] mb-12 sky-glow">Gli Immortali</h2>
        <HallOfFame />
      </div></section>
      <section id="undici" className="py-20"><div className="max-w-6xl mx-auto px-6 lg:flex gap-12 items-center">
        <div className="lg:w-1/3 mb-12">
          <h2 className="font-ultras text-5xl mb-6 italic">Top 11 <br/>Storica</h2>
          <p className="text-sky-200 uppercase font-bold text-sm border-l-4 border-[#87D3F8] pl-4">I leoni che hanno fatto la storia della Prima Squadra della Capitale.</p>
        </div>
        <div className="lg:w-2/3 w-full"><BestEleven /></div>
      </div></section>
    </main>
  );
}
