// options: modular-scale:false, fontSizeUnit:px
import DesignSystem from '../index'

const DesignSystem1 = {
  type: {
    baseFontSize: '30px',

    sizes: {
      xs: '16px',
      s: '20px',
      base: '30px',
      m: '36px',
      l: '42px',
      xl: '50px',
      xxl: '58px',
    },
  },

  colors: {
    colorPalette: {
      blue: {
        base: 'blue',
        dark: 'navyblue',
      },
    },
  },

  breakpoints: {
    s: 200,
    m: 500,
    l: 800,
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000,
  },

  spacing: {
    scale: [0, 8, 16, 24, 32, 40],
  },
}

export default new DesignSystem(DesignSystem1)
