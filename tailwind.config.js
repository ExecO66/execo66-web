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
    colors: {
      primary: {
        900: "#3B2677",
        800: "#4C319A",
        700: "#5D3CBC",
        600: "#785BCB",
        500: "#957ED6",
        400: "#AE9DE0",
        300: "#C8BCEA",
        200: "#E1DBF4",
        100: "#FBFAFD",
        50: "#FFFFFF",
      },
      subprimary: {
        900: "#0A0E73",
        800: "#0D139D",
        700: "#1119C7",
        600: "#1B23EB",
        500: "#454CEF",
        400: "#6B70F2",
        300: "#9094F5",
        200: "#B6B8F9",
        100: "#DBDDFC",
        50: "#EEEFFE",
      },
      neutral: {
        900: "#171717",
        800: "#262626",
        700: "#404040",
        600: "#525252",
        500: "#737373",
        400: "#A3A3A3",
        300: "#D4D4D4",
        200: "#E5E5E5",
        100: "#F5F5F5",
        50: "#FAFAFA",
      },
    },
    screens: {
      xxs: "360px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
