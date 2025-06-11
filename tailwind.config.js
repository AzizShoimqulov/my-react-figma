/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#020817',
          800: '#0f172a',
          700: '#1e293b',
        },
      },
    },
  },
  plugins: [],
}