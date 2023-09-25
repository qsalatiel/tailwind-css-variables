import createColorRangeFromCSSVariables from "./utils";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brand: createColorRangeFromCSSVariables("brand"),
      success: createColorRangeFromCSSVariables("success"),
    },
    extend: {},
  },
  plugins: [],
};
