import { ThemeSwitchProvider } from 'hooks/use-theme'

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
      <ThemeSwitchProvider>
        <Story />
      </ThemeSwitchProvider>
    )}
  ]
}

export default preview
