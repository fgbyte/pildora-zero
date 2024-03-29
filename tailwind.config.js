/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        custom:'570px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        white: '#FFFFFF',
        purple: '#EA3692',
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