/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "global": "Roboto, Noto Sans TC, sans-serif",
      "rc": "Roboto Condensed, sans-serif",
      "noto": "Noto Sans TC, sans-serif",
      "roboto": "Roboto, sans-serif"
    },
    screens: {
      md: '768px',
      // => @media (min-width: 640px) { ... }
      // lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '0',
        lg: '0',
      },
    },
    extend: {
      colors: {
        b1: "#202124",
        b2: "#EDEEEF",
        b3: "#666666",
        c1: "#194B6D",
        l1: "#C4C4C4",
      }
    },
  },
  plugins: [],
}
