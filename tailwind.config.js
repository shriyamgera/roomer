/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d6e9ff'
      },
      backgroundImage: {
        bannerImg: "url('../public/bg.jpg')",
        blackOverlay: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 150%)",
      },
      fontFamily: {
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
