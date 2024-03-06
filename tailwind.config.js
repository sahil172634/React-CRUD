/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        970: '970px',
      },
      colors: {
        'at-red-400': '#e60023',
        'at-white-400': '#e9e9e9',
      },
    },
  },
  plugins: [],
};
