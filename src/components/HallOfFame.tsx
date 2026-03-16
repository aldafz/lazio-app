const LEGENDS = [
  { name: 'Chinaglia', label: 'Long John' },
  { name: 'Nesta', label: 'Il Capitano' },
  { name: 'Piola', label: 'Il Bomber' },
  { name: 'Maestrelli', label: 'Il Maestro' }
];

export default function HallOfFame() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {LEGENDS.map((l) => (
        <div key={l.name} className="aspect-square bg-white/5 border border-sky-400/20 p-6 flex flex-col justify-end hover:bg-[#87D3F8] group transition-all">
          <h3 className="font-ultras text-2xl group-hover:text-black">{l.name}</h3>
          <p className="text-xs font-bold text-sky-400 group-hover:text-black/70">{l.label}</p>
        </div>
      ))}
    </div>
  );
}
