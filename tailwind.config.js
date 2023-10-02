/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        white: '#FFFFFF',
        purple: '#DC3684',
        violet: '#63356D',
        black: '#262526'
      },
      fontFamily: {
        primary: ['OpenSauceOne']
      },
    },
  },
  plugins: [],
}