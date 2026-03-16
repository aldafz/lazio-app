import React from 'react';
import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'S.S. LAZIO | Curva Nord',
  description: 'Sito ufficiale della tifoseria biancoceleste',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
