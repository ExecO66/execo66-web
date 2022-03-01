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
        900: "var(--color-primary-900)",
        800: "var(--color-primary-800)",
        700: "var(--color-primary-700)",
        600: "var(--color-primary-600)",
        500: "var(--color-primary-500)",
        400: "var(--color-primary-400)",
        300: "var(--color-primary-300)",
        200: "var(--color-primary-200)",
        100: "var(--color-primary-100)",
        50: "var(--color-primary-50)",
      },
      subprimary: {
        900: "var(--color-subprimary-900)",
        800: "var(--color-subprimary-800)",
        700: "var(--color-subprimary-700)",
        600: "var(--color-subprimary-600)",
        500: "var(--color-subprimary-500)",
        400: "var(--color-subprimary-400)",
        300: "var(--color-subprimary-300)",
        200: "var(--color-subprimary-200)",
        100: "var(--color-subprimary-100)",
        50: "var(--color-subprimary-50)",
      },
      neutral: {
        900: "var(--color-neutral-900)",
        800: "var(--color-neutral-800)",
        700: "var(--color-neutral-700)",
        600: "var(--color-neutral-600)",
        500: "var(--color-neutral-500)",
        400: "var(--color-neutral-400)",
        300: "var(--color-neutral-300)",
        200: "var(--color-neutral-200)",
        100: "var(--color-neutral-100)",
        50: "var(--color-neutral-50)",
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
