/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#E03131',
          500: '#9B111E', // Main Rich Dark Red / Crimson Accent
          600: '#800C17', // Deeper Crimson Hover
          700: '#660810',
          800: '#4D050B',
          900: '#330206',
        },
        brand: {
          canvas: '#FAFAFA',
          surface: '#FFFFFF',
          dark: '#1A1A1A',
          muted: '#525252',
          border: '#E5E5E5',
          lightBorder: '#F0F0F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        'gold-glow': '0 4px 22px -2px rgba(155, 17, 30, 0.45)',
      }
    },
  },
  plugins: [],
}
