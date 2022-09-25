const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    backgroundImage: {
      hosptial: "url('../public/ChildrensHospital.jpg')",
    },
    extend: {
      screens: {
        // xxs: '340px',
        // => @media (min-width: 340px) { ... }
        xs: "480px",
        // => @media (min-width: 480px) { ... }
        // sm: '640px',
        ...defaultTheme.screens,
        // => @media (min-width: 640px) { ... }
        // md: '768px',
        // => @media (min-width: 768px) { ... }

        // lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        // xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        // '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
