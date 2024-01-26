import { renderHook } from '@testing-library/react'
import { setStorageItem } from 'utils/localStorage'
import { ThemeSwitchProvider, ThemeSwitchProviderProps, useTheme } from '.'

describe('useTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return true in isDarkMode, because SetTheme Dark', async () => {
    const wrapper = ({ children }: ThemeSwitchProviderProps) => (
      <ThemeSwitchProvider>{children}</ThemeSwitchProvider>
    )

    setStorageItem('theme', ['Dark'])

    const { result } = renderHook(() => useTheme(), {
      wrapper
    })

    expect(result.current.isDarkMode).toBe(true)
  })

  it('should return false in isDarkMode, because not SetTheme', async () => {
    const wrapper = ({ children }: ThemeSwitchProviderProps) => (
      <ThemeSwitchProvider>{children}</ThemeSwitchProvider>
    )

    const { result } = renderHook(() => useTheme(), {
      wrapper
    })

    expect(result.current.isDarkMode).toBe(false)
  })
})
