/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
        Dosis: ['Dosis', 'sans-serif'],
        Overpass: ['Overpass', 'sans-serif'],
      },
      colors: {
        idhm: {
          blue: '#0E6DB4',
          orange: ' #F79022',
        },
      },
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
};
