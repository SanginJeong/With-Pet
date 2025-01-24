/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        notFoundTitle : '#333',
        notFoundMessage : '#666',
      }
    },
  },
  plugins: [],
}