/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig, {
  //removes unwanted default fonts for better perfomance
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "field-blue": "#0a46e6",
      "link-blue": "#3d57cc",
      "success-green": "#53b59e",
      "warning-red": "#d44235",
      "field-black": "#0f0f14",
      "field-gray-darker": "#333336",
      "field-gray": "#6a6a71",
      "field-gray-light": "#c9cacc",
      "field-gray-lighter": "f0f3f3",
      "field-orange": "#f29f77",
      "field-purple": "b274a7",
      "field-blue-light": "#3d57cc",
      "field-green": "37816e",
      "field-yellow": "#f5d689",
      "field-aqua": "#6eb3d5"
    },
    fontFamily:{
      'druk': ["Druk Bold", 'display'],
      'graphik-med': ['Graphik Medium', 'sans-serif'],
      'graphik-reg': ['Graphik Regular', 'sans-serif'],
      'graphik-bold': ["Graphik Semi-Bold", 'sans-serif'],
      'lyon-bold': ["Lyon-Display Bold", 'serif'],
      "lyon-reg": ["Lyon-Display Regular", "serif"],
      "lyon-italic": ["Lyon-Display Italic", 'serif']
    },
  },
  //removes unwanted and unused CSS in production for better performance 
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
}
}
