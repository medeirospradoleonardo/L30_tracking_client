import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onRequestClose: () => void
}

const Modal = ({ children, isOpen, onRequestClose }: ModalProps) => {
  const closeModal = () => {
    document.removeEventListener('keydown', keyDownHandler)
    onRequestClose()
  }

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      closeModal()
    }
  }

  if (isOpen) {
    document.addEventListener('keydown', keyDownHandler)
  } else {
    document.removeEventListener('keydown', keyDownHandler)
  }

  return (
    <S.Wrapper open={isOpen}>
      <S.Overlay aria-hidden={!isOpen} onClick={closeModal}>
        <S.Modal>{children}</S.Modal>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Modal
