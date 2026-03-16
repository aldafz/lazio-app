import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      
      {/* Sezione provvisoria per i prossimi passi */}
      <section className="py-20 bg-black text-center">
        <h3 className="text-lazio font-bold">PROSSIMO STEP: HALL OF FAME</h3>
      </section>
    </main>
  );
}
