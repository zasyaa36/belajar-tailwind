/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        cyan: '#06b6d4',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
