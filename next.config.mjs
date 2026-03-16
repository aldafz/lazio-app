/** @type {import('next').NextConfig} */
const nextConfig = {
  // Imposta l'output per l'export statico necessario per GitHub Pages
  output: 'export',

  // Disabilita l'ottimizzazione delle immagini perché richiede un server Node.js attivo
  // (GitHub Pages serve solo file statici)
  images: {
    unoptimized: true,
  },

  // IMPORTANTE: Se il tuo sito è all'indirizzo tuo-utente.github.io/nome-repo/
  // scommenta la riga qui sotto e sostituisci 'nome-repo' con il nome della tua repository.
  // Se invece usi un dominio personalizzato (es. www.tuosito.it), lascialo commentato o vuoto.
  
  // basePath: '/lazio-app',

  // Opzionale: permette di gestire i link che terminano con '/'
  trailingSlash: true,
};

export default nextConfig;
