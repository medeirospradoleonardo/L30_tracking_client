const theme = {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      'IBM Plex Sans, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif',
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 800,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3.6rem',
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
    menu: 15,
    toast: 20,
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
      // background: '#F7F7F7',
      background: '#F2F2F2',
      tooltip: '#393E46',
      font: '#000000',
      fontOp: '#FFFFFF',
      fontSecondary: '#757575',
      hover: '#DEDCDC',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#F1F1F1',
      gray: '#E3E2E2',
      darkGray: '#ADADAD',
      darknessGray: '#7B7B7B',
      warning: '#F1C40F',
      error: '#E74C3C',
      success: '#07BC0C',
      scroll: '#ADADAD',
      scrollHover: '#7D7D7D',
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
      background: '#3d3c3c',
      tooltip: '#393E46',
      font: '#FFFFFF',
      fontOp: '#000000',
      fontSecondary: '#ADADAD',
      hover: '#4D4C4C',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#6E6D6D',
      gray: '#595959',
      darkGray: '#ADADAD',
      darknessGray: '#7B7B7B',
      warning: '#F1C40F',
      error: '#E74C3C',
      success: '#07BC0C',
      scroll: '#ADADAD',
      scrollHover: '#595959',
      red: '#FF6347',
      bg: '#2E2D2D',
      bgAlpha: 'rgba(250,250,250,.3)',
      bg2: 'rgb(245,245,245)',
      bg3: 'rgb(230,230,230)',
      text: 'rgb(45,45,45)'
    }
  },
  theme
)
