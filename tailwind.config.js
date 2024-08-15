/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ball-bg': '#FF6B6B', // Fondo de la bolita: un rojo vibrante
        'ball-border': '#FFD93D', // Borde de la bolita: un amarillo cálido
        'bg-dark': '#1A1A2E', // Fondo del sitio: un azul muy oscuro
        'accent': '#E94560', // Color de acento: un rosa fuerte
        'highlight': '#0F3460', // Para destacar: un azul profundo
      },
    },
  },
  plugins: [],
}