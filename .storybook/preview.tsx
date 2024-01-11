import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../src/styles/theme';
import GlobalStyles from '../src/styles/global'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => {
      const [isDarkMode, setIsDarkMode] = useState(false);
      return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    )}
  ]
}

export default preview
