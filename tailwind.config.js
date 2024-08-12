/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:"white",
        none:"none"
      },
      borderWidth:{
        1:"1px"
      },
      fontFamily:{
        quicksand:["Quicksand","sans-serif"]
      },
      gridTemplateRows:{
        7: "reapeat(7, minmax(0,1 fr))",
        8: "reapeat(8, minmax(0,1 fr))",
      }
    },
  },
  plugins: [],
}

