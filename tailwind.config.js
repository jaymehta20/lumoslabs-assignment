/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './styles/tailwind.config.js',
  theme: {
    extend: {},
    fontFamily: {
      body: ['Work Sans', 'sans-serif'],
      display: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
