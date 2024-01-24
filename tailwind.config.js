/** @type {import('tailwindcss').Config} */

const height = {
  50: "3.125rem",
  86: "5.375rem",
};

const width = {};

const spacing = {
  10: "0.625rem",
};

const borderRadius = {
  16: "1rem",
};

const colors = {
  white: "#ffffff",
  gray: "#f8f8f8",
  darkSlateGray: "#1c3149",
  black: "#000000",
};

const extend = {
  width,
  maxWidth: width,
  minWidth: width,
  height,
  maxHeight: height,
  minHeight: height,
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    spacing,
    borderRadius,
    extend,
  },
  plugins: [],
};
