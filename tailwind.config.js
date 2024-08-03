/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00a264',  // Adding primary color green
        secondary: '#000000', // Adding secondary color black
      },
    },
  },
  plugins: [],
}
