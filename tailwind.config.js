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
        active: '#ff0059',
        textPrimary: '#505965',
        trueGreen: '#5cb85c'
      },
      screens: {
        desktop: '640px',
        xs: '376px'
      },
      boxShadow: {
        screen: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;',
        pfp: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'
      }
    }
  },
  plugins: []
}
