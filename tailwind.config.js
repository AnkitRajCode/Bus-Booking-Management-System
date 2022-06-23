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
        'bodybackground' : 'linear-gradient(294.47deg, #130B2B 20.94%, #2E1371 100%);',
      },
    },
  },
  plugins: [],
}