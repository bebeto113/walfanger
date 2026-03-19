/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'walfanger-gold': '#C5A059',
        'walfanger-dark': '#050505',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Instale via Google Fonts
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}