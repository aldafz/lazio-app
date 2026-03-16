import type { Config } from "tailwindcss";

const config: Config> = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Qui potresti aggiungere i colori ufficiali per richiamarli facilmente
      colors: {
        lazio: {
          sky: "#87D3F8",
          navy: "#001e3c",
        },
      },
    },
  },
  plugins: [],
};
export default config;
