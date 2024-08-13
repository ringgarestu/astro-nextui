// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", '"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxs: "375px",
        xss: "480px",
        xs: "550px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      spacing: {
        "1/2": "50%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "4/5": "80%",
        "5/6": "83.333333%",
        "11/12": "91.666667%",
      },
    },
  },
  plugins: [nextui()],
};
