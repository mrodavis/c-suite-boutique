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
        charcoal: "#0E0F11",
        ink: "#111319",
        teal: {
          50:  "#E6FBFF",
          100: "#C9F5FA",
          200: "#9FE7F1",
          300: "#6FD5E7",
          400: "#48C3DA",
          500: "#23AECC", // primary accent
          600: "#1A8CA6",
          700: "#146D83",
          800: "#0E4B59",
          900: "#09343E",
        },
        gold: {
          50:  "#FFF8E6",
          100: "#FCEEC2",
          200: "#F7DB84",
          300: "#F2C64B",
          400: "#E9B530",
          500: "#D7A21A", // used for text hover accents
          600: "#C18E12",
          700: "#A4720C",
          800: "#7D5609",
          900: "#5A3E06",
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(90deg, #F7E7A6 0%, #E8C766 30%, #D7A21A 60%, #F4D06F 100%)",
        "teal-glow":
          "radial-gradient(1200px 600px at 50% -200px, rgba(35,174,204,0.25), rgba(14,15,17,0))",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
      },
    },
  },
  plugins: [],
};

export default config;
