const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... (your other config)
  theme: {
    extend: {
      fontFamily: {
        // 1. Set 'Inter' as the default font-sans
        sans: ['var(--font-inter)', ...fontFamily.sans],
        // 2. Set 'Oswald' as the new 'font-title'
        title: ['var(--font-oswald)', ...fontFamily.serif],
      },
      // ... (your other theme extensions for colors, etc.)
    },
  },
  plugins: [],
  // ...
}