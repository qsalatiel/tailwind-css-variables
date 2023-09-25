import theme from "./theme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...theme.colors,
    },
    fontSize: {
      ...theme.fontSizes,
    },
    extend: {},
  },
  plugins: [],
};
