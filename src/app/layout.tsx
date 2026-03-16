import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata = { title: 'S.S. LAZIO | Curva Nord' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
