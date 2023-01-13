const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.green,
        theme: {
          'dark-bg': '#0f172a', // slate-900
          'dark-text': '#d4d4d8', // zinc-300
          'light-bg': '#fafafa', // zinc-50
          'light-text': '#1e293b', // slate-800
        },
      },
    },
  },
  plugins: [],
};
