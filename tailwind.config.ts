import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand Kit Colors ── */
        cream: "#f6f4ef",
        offwhite: "#ede9e0",
        ink: "#222222",
        charcoal: "#333333",
        sage: "#939e7a",
        "sage-dark": "#6b7a5a",
        "dusty-blue": "#9caec1",
        "blue-light": "#c8d4e0",
        terracotta: "#c19673",
        "terracotta-dark": "#a07854",
        linen: "#d7cfac",
        "deep-brown": "#4b3427",
        "deep-sage": "#3d5230",
        forest: "#2a3d1e",
        /* Utility */
        "fomo-red": "#c0392b",
      },
      fontFamily: {
        display: ["var(--font-display)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        subtitle: ["var(--font-subtitle)", "Source Sans 3", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-mega": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.92", fontWeight: "700" }],
        "display-hero": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", fontWeight: "700" }],
        "display-xl": ["clamp(2.4rem, 5vw, 4.2rem)", { lineHeight: "1.0", fontWeight: "700" }],
        "display-lg": ["clamp(1.8rem, 3.5vw, 3rem)", { lineHeight: "1.05", fontWeight: "600" }],
        "display-md": ["clamp(1.4rem, 2.5vw, 2rem)", { lineHeight: "1.15", fontWeight: "600" }],
        "display-sm": ["clamp(1.1rem, 1.8vw, 1.5rem)", { lineHeight: "1.25", fontWeight: "500" }],
        "subtitle": ["clamp(1.1rem, 1.6vw, 1.4rem)", { lineHeight: "1.4" }],
        "subtitle-lg": ["clamp(1.3rem, 2vw, 1.8rem)", { lineHeight: "1.3" }],
        "body-lg": ["clamp(1.05rem, 1.4vw, 1.25rem)", { lineHeight: "1.6" }],
      },
      borderRadius: {
        pill: "9999px",
        card: "16px",
        "card-lg": "24px",
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(193, 150, 115, 0.4)",
        "glow-sage": "0 0 24px -4px rgba(147, 158, 122, 0.4)",
        "glow-blue": "0 0 24px -4px rgba(156, 174, 193, 0.4)",
        soft: "0 4px 24px -2px rgba(0, 0, 0, 0.06)",
        lifted: "0 12px 40px -8px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-terracotta": "linear-gradient(135deg, #c19673 0%, #d7cfac 100%)",
        "gradient-sage": "linear-gradient(135deg, #939e7a 0%, #3d5230 100%)",
        "gradient-warm": "linear-gradient(135deg, #c19673 0%, #4b3427 50%, #d7cfac 100%)",
        "gradient-earth": "linear-gradient(135deg, #4b3427 0%, #939e7a 50%, #c19673 100%)",
        "gradient-blue": "linear-gradient(135deg, #9caec1 0%, #c8d4e0 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(3deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "highlight-reveal": {
          "0%": { backgroundSize: "0% 100%" },
          "100%": { backgroundSize: "100% 100%" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "highlight-reveal": "highlight-reveal 0.8s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
