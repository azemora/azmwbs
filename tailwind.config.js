/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d6d1c8",
        secondary: "#051233",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        gradientStart: '#000212', // Assuming this is the bottom color of your gradient
        gradientEnd: '#3c65bd',   
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};