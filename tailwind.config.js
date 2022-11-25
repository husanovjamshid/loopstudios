/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        heroPpattern: "url('./images/header-bg.jpg')",
      },

      backgroundColor: {
        cardHover : "rgba(255, 255, 255, 0.75071);"
      },

      contentWidth: {
        textWidth: "570px",
        heroWidth: "27rem"
      },
      fontFamily:{
        body: ['Alata, sans-serif']
      }
    },
  },
  plugins: [],
}
