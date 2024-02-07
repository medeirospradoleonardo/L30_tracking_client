import Toast from 'components/Toast'
import { createContext, useContext, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

export type ToastData = {
  open: (title: string) => void
}

export const ToastDefaultValues = {
  open: () => null
}

export const ToastContext = createContext<ToastData>(ToastDefaultValues)

export type ToastProviderProps = {
  children: React.ReactNode
}

type Toast = {
  id: string
  title: string
}

// Create a random ID
function generateUEID() {
  const first = (Math.random() * 46656) | 0
  const second = (Math.random() * 46656) | 0
  const firstString = ('000' + first.toString(36)).slice(-3)
  const secondString = ('000' + second.toString(36)).slice(-3)

  return firstString + secondString
}

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState([] as Toast[])
  const open = (title: string) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), title }
    ])
  const close = (id: string) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    )
  const contextValue = useMemo(() => ({ open }), [])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {createPortal(
        <div
          style={{
            position: 'absolute'
          }}
        >
          {toasts.map((toast) => (
            <Toast
              title={toast.title}
              key={toast.id}
              close={() => close(toast.id)}
            />
          ))}
        </div>,
        document.body
      )}

      {/* <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '1000'
        }}
        className="toasts-wrapper"
      >
        {children}
        {toasts.map((toast) => (
          <Toast
            title={toast.title}
            key={toast.id}
            close={() => close(toast.id)}
          />
        ))}
      </div> */}
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export { ToastProvider, useToast }
