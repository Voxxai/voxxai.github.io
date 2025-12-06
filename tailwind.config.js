/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff4bcb",
        neonCyan: "#41f3ff",
        midnight: "#0a0d13",
        ink: "#0f1525",
      },
      boxShadow: {
        glowPink: "0 0 25px rgba(255, 75, 203, 0.35)",
        glowCyan: "0 0 25px rgba(65, 243, 255, 0.35)",
        innerNeon:
          "0 0 40px rgba(255, 75, 203, 0.3), 0 0 60px rgba(65, 243, 255, 0.25)",
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
