/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#021431",
        light_blue: "#057aff",
        dark_gray: "#394e6a",
        light_gray: "#f0f6ff",
        light_black: "#414558",
        light_pink: "#ff7ac6",
        dark: "	#181920",
      },
      screens: {
        xl: "1218px",
      },
    },
  },
  plugins: [],
};
