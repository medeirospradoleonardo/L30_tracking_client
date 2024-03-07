import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

type GlobalStylesProps = {
  theme?: DefaultTheme
  $removeBg?: boolean
  $isTransition?: boolean
  $isOverlay?: boolean
}

const BaseModifiers = {
  modal: () => css`
    overflow: hidden;
    position: static;
    height: auto;
  `
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('IBMPlexSans Light'), local('IBMPlexSans-Light'),
          url('/fonts/IBMPlexSans-Light.woff2') format('woff2');
    }
  
    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('IBMPlexSans Regular'), local('IBMPlexSans-Regular'),
          url('/fonts/IBMPlexSans-Regular.woff2') format('woff2');
    }
  
    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('IBMPlexSans SemiBold'), local('IBMPlexSans-SemiBold'),
          url('/fonts/IBMPlexSans-SemiBold.woff2') format('woff2');
    }

    @font-face {
      font-family: 'IBM Plex Sans';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: local('IBMPlexSans Bold'), local('IBMPlexSans-Bold'),
          url('/fonts/IBMPlexSans-Bold.woff2') format('woff2');
    }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;


      ${({ $isTransition }) => css`
        ${$isTransition &&
        css`
          transition: background 0.2s ease-in;
        `}
      `}
  
      &::before,
      &::after{
        box-sizing: inherit;
      }
    }
  
    ${({ theme, $removeBg, $isOverlay }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};

        /* ${$isOverlay && BaseModifiers.modal()}; */

        ${!$removeBg &&
        css`
          background: ${theme.colors.background};
        `}
      }
      &::-webkit-scrollbar {
        width: 8px;
        background: ${theme.colors.bg};
      }

      &::-webkit-scrollbar-thumb {
        background: ${theme.colors.scroll};
        border-radius: ${theme.border.radiusCard};
      }
      &::-webkit-scrollbar-thumb:hover {
        background: ${theme.colors.scrollHover};
        max-height: 10px;
      }
    `}
  `

export default GlobalStyles
