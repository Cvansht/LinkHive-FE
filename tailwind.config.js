/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color : {
        grey :{
         
          100 : "#eeeeef",
          200: "#e639ed",
          600 : "#95989c"


        },
        purple :{
          200 : "#e0e7ff",
          500 : "#5368e0",
          600 : "#3c4ba1"
        },
        mycolor: {
           100 :"#EEE7E7"

        }
       
       
      }
    },
  },
  plugins: [],
}