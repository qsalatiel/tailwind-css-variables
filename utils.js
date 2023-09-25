/**
 *
 * A util to create a color range the way tailwind theme expects.
 * https://tailwindcss.com/docs/customizing-colors#using-css-variables
 *
 */

export default function createColorRangeFromCSSVariables(colorName) {
  return [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].reduce(
    (range, level) => {
      return {
        ...range,
        [level]: `rgb(var(--color-${colorName}-${level}) / <alpha-value>)`,
      };
    },
    {}
  );
}
