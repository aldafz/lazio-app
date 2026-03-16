import React from 'react';

export const metadata = { title: 'S.S. LAZIO | Curva Nord' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        {/* Questo attiva Tailwind all'istante senza file CSS esterni */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    lazio: '#87D3F8',
                  }
                }
              }
            }
          `
        }} />
        <style>{`
          body { margin: 0; padding: 0; background-color: #001e3c; color: white; }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
