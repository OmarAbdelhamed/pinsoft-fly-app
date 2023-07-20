/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        first: "url('/src/assets/img/status.jpg')",
      },
      fontFamily: {
        ticket: "VT323",
      },
      colors: {
        'primary-color': '#3d5cb8',
        'primary-color-dark': '#334c99',
        'text-dark': '#0f172a',
        'text-light': '#64748b',
        'extra-light': '#f1f5f9',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
