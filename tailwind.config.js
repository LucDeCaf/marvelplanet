/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        itim: ["Itim", "sans-serif"],
      },
      keyframes: {
        navDropdown: {
          "0%": { top: "-12rem" },
          "100%": { top: "12rem" },
        },
        navDropup: {
          "0%": { top: "12rem" },
          "100%": { top: "-12rem" },
        },
      },
      animation: {
        navDropdown: "navDropdown 0.4s ease-out",
        navDropup: "navDropup 0.5s",
      },
      listStyleType: {
        roman: "upper-roman",
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
