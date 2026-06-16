import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // NC State Wolfpack palette
        wolfred: {
          DEFAULT: "#CC0000", // Wolfpack Red
          dark: "#990000",
        },
        ink: "#1A1A1A",
        wolfgray: {
          50: "#F7F7F7",
          100: "#EFEFEF",
          200: "#E1E1E1",
          300: "#CCCCCC",
          500: "#7A7A7A",
          700: "#4B4B4B",
        },
        // NC State secondary accent backgrounds (used like ncsu.edu)
        ncolive: { DEFAULT: "#5C6B1E", dark: "#46521A" },
        ncnavy: { DEFAULT: "#1E2A55", dark: "#161F40" },
      },
      fontFamily: {
        // Serif display headlines (ncsu.edu style) + clean sans body/UI
        display: ["var(--font-display)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-body)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
