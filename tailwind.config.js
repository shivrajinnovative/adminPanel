/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-red-100', 'bg-red-400', 
    'bg-slate-100', 'bg-slate-400', 
    'bg-green-100', 'bg-green-400', 
    'bg-violet-100', 'bg-violet-400'
  ],
  plugins: [],
}

