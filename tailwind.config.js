module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryA: "#6181ff",
        primaryB: "#ca83fd",
        primaryC: "#f7fe73",

        pillBg: "rgba(255, 255, 255, 0.20)",
        pillBorder: "rgba(255, 255, 255, 0.45)",
        pillHoverBg: "rgba(255, 255, 255, 0.40)",
        pillHoverColor: "#000",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        dancing: ["'Dancing Script'", "cursive"],
      },
      keyframes: {
        heroGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        floatPill: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-4px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        floatPill: "floatPill 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
