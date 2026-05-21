/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F3EA",
        parchment: "#EFE6D3",
        warmBrown: "#5C3D1E",
        deepBrown: "#3A2510",
        gold: "#C4974A",
        goldLight: "#E8C98A",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}