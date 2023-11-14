/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      alto: "#D3D3D3",
      plaster: "#EEEEEE",
      tar: "#0F0F0F",
      concrete: "#2C2C2C",
      black: "#000000",
      green: "#31B978",
      red: "#B63221",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('../src/Assets/images/heroImage.jpg')",
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
