/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT ({
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: { 
    container:  {
      center: true,
    },
    extend: {
      fontFamily: {
        pacifico : ['Pacifico'],
        sourcecodepro : ['Source Code Pro'],
        breeserif : ['Bree Serif'],
        rubik : ['Rubik']
      },
      backgroundImage: {
        'background' : "url('/src/media/images/bg-1.jpg');" 
      }
    }
  },
  plugins: [],
})
