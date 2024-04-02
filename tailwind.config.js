/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgba(182, 36, 39, 1)',
        black: 'rgba(43, 43, 43, 1)',
        yellow: 'yellow',
      },
      boxShadow: {
        roulette: '0 35px 60px -15px rgba(72, 1, 1, 1)',
        slots: '0 35px 60px -15px rgba(51, 1, 72, 1)',
        hummers: '0 35px 60px -15px rgba(250, 225, 130, 1)',
      },
      dropShadow: {
        home: '0 10px 10px black',
      },
    },
  },
  plugins: [],
};
