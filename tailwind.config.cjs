/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ["'Space Grotesk'", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
