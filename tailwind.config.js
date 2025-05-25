/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'pulse-medium': 'pulse 4s ease-in-out infinite',
        'pulse-fast': 'pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}