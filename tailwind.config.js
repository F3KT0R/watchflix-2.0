/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js}'],
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto Mono'],
    },
    screens: {
      xs: '300px',
      ...defaultTheme.screens,
      '3xl': '2000px',
    },
  },
  extend: {},
  plugins: [],
};
