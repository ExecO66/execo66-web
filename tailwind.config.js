module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
    extend: {
      colors: {
        primary: "var(--colors-primary)",
        secondary: "var(--colors-secondary)",
        contrast: "var(--colors-contrast)",
        punch: "var(--colors-punch)",
        white: "#ffffff",
        yellow: {
          light: "#ffcd1d52",
          dark: "#705E00",
        },
      },
    },
  },
  plugins: [],
};
