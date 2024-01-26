import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from the localStorage', () => {
    window.localStorage.setItem('L30_theme', JSON.stringify(['Dark']))

    expect(getStorageItem('theme')).toStrictEqual(['Dark'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localStorage', () => {
    setStorageItem('theme', ['Dark'])

    expect(window.localStorage.getItem('L30_theme')).toStrictEqual(
      JSON.stringify(['Dark'])
    )
  })
})
