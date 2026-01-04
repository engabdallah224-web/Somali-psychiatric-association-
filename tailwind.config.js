/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        spa: {
          dark: "#0b1b2b",   // dark navy
          primary: "#145c9e", // medical blue
          teal: "#0f9d8a",    // mental health teal
          light: "#e6f2ff"    // soft background
        }
      }
    }
  },
  plugins: []
};
