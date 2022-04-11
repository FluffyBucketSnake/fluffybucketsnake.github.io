module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald", "ui-sans-serif", "sans-serif"],
      default: ["Ubuntu", "ui-sans-serif", "sans-serif"],
      mono: ["Fira Code", "ui-monospace", "monospace"],
    },
    extend: { borderWidth: { 1: "1px" } },
  },
  plugins: [],
};
