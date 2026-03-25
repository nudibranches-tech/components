const config = require("@nudibranches-tech/components/tailwind");
const tailwindAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nudibranches-tech/components/dist/**/*.js",
  ],
  plugins: [tailwindAnimate],
};
