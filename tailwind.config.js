/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const {addUtilities, theme} = plugin
//const colors = plugin.theme('colors')

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
          fieldBlueDark: '#020C26',
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
          druk: ["Druk Bold", 'sans-serif'],
          graphik: ["Graphik Regular", 'sans-serif'],
          graphikMed: ['Graphik Medium', 'sans-serif'],
          graphikReg: ['Graphik Regular', 'sans-serif'],
          graphikBold: ["Graphik Semi-Bold", 'sans-serif'],
          lyonBold: ["Lyon Bold", 'serif'],
          lyonReg: ["Lyon Regular", "serif"],
          lyonItalic: ["Lyon Italic", 'serif']
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
          },

          wipeIn: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' }
          },

          wipeOut: {
            '0%': { transform: 'translateY(0)', height: '100%', opacity: 1 },
            '100%': { transform: 'translateY(-100%)', height: '0', opacity: 0 } 
          },
          disable: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 } 
          },
      },
      //use the animations and reference the keyframes 
      animation: {
        reveal: 'reveal 1s ease-in-out',
        revealPartial: 'revealPartial 1s ease-in-out',
        cover: 'cover 1s ease-in-out',
        coverPartial: 'coverPartial 1s ease-in-out',
        bounce: 'bounce 1s ease-in-out',
        wipeIn: 'wipeIn .2s ease-in-out forwards',
        wipeOut: 'wipeOut .2s ease-in-out frowards',
        disable: 'disable .3s ease-in-out', 
    },
    boxShadow: {
      'outline-blue': '0 0 5px 1px fieldBlue',  
      },
    },
    plugins: [
      function ({ addUtilities, theme }) {
        addUtilities({
          '.counter-reset': {
            'counter-reset': 'list'  
          },
          '.counted-list li': {
            position: 'relative',
          },
          '.counted-list li::before': {
            content: 'counter(list)',
            display: 'block', 
            position: 'absolute',
            left: 0,
            transform: 'translateY(.5rem)',   
            color: theme('colors.fieldBlue'),
            fontWeight: theme('fontWeight.medium'),
            fontSize: theme('fontSize.sm'),   
          },
          '.dash-list li::before':{
            content: '',
            display: 'block' ,
            position: 'absolute',
            left: 0,
            height: '.25rem',
            width: '.625rem',
            transform: 'translateY(-.75rem)',
          }
        })
      },
    ],
    corePlugins: {
      fontFamily: true,
    },
  }
}