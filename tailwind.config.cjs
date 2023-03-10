/** @type {import('tailwindcss').Config} */	
module.exports = {	
  content: [	
    "./index.html",	
    "./src/**/*.{js,ts,jsx,tsx}",	
  ],	
  theme: {	
    extend: {	
      colors: {	
        primary: "#E8C2CA",	
        secondary: "#424242",	
        tertiary: "#F3F2F2",	
        mandatory: "#FF0000",	
        warning: "#FFC107",	
        success: "#4CAF50",	
      },	
    },	
  },	
  plugins: [],	
}