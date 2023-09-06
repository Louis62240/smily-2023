/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#55423d',
        'rose-secondary':'#ffc0ad', 
      },
      textColor: {
        'headline': '#fffffe',
        'paragraph': '#fff3ec',
        'buttonText': '#271c19',
      },
      borderColor: {
        'stroke': '#140d0b',
      },
    },
  },
  plugins: [],
}

