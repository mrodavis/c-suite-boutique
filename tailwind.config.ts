import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        // C-Suite Brand Palette
        gold: {
          50:  "#FBF5E6",
          100: "#F6E8C3",
          200: "#EDD289",
          300: "#E2BC58",
          400: "#D4A84B",
          500: "#C9A15D", // Primary Gold
          600: "#B68840",
          700: "#966E2D",
          800: "#76551F",
          900: "#563D14",
        },
        blush: {
          50:  "#FFF5F5",
          100: "#FFE8E8",
          200: "#F5D6D6", // Soft Blush
          300: "#EDB8B8",
          400: "#E88C9A", // Rose Accent
          500: "#D97080",
          600: "#C4556A",
          700: "#A33D52",
          800: "#82293C",
          900: "#601727",
        },
        cream: {
          50:  "#FFFDFB", // Page Background
          100: "#FAF7F2", // Ivory
          200: "#F6EFE8", // Warm Cream
          300: "#EDE3D8",
          400: "#DED0BE",
          500: "#CEBDA4",
          600: "#BAAD93",
        },
        deep: "#3A2D2D",   // Primary text
      },
      fontFamily: {
        inter:    ["var(--font-inter)",    "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        script:   ["var(--font-script)",   "cursive"],
      },
      backgroundImage: {
        "gold-gradient":  "linear-gradient(90deg,#F7E7A6 0%,#E8C766 30%,#C9A15D 60%,#D4B96B 100%)",
        "blush-gradient": "linear-gradient(135deg,#F5D6D6 0%,#FAF7F2 60%,#F6EFE8 100%)",
        "hero-gradient":  "linear-gradient(135deg,#FFFDFB 0%,#FAF7F2 40%,#F5D6D6 75%,#F6EFE8 100%)",
      },
      boxShadow: {
        soft:  "0 4px 24px rgba(58,45,45,0.10)",
        gold:  "0 4px 24px rgba(201,161,93,0.30)",
        blush: "0 4px 24px rgba(232,140,154,0.25)",
        card:  "0 2px 16px rgba(58,45,45,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
