/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        naskh: ['Noto Naskh Arabic', 'serif']
      },
      colors: {
        gold: {
          300: '#fde68a',
          400: '#facc15',
          500: '#eab308'
        },
        silver: '#e7e5e4',
        burgundy: '#8b1538'
      },
      keyframes: {
        shimmer: { '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 0 rgba(250,204,21,.3)' }, '50%': { boxShadow: '0 0 38px rgba(250,204,21,.8)' } },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }
      },
      animation: {
        shimmer: 'shimmer 2.2s ease-in-out infinite',
        pulseGlow: 'pulseGlow .35s ease-out',
        floatY: 'floatY 3.4s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
