/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#04070b',
      secondary: '#16223a',
      accent: '#1f3d7a',
      background: '#0a0e17',
      text: '#f4f6fc',
    },
    fontFamily: {
      displayFont: 'Oswald',
      textFont: 'Montserrat',
    },
  },
  },
  plugins: [],
}