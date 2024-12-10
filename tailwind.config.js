/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir", "serif"],
        kantumruy: ["Kantumruy Pro", "serif"],
        averia: ["Averia Serif Libre", "serif"],
      },
    },
  },
  plugins: [],
};
