/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          dark: "#060611",
          card: "#0d0e21",
          border: "#1a1b3a",
          accent: "#8b5cf6",
          accentLight: "#a78bfa",
          cyan: "#06b6d4",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 100%)',
      }
    },
  },
  plugins: [],
};
