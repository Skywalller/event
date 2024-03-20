/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#4F4CEE",
        primary: "#0A075F",
        // primary: "#3D37F1",
        success: "#16a34a",
      },
    },
  },
  plugins: [],
};
