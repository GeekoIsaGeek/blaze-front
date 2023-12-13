export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe3c72',
        fadedPrimary: '#EF4A75',
        hotpink: '#ff147f',
        pinkishRed: '#fd1d5a',
        orange: '#fc7f45'
      },
      screens: {
        desktop: '640px'
      }
    }
  },
  plugins: []
}
