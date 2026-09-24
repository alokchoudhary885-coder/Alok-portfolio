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
        bgDark: "#0A0A0A",
        bgVoid: "#050505",
        cardDark: "#141414",
        cardBorder: "rgba(204, 255, 0, 0.15)",
        cardBorderSubtle: "rgba(255, 255, 255, 0.08)",
        neonLime: "#CCFF00",
        neonAccent: "#C3F400",
        brandNeon: "#CCFF00",
        brandGreen: "#CCFF00",
        brandCyan: "#00f0ff",
        textMuted: "#A0A0A0",
        surfaceLow: "#111111",
        surfaceHigh: "#1C1C1C",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Syne', 'sans-serif'],
        syne: ['Space Grotesk', 'Syne', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      },
      boxShadow: {
        'neon-lime': '0 0 30px rgba(204, 255, 0, 0.35)',
        'neon-glow': '0 0 25px rgba(204, 255, 0, 0.25)',
        'neon-hover': '0 0 40px rgba(204, 255, 0, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
