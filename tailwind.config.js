/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sarsara': {
          50: '#f0f2ff',
          100: '#e6ebff',
          400: '#334692',
          500: '#334692',
          600: '#334692',
          700: '#334692',
          800: '#334692',
          900: '#334692',
        }
      },
    },
  },
  plugins: [],
};
