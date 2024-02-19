import Modal, { ModalProps } from 'components/Modal'
import { createContext, useContext, useState } from 'react'

export type ModalContextData = {
  setModal: (modal: Pick<ModalProps, 'children' | 'title' | 'isOpen'>) => void
  openModal: () => void
  closeModal: () => void
}

export const ModalContextDefaultValues = {
  setModal: () => null,
  openModal: () => null,
  closeModal: () => null
}

export const ModalContext = createContext<ModalContextData>(
  ModalContextDefaultValues
)

export type ModalProviderProps = {
  children: React.ReactNode
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalProps, setModalProps] = useState<ModalProps>({
    children: <></>,
    title: '',
    isOpen: false,
    closeModal: () => null
  })

  const setModal = (
    modal: Pick<ModalProps, 'children' | 'title' | 'isOpen'>
  ) => {
    setModalProps({
      children: modal.children,
      title: modal.title,
      isOpen: modal.isOpen,
      closeModal: closeModal
    })
  }

  const openModal = () => {
    setModalProps((currentProps) => {
      return {
        ...currentProps,
        isOpen: true
      }
    })
  }

  const closeModal = () => {
    setModalProps((currentProps) => {
      return {
        ...currentProps,
        isOpen: false
      }
    })
  }

  return (
    <ModalContext.Provider
      value={{
        setModal,
        openModal,
        closeModal
      }}
    >
      <Modal {...modalProps} />
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal }
