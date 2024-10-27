/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Including JSX and TSX files for full coverage
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF",
        navy: {
          800: '#001f3f', // Custom navy color
        },
        maroon: '#822927', // Maroon color directly at the root level
      },
    },
  },
  plugins: [],
};