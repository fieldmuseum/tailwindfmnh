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
