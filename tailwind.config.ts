import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        teal: "rgb(var(--teal) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(26, 37, 46, 0.08)",
        lift: "0 24px 80px rgba(26, 37, 46, 0.16)"
      },
      fontFamily: {
        sans: ['"Aptos"', '"Helvetica Neue"', '"Segoe UI Variable"', '"Segoe UI"', "sans-serif"],
        display: ['"Baskerville Old Face"', "Baskerville", '"Iowan Old Style"', '"Palatino Linotype"', "serif"]
      },
      letterSpacing: {
        snugger: "0.02em"
      }
    }
  },
  plugins: []
};

export default config;
