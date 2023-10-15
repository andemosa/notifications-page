/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      veryLightGrayishBlue: "#F7FAFD",
      lightGrayishBlue1: "hsl(211, 68%, 94%)",
      lightGrayishBlue2: "hsl(205, 33%, 90%)",
      grayishBlue: "hsl(219, 14%, 63%)",
      darkGrayishBlue: "hsl(219, 12%, 42%)",
      veryDarkBlue: "hsl(224, 21%, 14%)",
    },
    extend: {},
    weights: {
      thin: 500,
      bold: 800,
    },
  },
  plugins: [],
};
