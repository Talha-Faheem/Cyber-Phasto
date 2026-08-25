export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          red: '#FF0205',
          'red-dark': '#B00000',
          'red-bright': '#FF1616',
          black: '#050505',
          ink: '#090909',
          border: '#292929',
          muted: '#8d8d8d',
          paper: '#f5f2ef'
        }
      },
      fontFamily: {
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['DM Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
