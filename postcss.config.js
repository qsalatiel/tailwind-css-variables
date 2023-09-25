import autoprefixer from "autoprefixer";
import cssVariables from "postcss-css-variables";
import tailwindcss from "tailwindcss";

import theme, { convertToCSSVariables } from "./theme.js";
console.log(
  convertToCSSVariables(theme.colors.brand, {
    name: "brand",
    preffix: "color",
  })
);
export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    cssVariables({
      preserve: true,
      variables: {
        ...convertToCSSVariables(theme.colors.brand, {
          name: "brand",
          preffix: "color",
        }),
        ...convertToCSSVariables(theme.colors.success, {
          name: "brand",
          preffix: "color",
        }),
        ...convertToCSSVariables(theme.fontSizes, {
          preffix: "text",
        }),
      },
    }),
  ],
};
