/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        fade_in_out: "fade_in 0.5s ease-in-out",
      },
      keyframes: {
        fade_in: {
          // "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
};
