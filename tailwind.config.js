/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      'sm': '.8rem',
      'md': '1rem',
      'lg': '1.5rem',
      'xl': '2.5rem',
      '2xl': '4rem'
    },
    extend: {
      backgroundImage: {
        'main': "url('../Assets/Images/background-img.jpg')",
      }
    },
  },
  plugins: [],
}

