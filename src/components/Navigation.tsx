export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 border-b-2 border-[#87D3F8]/50 h-16 flex items-center px-6 justify-between font-ultras">
      <span className="text-2xl tracking-widest italic text-[#87D3F8]">LAZIO 1900</span>
      <div className="flex gap-6 text-sm">
        <a href="#leggende" className="hover:text-[#87D3F8]">LEGENDE</a>
        <a href="#undici" className="hover:text-[#87D3F8]">BEST 11</a>
      </div>
    </nav>
  );
}
