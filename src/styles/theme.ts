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
      bg: 'rgb(255,255,255)',
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
      bg: 'rgb(255,255,255)',
      bgAlpha: 'rgba(250,250,250,.3)',
      bg2: 'rgb(245,245,245)',
      bg3: 'rgb(230,230,230)',
      text: 'rgb(45,45,45)'
    }
  },
  theme
)
