/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        heroPpattern: "url('./images/header-bg.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },

      backgroundColor: {
        cardHover : "rgba(255, 255, 255, 0.75071);"
      },

      contentWidth: {
        textWidth: "570px",
        heroWidth: "27rem"
      }
    },
  },
  plugins: [],
}
