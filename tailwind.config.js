module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "var(--colors-primary)",
      secondary: "var(--colors-secondary)",
      contrast: "var(--colors-contrast)",
      punch: "var(--colors-punch)",
    },
    fontFamily: {
      primary: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [],
};
