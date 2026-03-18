/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         
    "./dist/**/*.html",     
    "./src/**/*.{js,ts,jsx,tsx,html}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}