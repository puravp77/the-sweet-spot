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
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 800ms ease-out both",
        float: "float 4s ease-in-out infinite",
        sweep: "sweep 6s ease-in-out infinite",
        blob: "blob 10s infinite",
      },
      colors: {
        accent: {
          DEFAULT: "#D4AF37", // Metallic Gold
          light: "#F3E5AB", // Vanilla
          dark: "#AA8C2C", // Dark Gold
        },
        primary: {
          DEFAULT: "#2C1E16", // Deep Espresso
          light: "#4A3628", // Coffee
        },
        surface: {
          DEFAULT: "#FFFFFF", // Pure white background
          light: "#FFFDF9", // Off-white
          dark: "#E8DED2", // Darker beige
        },
        rose: {
          DEFAULT: "#D8A7B1", // Soft rose pink
          light: "#EFD3D7",
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
