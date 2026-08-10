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
        bgDark: "#08090C",
        cardDark: "rgba(18, 20, 29, 0.7)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        brandCyan: "#00f0ff",
        brandOrange: "#ff5500",
        brandPurple: "#8a2be2",
        brandGreen: "#00ff66",
        textMuted: "#8e95a5",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
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
          '50%': { opacity: '0.8' },
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.25)',
        'neon-orange': '0 0 25px rgba(255, 85, 0, 0.25)',
        'neon-purple': '0 0 25px rgba(138, 43, 226, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
