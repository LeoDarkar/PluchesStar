/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // o 'media' si prefieres que se active automáticamente según las preferencias del sistema
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1f2937',
          light: '#374151',
        },
      },
    },
  },
  plugins: [],
}
