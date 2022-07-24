const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
      backgroundImage: theme => ({
        'rbx-wood': "url('/images/wood-min.webp')",
        'rbx-porto': "url('/images/porto de santos optimized.avif')",
        'rbx-forest': "url('/images/floresta-min-min.webp')",
        'rbx-white': "url('/images/bg_bloco-min.webp')",
        'rbx-green': "url('/images/bg_h1.webp')"
       })
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
