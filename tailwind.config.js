/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          orange: '#ff7a00',
          'orange-dark': '#ff4500',
        },
        secondary: {
          'brick-red': '#b52b2b',
          'deep-blue': '#1f3b57',
        },
        neutral: {
          'light': '#f8f9fa',
        }
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #ff7a00 0%, #ff4500 100%)',
      }
    },
  },
  plugins: [],
}
