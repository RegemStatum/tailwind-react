const { screens } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "418px",
      ...screens,
    },
    extend: {
      fontSize: {
        h1: ["74px", "84px"],
        h2: ["48px", "55px"],
        h3: ["20px", "28px"],
        h4: ["28px", "40px"],
        h5: ["16px", "23px"],
        btn: ["20px", "20px"],
        p: ["18px", "25px"],
        lnk: ["15px", "28px"],
      },
      colors: {
        "pr-1": "#2091F9",
        "pr-2": "#2DC071",
        "pr-3": "#F15B07",
        "nt-1": "#252B42",
        "nt-2": "#374754",
        "nt-3": "#FFFFFF",
        "bg-1": "#252B42",
        "bg-2": "#FFFFFF",
        "bg-3": "#222B32",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "95%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "800px",
          },
          "@screen xl": {
            maxWidth: "900px",
          },
        },
      });
    },
  ],
};
