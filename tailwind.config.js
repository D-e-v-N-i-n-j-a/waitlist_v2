const withMT = require("@material-tailwind/react/utils/withMT");


export default withMT({
  content: [
   "./index.html",
   "./src/**/*.{vue,js,ts,jsx,tsx}",
   "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
   "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#FF8C78',
        primaryColor:'#04C595'
      },
    },
  },
  plugins: [],     
})