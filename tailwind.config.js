/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   sm: '640px',
    //   // => @media (min-width: 640px) { ... }
    //   lg: '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //   xl: '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '0',
        lg: '0',
      },
    },
    extend: {},
  },
  plugins: [],
}
