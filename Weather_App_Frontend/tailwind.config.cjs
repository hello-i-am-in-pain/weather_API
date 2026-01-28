/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#0B0B1E',
        'weather-secondary': '#1E1E3F',
        'weather-accent': '#48319D',
        'weather-text': '#FFFFFF',
      },
      backgroundImage: {
        'weather-gradient': 'linear-gradient(to bottom, #2E335A, #1C1B33)',
      },
    },
  },
  plugins: [],
}
