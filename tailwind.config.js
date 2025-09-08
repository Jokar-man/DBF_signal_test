/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'newspaper': ['IBM Plex Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      gridTemplateColumns: {
        '25': 'repeat(25, minmax(0, 1fr))',
        '26': 'repeat(26, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}