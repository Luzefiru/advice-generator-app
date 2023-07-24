/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        text: '#cee3e9',
        'on-button': '#1f2632',
        primary: '#52ffa8',
        foreground: '#4e5d73',
        background: '#323a49',
      },
    },
  },
  plugins: [],
};
