/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primaryGradientStart: '#6E1FC7',
        primaryGradientMid: '#D136DF',
        primaryGradientEnd: '#19A7CE',
      },
    },
  },
  plugins: [],
}
