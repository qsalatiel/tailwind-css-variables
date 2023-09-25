const brand = {
  50: "rgb(252 233 231)",
  100: "rgb(247 193 189)",
  200: "rgb(243 154 146)",
  300: "rgb(238 114 104)",
  400: "rgb(233 75 62)",
  500: "rgb(228 35 19)",
  600: "rgb(184 28 15)",
  700: "rgb(139 21 12)",
  800: "rgb(95 15 8)",
  900: "rgb(50 8 4)",
};

const success = {
  50: "rgb(230 243 230)",
  100: "rgb(184 222 184)",
  200: "rgb(138 201 138)",
  300: "rgb(92 180 92)",
  400: "rgb(40 162 40)",
  500: "rgb(0 138 0)",
  600: "rgb(0 111 0)",
  700: "rgb(0 84 0)",
  800: "rgb(0 57 0)",
  900: "rgb(0 30 0)",
};

const fontSizes = {
  xxxs: "10px",
  xxs: "12px",
  xs: "14px",
  sm: "16px",
  lg: "18px",
  xl: "20px",
  "2xl": "24px",
};

const theme = {
  colors: { brand, success },
  fontSizes,
};

export function convertToCSSVariables(variables, { name, preffix }) {
  return Object.entries(variables).reduce(
    (range, [level, color]) => ({
      ...range,
      [`${preffix}${name ? `-${name}` : ""}-${level}`]: color,
    }),
    {}
  );
}

export default theme;
