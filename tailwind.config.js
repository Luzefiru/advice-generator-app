/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'on-foreground': '#cee3e9',
        background: '#1f2632',
        primary: '#52ffa8',
        accent: '#4e5d73',
        foreground: '#323a49',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
