import React from 'react';

export const metadata = { title: 'S.S. LAZIO | Curva Nord' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <head>
        <style>{`
          body { 
            margin: 0; 
            padding: 0; 
            background-color: #001e3c; 
            color: white; 
            font-family: sans-serif; 
          }
          .lazio-blue { color: #87D3F8; }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
