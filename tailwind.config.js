export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#fe3c72',
        fadedPrimary: '#EF4A75',
        hotpink: '#ff147f',
        pinkishRed: '#fd1d5a',
        orange: '#fc7f45',
        active: '#ff0059'
      },
      screens: {
        desktop: '640px'
      },
      boxShadow: {
        screen: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
      }
    }
  },
  plugins: []
}
