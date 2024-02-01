import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem, setStorageItem } from 'utils/localStorage'

import languagesPT_BR from './ptBR'
import languagesEN_US from './enUS'
import { LanguageType } from './languageType'

const LANGUAGE_KEY = 'language'

type Language = 'pt-BR' | 'en-US'

export type LanguageSwitchData = {
  saveLanguage: (language: Language) => void
  language: LanguageType
  getLanguages: {
    label: string
    value: Language
  }[]
  getLanguageValue: Language
}

export const LanguageSwitchDefaultValues = {
  saveLanguage: () => null,
  language: languagesPT_BR,
  getLanguages: [
    {
      label: 'Português (Brasil)',
      value: 'pt-BR' as Language
    },
    {
      label: 'English',
      value: 'en-US' as Language
    }
  ],
  getLanguageValue: 'pt-BR' as Language
}

export const LanguageSwitchContext = createContext<LanguageSwitchData>(
  LanguageSwitchDefaultValues
)

export type LanguageSwitchProviderProps = {
  children: React.ReactNode
}

const LanguageSwitchProvider = ({ children }: LanguageSwitchProviderProps) => {
  const [language, setLanguage] = useState<Language>('pt-BR')

  useEffect(() => {
    const data = getStorageItem(LANGUAGE_KEY)

    // falta fazer a consulta no back da conta caso nao tenha no localStorage

    if (data) {
      saveLanguage(data[0])
    } else {
      if (navigator.language == 'pt-BR') {
        saveLanguage('pt-BR')
      } else {
        saveLanguage('en-US')
      }
    }
  }, [])

  const saveLanguage = (language: Language) => {
    const newLanguage = language == 'pt-BR' ? 'pt-BR' : 'en-US'
    setLanguage(newLanguage)
    setStorageItem(LANGUAGE_KEY, [newLanguage])
  }

  return (
    <LanguageSwitchContext.Provider
      value={{
        saveLanguage,
        language: language == 'pt-BR' ? languagesPT_BR : languagesEN_US,
        getLanguages: [
          {
            label: 'Português (Brasil)',
            value: 'pt-BR'
          },
          {
            label: 'English',
            value: 'en-US'
          }
        ],
        getLanguageValue: language
      }}
    >
      {children}
    </LanguageSwitchContext.Provider>
  )
}

const useLanguage = () => useContext(LanguageSwitchContext)

export { LanguageSwitchProvider, useLanguage }
