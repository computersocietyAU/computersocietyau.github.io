/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      navbarBg: '#39377c',
      navSpecial: '#41E6A6',
      white: '#FFFFFF',
      formInput: '#28857acc',
      inputColor: '#D9D9D9',
      inputBg: '#25726F',
      inputBorder: '#2C804B',
      buttonBg: '#2c804b42',
      footerRule: '#D9D9D9',
      footerBorder: '#9f9be880',
      blogCardBg: '#11203899',
      black: '#000000',
      blogText: '#47515E',
      cardBg: '#19244499',
      imgBorder: '#41e6a699',
    },
    fontFamily: {
      'navLogo': ["'Goldman'", 'cursive'],
      'landingText': ["'Poor Story'", 'cursive'],
      'linksText': ["'Roboto'", 'sans-serif'],
      'main': ["'Poppins'", 'sans-serif'],
      'blog': ["'Lato'", 'sans-serif'],
      'exploreBlogText': ["'Plus Jakarta Sans'", 'sans-serif'],
      'expBlogContent': ["'Inter'", 'sans-serif']
    },
    screens: {
      'xlg': '950px',
      ...defaultTheme.screens,
    },
    extend: {
      borderRadius: {
        'extralarge': '12rem'
      },
      visibility: ["group-hover"],
      height: {
        'med': '768px',
      },
      width: {
        '320': '320px',
        '424': '424px',
        '1024': '1024px',
        '1440': '1440px',
        '2560': '2560px',
        '1280': '1364px',
        '768': '768px',
      },
      height: {
        'he': '1440px',
      },
      fontSize: {
        'tiny': '.50rem',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
      screens: {
        '2k': '2000px',
        '1k': '1440px',
        'tab': '768px',
        'k': '1024px',
        'mob': '425px',
        'mob-sm': '320px',
      },
    },
  },
  plugins: [],
}
