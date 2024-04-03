/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        azul01: "#183466",
        celeste01: "#318fd0",
        rosado01: "#d6408e",
      },
      screens: {
        xsm: "370px",
      },
    },
  },
  plugins: [],
};
