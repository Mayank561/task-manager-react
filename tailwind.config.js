/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#26272c', 
        'i-body': '#141a21'
      },
    },
  },
  plugins: [],
}
