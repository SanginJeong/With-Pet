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
        modalOverlay : 'rgb(0,0,0,0.5)',
      },
      animation: {
        'modal-show': 'modal-show 0.3s ease-out',
      },
      keyframes: {
        'modal-show': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}