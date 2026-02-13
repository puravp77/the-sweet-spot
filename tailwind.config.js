/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1EB",
        beige: "#E8DED2",
        gold: "#BFA181",
        dark: "#111111",
        softBrown: "#8D6E63",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
