const theme = {
  font: {
    family:
      'IBM Plex Sans, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}

export const lightTheme = Object.assign(
  {
    colors: {
      primary: '#F26122',
      secondary: '#F67F45',
      background: '#F2F2F2',
      tooltip: '#393E46',
      font: '#000000',
      hover: '#DEDCDC',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#DEDCDC',
      gray: '#8F8F8F',
      darkGray: '#2E2F42',
      red: '#FF6347',
      bg: '#FFFFFF',
      bgAlpha: 'rgba(250,250,250,.3)',
      bg2: 'rgb(245,245,245)',
      bg3: 'rgb(230,230,230)',
      text: 'rgb(45,45,45)'
    }
  },
  theme
)

export const darkTheme = Object.assign(
  {
    colors: {
      primary: '#F26122',
      secondary: '#F67F45',
      background: '#2E2D2D',
      tooltip: '#393E46',
      font: '#FFFFFF',
      hover: '#4D4C4C',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#E8E8E8',
      gray: '#8F8F8F',
      darkGray: '#2E2F42',
      red: '#FF6347',
      bg: '#414142',
      bgAlpha: 'rgba(250,250,250,.3)',
      bg2: 'rgb(245,245,245)',
      bg3: 'rgb(230,230,230)',
      text: 'rgb(45,45,45)'
    }
  },
  theme
)
