/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screen: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      animation: {
        'fade': 'fade 1.5s'
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        grayishBlue: 'hsl(228, 45%, 44%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
      keyframes: {
        fade: {
          '0%': {opacity: 0.4},
          '50%': {opacity: 0.7},
          '100%': {opacity: 1}
        }
      }
    },
  },
  plugins: [],
}
