/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero-bg.webp')",
      }
    },
    fontFamily: {
      fira: ["Fira Code"],
      mono: ["IBM Plex Mono"]
    },
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake","pastel", "cyberpunk", "synthwave", "aqua"],
  },
}

