/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:['Montserrat', 'sans-serif'],
        sans:['Open Sans', 'sans-serif'],
        raleway:['Raleway', 'sans-serif'],
        roboto:['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'bodybackground' : 'linear-gradient(294.47deg, #130B2B 20.94%, #2E1371 100%)',
        'navbarButton' : 'linear-gradient(91.38deg, #FB4A4A -10.93%, #2027CC 99.61%)',

      },
      boxShadow: {
        'nav': '0px 10px 40px rgba(186, 64, 113, 0.35)',
      },
    },
  },
  plugins: [],
}