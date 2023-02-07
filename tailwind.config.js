/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Unbounded', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'josefin': [ 'Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
