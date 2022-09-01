/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      navbarBg: '#39377c',
      navSpecial: '#41E6A6' ,
      white: '#FFFFFF',
      formInput: '#28857acc',
      inputColor: '#D9D9D9',
      inputBg: '#25726F',
      inputBorder: '#2C804B',
      buttonBg: '#2c804b42',
      footerRule: '#D9D9D9',
      footerBorder: '#9f9be880'
    },
    fontFamily: {
      'navLogo': ["'Goldman'", 'cursive'],
      'landingText': ["'Poor Story'", 'cursive'],
      'linksText': ["'Roboto'", 'sans-serif'],
      'main': ["'Poppins'", 'sans-serif']
    },
    screens: {
      'xlg': '950px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
