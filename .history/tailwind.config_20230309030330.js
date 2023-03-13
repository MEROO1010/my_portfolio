/** @type {import('tailwindcss').Config} */
module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'raleway': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}
