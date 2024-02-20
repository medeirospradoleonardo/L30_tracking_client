import { useLanguage } from 'hooks/use-language'
import { LanguageType } from 'hooks/use-language/languageType'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Alert = {
  title: string
  description: string
  time: string
  isRead: boolean
  isView: boolean
}

export type AlertContextData = {
  alerts: Alert[]
  quantity: number
}

export const AlertContextDefaultValues = {
  alerts: [],
  quantity: 0
}

export const AlertContext = createContext<AlertContextData>(
  AlertContextDefaultValues
)

export type AlertProviderProps = {
  children: React.ReactNode
}

export const getAlerts = () => {
  return [
    {
      title: 'Doogee S110',
      description: 'De VALINHOS-SP para BAURU-SP',
      time: '22:47',
      isRead: false,
      isView: false
    },
    {
      title: 'Mini Secador',
      description: 'De CURITIBA-PR para BAURU-SP',
      time: 'Ontem',
      isRead: false,
      isView: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      isRead: true,
      isView: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      isRead: true,
      isView: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      isRead: true,
      isView: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      isRead: true,
      isView: true
    },
    {
      title: 'R36S',
      description: 'Objeto saiu para entrega ao destinatário',
      time: '02/02',
      isRead: true,
      isView: true
    },
    {
      title: 'teste',
      description: 'teste',
      time: '02/02',
      isRead: true,
      isView: true
    }
  ]
}

export const refreshTitle = (language: LanguageType) => {
  const alerts = getAlerts()
  document.title =
    alerts.filter((alert) => alert.isView == false).length > 0
      ? `(${alerts.filter((alert) => alert.isView == false).length}) ${
          language.components.Logo.title
        }`
      : ` ${language.components.Logo.title}`
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<Alert[]>([])
  const { language } = useLanguage()

  useEffect(() => {
    setAlerts(getAlerts())
    refreshTitle(language)
  }, [language])

  const contextValue = useMemo(
    () => ({
      alerts: alerts,
      quantity: alerts.filter((alert) => alert.isView == false).length
    }),
    [alerts]
  )

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  )
}

const useAlert = () => useContext(AlertContext)

export { AlertProvider, useAlert }
