/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pp-blue': '#00314D',
        'pp-blue-hover': '#002a42',
      },
    },
  },
  plugins: [],
} 