import { ThemeSwitchProvider } from 'hooks/use-theme'
import { LanguageSwitchProvider } from 'hooks/use-language'

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
      return (
        <LanguageSwitchProvider>
          <ThemeSwitchProvider>
            <Story />
          </ThemeSwitchProvider>
        </LanguageSwitchProvider>
      )
    }
  ]
}

export default preview
