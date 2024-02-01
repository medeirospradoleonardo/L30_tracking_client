import * as S from './styles'

import { HiOutlineXMark } from 'react-icons/hi2'

type ModalProps = {
  children: React.ReactNode
  title: string
  isOpen: boolean
  closeModal: () => void
}

const Modal = ({ children, title, isOpen, closeModal }: ModalProps) => {
  const closeModalRequest = () => {
    // document.removeEventListener('keydown', keyDownHandler)
  }

  // const keyDownHandler = (event: KeyboardEvent) => {
  //   if (event.key === 'Escape') {
  //     event.preventDefault()
  //     closeModal()
  //   }
  // }

  // if (isOpen) {
  //   document.addEventListener('keydown', keyDownHandler)
  // } else {
  //   document.removeEventListener('keydown', keyDownHandler)
  // }

  return (
    <S.Wrapper open={isOpen}>
      <S.Overlay aria-hidden={!isOpen} onClick={closeModal}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <S.ModalHeader>
            <S.Left>
              <h3>{title}</h3>
            </S.Left>
            <S.Right>
              <S.Icon onClick={closeModal}>
                <HiOutlineXMark size={25} />
              </S.Icon>
            </S.Right>
          </S.ModalHeader>
          {children}
        </S.Modal>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Modal
