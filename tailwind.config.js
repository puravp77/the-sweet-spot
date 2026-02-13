/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sweep: {
          "0%": { opacity: "0", transform: "translateX(-60%)" },
          "30%": { opacity: "0.35" },
          "60%": { opacity: "0.2" },
          "100%": { opacity: "0", transform: "translateX(60%)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms ease-out both",
        "fade-in": "fadeIn 800ms ease-out both",
        float: "float 4s ease-in-out infinite",
        sweep: "sweep 6s ease-in-out infinite",
      },
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
