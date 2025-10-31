/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other folders containing Tailwind classes, like your 'interfaces' or 'constants'
    // if they contain React components, but typically you only need pages and components.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
