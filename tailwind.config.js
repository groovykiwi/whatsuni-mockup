/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        short: { raw: "(max-height: 480px)" },
      },
      colors: {
        primary: {
          100: "#e4f1e7",
          200: "#cae3ce",
          300: "#afd4b6",
          400: "#95c69d",
          500: "#7ab885", // primary: "hsl(130, 30%, 60%)",
          600: "#62936a",
          700: "#496e50",
          800: "#314a35",
          900: "#18251b",
        },
        secondary: "#a8cfa5",
        background: "#ffffff",
        font: "#000000",

        "dark-background": "#121212",
        "dark-background-secondary": "#212529",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 100s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
