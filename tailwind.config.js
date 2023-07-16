/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: "Karla, sans-serif",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};