/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        saira: "'Saira Condensed', sans-serif",
        oswald: "'Oswald', sans-serif;",
        montserrat: "'Montserrat', sans-serif;",
        raleway: "'Raleway', sans-serif;",
      }
    },
  },
  plugins: [],
}