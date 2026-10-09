const primary = {
  50: '#faf3ea',
  100: '#f5dabf',
  200: '#e3ac8d',
  300: '#c97f60',
  400: '#9a4444',
  500: '#6c151e',
  600: '#5b121a',
  700: '#4a0f16',
  800: '#3a0c12',
  900: '#2c090e',
  950: '#1a0508'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary,
        pink: primary,
        purple: primary,
        slate: {
          50: '#f6f7f5',
          100: '#e9edeb',
          200: '#d5ddd9',
          300: '#b6c4bf',
          400: '#8fa49d',
          500: '#6d8a83',
          600: '#54716a',
          700: '#2a4a47',
          800: '#0f3d3a',
          900: '#0c2e2c',
          950: '#071e1d'
        }
      }
    }
  },
  plugins: []
};
