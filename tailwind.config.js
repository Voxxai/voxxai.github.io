/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonRed: "#ff1a1a",
        neonBlack: "#1a1a1a",
        midnight: "#0a0a0a",
        ink: "#0f0f0f",
      },
      boxShadow: {
        glowRed: "0 0 25px rgba(255, 26, 26, 0.35)",
        glowBlack: "0 0 25px rgba(26, 26, 26, 0.35)",
        innerNeon:
          "0 0 40px rgba(255, 26, 26, 0.3), 0 0 60px rgba(200, 30, 30, 0.25)",
      },
      fontFamily: {
        display: [
          '"Space Grotesk"',
          '"JetBrains Mono"',
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
