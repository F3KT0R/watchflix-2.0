/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,js}'],
  },
  theme: {
    fontFamily: {
      roboto: ['Roboto Mono'],
    },
  },
  plugins: [],
};
