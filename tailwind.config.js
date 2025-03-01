/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#6366f1',
        success: '#22c55e',
        danger: '#ef4444',
        warning: '#f59e0b'
      }
    },
  },
  plugins: [],
}