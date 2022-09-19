/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      'sans':['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/fundo.png')",
        'nlw-gradient': 'linear-gradient(90deg, #9572FC 33%, #43E7AD 33%, #E1D55D 33%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)'
      }
    },
  },
  plugins: [],
}
