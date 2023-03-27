/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazirmatnThin: "vazirmatnThin",
        vazirmatnExLight: "vazirmatnExLight",
        vazirmatnLight: "vazirmatnLight",
        vazirmatn: "vazirmatn",
        vazirmatnMedium: "vazirmatnMedium",
        vazirmatnSemiB: "vazirmatnSemiB",
        vazirmatnBold: "vazirmatnBold",
        vazirmatnExB: "vazirmatnExB",
      },
    },
  },
  plugins: [],
};
