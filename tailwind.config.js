/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['serif',]
    },
    // screens: {
    //   msm: '200px',
    //   sm: '640px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
