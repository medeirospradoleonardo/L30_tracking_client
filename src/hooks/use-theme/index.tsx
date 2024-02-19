import { createContext, useContext, useEffect, useState } from 'react'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles/theme'
import GlobalStyles from 'styles/global'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

const THEME_KEY = 'theme'

type ThemeNames = 'Light' | 'Dark' | null

export type ThemeSwitchData = {
  saveTheme: (themeName: ThemeNames, withtransition?: boolean) => void
  isDarkMode: boolean
  changeIsOverlay: (isOverlay: boolean) => void
}

export const ThemeSwitchDefaultValues = {
  saveTheme: () => null,
  isDarkMode: false,
  changeIsOverlay: () => null
}

export const ThemeSwitchContext = createContext<ThemeSwitchData>(
  ThemeSwitchDefaultValues
)

export type ThemeSwitchProviderProps = {
  children: React.ReactNode
}

const ThemeSwitchProvider = ({ children }: ThemeSwitchProviderProps) => {
  const [isTransition, setIsTransition] = useState(false)
  const [isOverlay, setIsOverlay] = useState(false)
  const [theme, setTheme] = useState<ThemeNames>(null)

  useEffect(() => {
    const data = getStorageItem(THEME_KEY)

    // falta fazer a consulta no back da conta caso nao tenha no localStorage

    if (data) {
      saveTheme(data[0])
    } else {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        saveTheme('Dark')
      } else {
        saveTheme('Light')
      }
    }
  }, [])

  const saveTheme = (themeName: ThemeNames, withTransition = false) => {
    withTransition && setIsTransition(true)
    const newTheme = themeName == 'Light' ? 'Light' : 'Dark'
    setTheme(newTheme)
    setStorageItem(THEME_KEY, [newTheme])
  }

  const changeIsOverlay = (isOverlay: boolean) => {
    setIsOverlay(isOverlay)
  }

  if (!theme) {
    return null
  }

  return (
    <ThemeSwitchContext.Provider
      value={{
        saveTheme,
        isDarkMode: theme == 'Dark',
        changeIsOverlay
      }}
    >
      <StyleSheetManager shouldForwardProp={() => true}>
        <ThemeProvider theme={theme == 'Dark' ? darkTheme : lightTheme}>
          <GlobalStyles $isTransition={isTransition} $isOverlay={isOverlay} />
          {children}
        </ThemeProvider>
      </StyleSheetManager>
    </ThemeSwitchContext.Provider>
  )
}

const useTheme = () => useContext(ThemeSwitchContext)

export { ThemeSwitchProvider, useTheme }
