/** @type {import('tailwindcss').Config} */
module.exports = {
  pages:'./pages',
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
        'raleway': ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}
