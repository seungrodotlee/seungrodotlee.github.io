const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: { content: ["./src/**/*.{js,vue}"] },
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".abril": {
          fontFamily: "Abril Fatface",
        },
        ".neonderthaw": {
          fontFamily: "Neonderthaw",
        },
        ".flex-center": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        ".abs-center": {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        ".abs-center-x": {
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        },
        ".abs-center-y": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
        },
      });
    }),
  ],
};
