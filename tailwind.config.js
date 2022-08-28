/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      navbarBg: '#39377ccc',
      navSpecial: '#41E6A6' 
    },
    fontFamily: {
      'navLogo': ["'Goldman'", 'cursive']
    },
    extend: {},
  },
  plugins: [],
}
