/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#FF6500",
        secondary:"#FF8A08",
        thirty:"#FFC100"
      }
    },
  },
  plugins: [],
}

