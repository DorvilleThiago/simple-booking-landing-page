/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pinky': '#CE41FF',
        'burple': '#923AFF',
        'grayy': '#EDE5F5',
        'text': '#A07CBB'
      }
    },
  },
  plugins: [],
}
