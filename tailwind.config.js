/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color': '#39B7CB',
        'container-bg-color': '#303030',
        'active-tab-color': '#37E4FF',
        'li-color': '#0095AC',
        'border-color': '#01414A',
        'input-border': '#00DDFF',
        'input-bg': '#071517',
        'bg': '#07071c'
      },
      borderWidth: {
        '0.5': '0.2px',
      },
      backgroundImage: {
        'hero-image': 'url("assets/images/hero-bg.svg")', // Replace with your image path
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      }
    },
  },
  plugins: [],
}

