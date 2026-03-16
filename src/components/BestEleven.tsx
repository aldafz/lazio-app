export default function BestEleven() {
  return (
    <div className="w-full max-w-xl mx-auto aspect-[3/4] bg-slate-900 border-4 border-[#87D3F8]/30 relative overflow-hidden p-8 shadow-2xl">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid.png')]"></div>
      {/* Visualizzazione semplificata del campo */}
      <div className="h-full border-2 border-white/20 relative flex flex-col justify-between p-4">
        <div className="flex justify-around"><div className="p-2 bg-[#87D3F8] text-black font-ultras text-xs">CHINAGLIA</div></div>
        <div className="flex justify-between"><div className="p-2 bg-white text-black font-ultras text-[10px]">NEDVED</div><div className="p-2 bg-white text-black font-ultras text-[10px]">VERON</div></div>
        <div className="flex justify-center"><div className="p-2 bg-[#87D3F8] text-black font-ultras text-xs">NESTA</div></div>
        <div className="flex justify-center"><div className="p-2 bg-white/20 font-ultras text-[10px]">PULICI (GK)</div></div>
      </div>
    </div>
  );
}
