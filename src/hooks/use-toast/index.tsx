import { ToastProps, ToastTypes } from 'components/Toast'
import ToastContainer from 'components/ToastContainer'
import { createContext, useContext, useMemo, useState } from 'react'

import { PositionOptions } from 'components/ToastContainer'

export type ToastData = {
  open: (title: string, options?: OpenProps) => string
  close: (id: string) => void
  closeAll: () => void
  pause: (id: string) => void
  play: (id: string) => void
  openPromise: (title: string, position?: PositionOptions) => string
  closePromise: (id: string, title: string, options?: OpenProps) => void
}

export const ToastDefaultValues = {
  open: () => '',
  close: () => null,
  closeAll: () => null,
  pause: () => null,
  play: () => null,
  openPromise: () => '',
  closePromise: () => null
}

export const ToastContext = createContext<ToastData>(ToastDefaultValues)

export type ToastProviderProps = {
  children: React.ReactNode
}

type OpenProps = {
  autoClose?: number | false
  closeOnClick?: boolean
  pauseOnHover?: boolean
  hideProgressBar?: boolean
  position?: PositionOptions
  type?: ToastTypes
  colored?: boolean
  isPaused?: boolean
}

const defaultOpenValues = {
  autoClose: 5,
  closeOnClick: true,
  pauseOnHover: true,
  hideProgressBar: false,
  position: 'bottom-right' as PositionOptions,
  type: 'default' as ToastTypes,
  colored: false,
  isPaused: false,
  isPromise: false
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
  const [toasts, setToasts] = useState([] as ToastProps[])

  const open = (title: string, options?: OpenProps) => {
    const id = generateUEID()
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: id,
        title,
        ...defaultOpenValues,
        ...options
      }
    ])

    return id
  }

  const openPromise = (
    title: string,
    position: PositionOptions = 'top-right'
  ) => {
    const id = generateUEID()
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id: id,
        title,
        ...defaultOpenValues,
        isPromise: true,
        position
      }
    ])

    return id
  }

  const closePromise = (id: string, title: string, options?: OpenProps) => {
    setToasts((currentToasts) =>
      currentToasts.map((toast) => {
        if (toast.id == id) {
          toast = {
            ...defaultOpenValues,
            ...options,
            id: toast.id,
            position: toast.position,
            title
          }
        }

        return toast
      })
    )
  }

  const close = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    )
  }

  const closeAll = () => {
    setToasts([])
  }

  const pause = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.map((toast) => {
        if (toast.id == id) {
          toast.isPaused = true
        }

        return toast
      })
    )
  }

  const play = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.map((toast) => {
        if (toast.id == id) {
          toast.isPaused = false
        }

        return toast
      })
    )
  }

  const contextValue = useMemo(
    () => ({ open, close, closeAll, pause, play, openPromise, closePromise }),
    []
  )

  return (
    <ToastContext.Provider value={contextValue}>
      {/* {children}
      {createPortal(
        <div
          style={{
            position: 'absolute',
            zIndex: 10000
          }}
        >
          {toasts.map((toast) => (
            <Toast
              title={toast.title}
              key={toast.id}
              close={() => close(toast.id)}
              hideProgressBar={toast.hideProgressBar}
              autoClose={100000}
            />
          ))}
        </div>,
        document.body.firstElementChild
        // document.body
      )} */}

      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export { ToastProvider, useToast }
