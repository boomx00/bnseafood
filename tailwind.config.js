/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage:{
        'boat':"url('/bnboat.PNG')"
      },
      animation: {
        navIn: 'fadeInNav 2s ease-in-out'
      },

      // that is actual animation
      keyframes: theme => ({
        fadeInNav: {
          '0%': { width: '0px' },
          '100%': { width:'300px'}
        },

      })
    },

  },
  plugins: [
    require('flowbite/plugin')
  ] 

}
