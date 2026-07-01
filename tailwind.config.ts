import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1128",
          light: "#0B132B",
        },
        midnight: {
          DEFAULT: "#060B26",
          light: "#0B132B",
        },
        "brand-navy": {
          DEFAULT: "#0A1128",
          light: "#0B132B",
        },
        "brand-gold": {
          DEFAULT: "#D4AF37",
          bright: "#F4D03F",
        },
        "brand-cyan": {
          DEFAULT: "#0EA5E9",
          light: "#38BDF8",
        },
        "brand-silver": "#94A3B8",
      },
      boxShadow: {
        "gold-glow": "0 0 15px rgba(212, 175, 55, 0.4)",
        "gold-glow-lg":
          "0 0 25px rgba(212, 175, 55, 0.5), 0 0 50px rgba(212, 175, 55, 0.2)",
        "cyan-glow":
          "0 0 24px rgba(14, 165, 233, 0.12), 0 0 48px rgba(56, 189, 248, 0.08)",
        "cyan-glow-lg":
          "0 0 32px rgba(14, 165, 233, 0.18), 0 0 64px rgba(56, 189, 248, 0.12)",
      },
      keyframes: {
        "float-blob": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
      animation: {
        "float-blob": "float-blob 20s ease-in-out infinite",
        "float-blob-delayed": "float-blob 25s ease-in-out 5s infinite",
        "float-blob-slow": "float-blob 30s ease-in-out 10s infinite",
      },
    },
  },
};

export default config;
