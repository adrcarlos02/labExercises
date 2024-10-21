/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#5f6FFF",
        'navy': {
          800: '#001f3f', // Define your custom navy color here
        },
      },
    },
  },
  plugins: [],
}