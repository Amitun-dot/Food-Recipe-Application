/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"  // <- tell Tailwind where to look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
