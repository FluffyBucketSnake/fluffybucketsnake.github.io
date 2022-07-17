module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Oswald", "ui-sans-serif", "sans-serif"],
      default: ["Ubuntu", "ui-sans-serif", "sans-serif"],
      mono: ["Fira Code", "ui-monospace", "monospace"],
    },
    extend: {
      colors: {
        error: "#E55858",
        warning: "#E0C06D",
        success: "#92D967",
        divider: "#4E4E4E",
        primary: {
          400: "#7B7EBE",
          500: "#30359E",
          600: "#262853",
        },
        "primary-contrast": "#F7FAF1",
        secondary: {
          400: "#D1F19D",
          500: "#B6F156",
          600: "#74A525",
        },
        "secondary-contrast": "#1B1B1B",
        "bg-default": "#1B1B1B",
        "bg-paper": "#2D2D2D",
        "text-primary": "#F2F2F2",
        "text-secondary": "rgba(242, 242, 242, 0.75)",
      },
      borderWidth: { 1: "1px" },
      backgroundImage: {
        "hero-main": "url('/media/bg.png')",
        "primary-gradient/80":
          "linear-gradient(170deg, rgba(48, 53, 158, 0.8), rgba(38, 40, 83, 0.8) 75%, rgba(123, 97, 255, 0.8) 150%);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
