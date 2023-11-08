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
          fieldAqua: "#6eb3d5", 
          hoverBlue: "#032c99"
        },
        content: {
          shuffleButton: 'url("https://www.datocms-assets.com/44232/1662998329-shuffle-icon.svg")'
        },
        fontFamily:{
          druk: ["Druk Bold", 'display'],
          graphik: ["Graphik", 'sans-serif'],
          graphikMed: ['Graphik Medium', 'sans-serif'],
          graphikReg: ['Graphik Regular', 'sans-serif'],
          graphikBold: ["Graphik Semi-Bold", 'sans-serif'],
          lyonBold: ["Lyon-Display Bold", 'serif'],
          lyonReg: ["Lyon-Display Regular", "serif"],
          lyonItalic: ["Lyon-Display Italic", 'serif']
        },
      //set up the animation base 
      keyframes:{
          reveal: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(-100%)' }
          },
          
          revealPartial: {
            '0%': { transform: 'translateY(0%)'},
            '100%': { transform: 'translateY(20%)'}
          },
          
          cover: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0%)' }
          },
          
          coverPartial: {
            '0%': { transform: 'translateY(-20%)' },
            '100%': { transform: 'translateY(0%)' }
          },
          
          bounce: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(0)' },
            '75%':  { transform: 'translateY(-3px)' },
            '100%': { transform: 'translateY(0)' }
        }
      },
      //use the animations and reference the keyframes 
      animation: {
        tertiaryArrow: "transform .2s cubic-bezier(.4,0,.2,1)",
        buttonAnimation: "transform .2s cubic-bezier(.4,0,.2,1)",
        button: "color .15s ease-in-out, background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        easeFastOutSlowIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeSlowOutFastIn: 'cubic-bezier(0, 0.35, 0.2, 1)',
        easeInstantOutSlowIn: 'cubic-bezier(1, 0, 1, 1)',
        easeSlowOutInstantIn: 'cubic-bezier(0, 1, 1, 1)',
        instantInSlowOut: 'cubic-bezier(0, 0, 0.2, 1)'
    },
    },
    plugins: [],
    corePlugins: {
      fontFamily: true,
    },
  }
}