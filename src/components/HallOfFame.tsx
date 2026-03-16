import React from 'react';

// Generiamo dei placeholder con i colori sociali invece di usare link a Wikipedia
const getPlaceHolderImage = (name: string) => {
  const initial = name.split(' ')[1].substring(0, 1); // Prende l'iniziale del cognome
  return `https://placehold.co/440x587/001e3c/87D3F8?text=${initial}&font=Montserrat`;
};

const LEGENDS = [
  { 
    name: "Giorgio Chinaglia", 
    role: "Long John", 
    year: "Scudetto '74",
    image: getPlaceHolderImage("Giorgio Chinaglia")
  },
  { 
    name: "Alessandro Nesta", 
    role: "Il Capitano", 
    year: "Scudetto '00",
    image: getPlaceHolderImage("Alessandro Nesta")
  },
  { 
    name: "Beppe Signori", 
    role: "Re Beppe", 
    year: "Capocannoniere",
    image: getPlaceHolderImage("Beppe Signori")
  }
];

// ... (il resto del componente HallOfFame.tsx rimane invariato) ...
