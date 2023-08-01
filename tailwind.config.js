/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        fieldBlue: "#0a46e6",
        linkBlue: "#3d57cc",
        successGreen: "#53b59e",
        warningRed: "#d44235",
        fieldBlack: "#0f0f14",
        fieldGrayDark: "#333336",
        fieldGray: "#6a6a71",
        fieldGrayLight: "#c9cacc",
        fieldGrayLighter: "#f0f3f3",
        fieldOrange: "#f29f77",
        fieldPurple: "#b274a7",
        fieldBlueLight: "#3d57cc",
        fieldGreen: "#37816e",
        fieldYellow: "#f5d689",
        fieldAqua: "#6eb3d5"
      },
      fontFamily:{
        druk: ["Druk Bold", 'display'],
        graphikMed: ['Graphik Medium', 'sans-serif'],
        graphikReg: ['Graphik Regular', 'sans-serif'],
        graphikBold: ["Graphik Semi-Bold", 'sans-serif'],
        lyonBold: ["Lyon-Display Bold", 'serif'],
        lyonReg: ["Lyon-Display Regular", "serif"],
        lyonItalic: ["Lyon-Display Italic", 'serif']
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
}

