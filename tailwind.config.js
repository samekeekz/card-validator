/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk, sans-serif'],
      },
      backgroundImage: {
        cardImage: "url('./src/assets/bg-main-desktop.png')",
        cardFront: "url('./src/assets/bg-card-front.png')",
        cardBack: "url('./src/assets/bg-card-back.png')",
        ovals: "url('./src/assets/Group 10 (2).png')",

      },
      colors: {
        labelColor: '#21092F',
        error: '#FF5050',
        lightViolet: 'hsl(270, 3%, 87%)',
        darkViolet: 'hsl(279, 6%, 55%)',
        veryDarkViolet: 'hsl(278, 68%, 11%)',
      },
      borderColor: {
        default: '#DFDEE0',
        active: 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
      }
    },
  },
  plugins: [],
}