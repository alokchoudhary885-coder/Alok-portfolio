/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgDark: "#090d16",
        bgVoid: "#040711",
        cardDark: "#0f172a",
        cardBorder: "rgba(59, 130, 246, 0.15)",
        cardBorderSubtle: "rgba(255, 255, 255, 0.08)",
        accentBlue: "#3b82f6",
        accentBlueLight: "#60a5fa",
        accentIndigo: "#6366f1",
        accentCyan: "#38bdf8",
        brandBlue: "#3b82f6",
        brandIndigo: "#6366f1",
        textMuted: "#94a3b8",
        surfaceLow: "#0b0f19",
        surfaceHigh: "#131b2e",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        syne: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 16s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'soft-blue': '0 0 25px rgba(59, 130, 246, 0.15)',
        'soft-glow': '0 4px 20px -2px rgba(59, 130, 246, 0.2)',
        'card-hover': '0 12px 30px -10px rgba(59, 130, 246, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
