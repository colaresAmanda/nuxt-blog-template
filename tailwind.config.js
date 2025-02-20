/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#E8EEFF',  // Lightened slightly for a smoother transition from 100
          100: '#DBE2FF',  // Kept the same
          200: '#B0C0FF',  // Softened to blend with 100 and 300
          300: '#8DA4FF',  // Adjusted to harmonize with 200 and 400
          400: '#667EFF',  // Tweaked for better transition to 500
          500: '#3F5AFF',  // Made closer to 600 for a smoother gradient
          600: '#2D55FF',  // Kept the same
          700: '#2545D1',  // Adjusted to be less saturated and blend better with 600
          800: '#1E37A8',  // Darkened slightly for a smoother transition to 700
          900: '#192E8B',  // Made darker and less intense
          950: '#162778'   // Adjusted to harmonize with 900 and 800
        },
        highlight: {
          600: '#009EAB' // Highlight color remains the same
        },
        neutral: {
          50: '#F5F7FA', // Very light blue-gray
          100: '#EBEFF3', // Light blue-gray
          200: '#D6DEE7', // Light blue-gray
          300: '#BDC6D1', // Medium light blue-gray
          400: '#A0AEBE', // Medium blue-gray
          500: '#798FA1', // Dark blue-gray
          600: '#5F7183', // Darker blue-gray
          700: '#495A6B', // Even darker blue-gray
          800: '#354354', // Very dark blue-gray
          900: '#222B3D' // Almost black blue-gray
        }
      },
      fontFamily: {
        sans: ['Raleway','Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



// import type { Config } from 'tailwindcss'

// export default <Partial<Config>>{
//   theme: {
//     extend: {
//       aspectRatio: {
//         auto: 'auto',
//         square: '1 / 1',
//         video: '16 / 9'
//       }
//     }
//   }
// }