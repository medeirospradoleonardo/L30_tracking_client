import { lightTheme, darkTheme } from 'styles/theme'

// inferência de tipos
type ThemeLight = typeof lightTheme
type ThemeDark = typeof darkTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeLight {}
  export interface DefaultTheme extends ThemeDark {}
}
