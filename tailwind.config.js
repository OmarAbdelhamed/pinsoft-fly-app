/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        first: "url('/src/assets/img/status.jpg')",
        second: "url('/src/assets/img/details.png')",
      },
      fontFamily: {
        ticket: 'VT323',
        Headlines: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'primary-color': '#1A0F82',
        'primary-color-light': '#2f20ba',
        'primary-color-dark': '#1a0f39',
        'text-dark': '#0f172a',
        'text-light': '#64748b',
        'extra-light': '#F2F7F7',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
