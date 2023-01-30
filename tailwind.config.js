/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'cursive': ['Unbounded', 'cursive'],
        'sans': ['Fjalla One', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'lilita ': ['Lilita One', 'cursive']     
      }
    },
  },
  plugins: [],
}
