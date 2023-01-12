/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      formHeight: '1000px'
    },
    colors: {
      primary: 'rgb(157 23 77)',
      secondary: 'rgb(255 228 230)',
      third: 'white',
      background: 'rgba(239, 101, 80, 0.40)'
    }
  },
  plugins: []
};
