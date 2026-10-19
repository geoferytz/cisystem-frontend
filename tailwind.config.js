const primary = {
  50: '#f3f2fd',
  100: '#e7e5fb',
  200: '#d0ccf6',
  300: '#b0a9ee',
  400: '#8f86e3',
  500: '#7367d8',
  600: '#5f52c7',
  700: '#4e43a8',
  800: '#3f3787',
  900: '#2f2a66',
  950: '#1d1a42'
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
          50: '#eeedfa',
          100: '#e6e4f6',
          200: '#d9d6ef',
          300: '#bfbbdf',
          400: '#9793bd',
          500: '#716c98',
          600: '#57527f',
          700: '#3f3b65',
          800: '#2a274b',
          900: '#1c1a36',
          950: '#121024'
        }
      }
    }
  },
  plugins: []
};
