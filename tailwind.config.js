module.exports = {
  purge: ['/src/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { fontFamily: {
      serif: ['College','sans-serif'],
      sans: ['Avenir','sans']
    }
  },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
