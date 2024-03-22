import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Ubuntu"],
      },
      colors: {
        blue: {
          500: "#4F4CEE",
        },
        primary: "#4F4CEE",
        // primary: "#0A075F",
        // primary: "#3D37F1",
        success: "#16a34a",
      },
    },
  },
  plugins: [],
});
