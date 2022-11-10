/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'special-bg': 'inset 0px 0px 150px 50px rgba(0, 0, 0, 0.3)',
        'special-social': '0px 0px 15px 2px rgba(0, 0, 0, 0.3)',        
      }
    },
  },
  plugins: [],
}
