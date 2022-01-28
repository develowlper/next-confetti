module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
      serif: ["Satoshi", "serif"],
    },
    extend: {
      colors: {
        pink: "#e6007e",
      },
    },
  },
  plugins: [],
};
