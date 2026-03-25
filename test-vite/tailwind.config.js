const config = require("@nudibranches-tech/components-oidc-axa/tailwind");
const tailwindAnimate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nudibranches-tech/components-oidc-axa/dist/**/*.js",
  ],
  plugins: [tailwindAnimate],
};
