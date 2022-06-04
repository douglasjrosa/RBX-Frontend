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
        'rbx-wood': "url('/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwood-min.3c8c701a.webp&w=828&q=75')",
        'rbx-porto': "url('/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fporto%20de%20santos%20optimized.c86f1e87.avif&w=828&q=75')",
        'rbx-forest': "url('/images/floresta-min-min.webp')",
        'rbx-white': "url('https://rbx-backend-media.s3.sa-east-1.amazonaws.com/bg_bloco_min_8981be1e00.webp')",
        'rbx-green': "url('https://rbx-backend-media.s3.sa-east-1.amazonaws.com/bg_h1_d355630fd8.webp')"
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
