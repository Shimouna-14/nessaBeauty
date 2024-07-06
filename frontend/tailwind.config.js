/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'light-beige': '#E9E1DA',
          'beige' : '#DDCCC5',
          'blue': '#16212E'
        },
        
        screens: {
          "sm": {"max": "600px"},
          'md': {"min": "601px", "max": "1023px"},
          'lg': {"min": "1024px"}
        },
      },
    },
    plugins: [],
  }