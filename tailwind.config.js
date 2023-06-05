/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        home: '40% 60%',
      },
      fontFamily: {
        body: ['Mabry Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
