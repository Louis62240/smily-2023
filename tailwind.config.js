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
        'rose-secondary': '#ffc0ad',
      },
      textColor: {
        'headline': '#fffffe',
        'paragraph': '#fff3ec',
        'buttonText': '#271c19',
      },
      borderColor: {
        'primary': '#55423d',  // Using your primary color
        'stroke': '#140d0b',
        'highlight': '#ffc0ad',  // Using your rose-secondary color for focus
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.focus\\:border-highlight': {
          'borderColor': '#ffc0ad',  // Using your rose-secondary color for focus
          'transition': 'border-color 0.2s ease-in-out',
          '&:focus': {
            borderColor: '#ffc0ad',  // Using your rose-secondary color for focus
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
}
