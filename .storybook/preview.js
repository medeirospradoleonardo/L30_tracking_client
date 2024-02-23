import { LanguageSwitchProvider } from 'hooks/use-language'
import { ThemeSwitchProvider } from 'hooks/use-theme'
// import { ToastProvider } from 'hooks/use-toast'
import { AlertProvider } from 'hooks/use-alert'

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
            {/* <ToastProvider> */}
              <AlertProvider >
                <Story />
              </AlertProvider>
            {/* </ToastProvider> */}
          </ThemeSwitchProvider>
        </LanguageSwitchProvider>
      )
    }
  ]
}

export default preview
