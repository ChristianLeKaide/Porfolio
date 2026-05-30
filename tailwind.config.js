// tailwind.config.js
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
        dark: {
          primary: '#0a0a0f',
          secondary: '#1a1a2e',
          tertiary: '#16213e',
        },
        cyber: {
          blue: '#0ea5e9',
          cyan: '#06b6d4',
          teal: '#14b8a6',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(14, 165, 233, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(14, 165, 233, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}