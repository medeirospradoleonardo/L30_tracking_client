import { useEffect } from 'react'
import * as S from './styles'

import { HiOutlineXMark } from 'react-icons/hi2'
import { useTheme } from 'hooks/use-theme'
import Heading from 'components/Heading'

export type ModalProps = {
  children: React.ReactNode
  title?: string
  isOpen: boolean
  closeModal: () => void
  onTop?: boolean
  withoutHeader?: boolean
  full?: boolean
}

const Modal = ({
  children,
  title,
  isOpen,
  closeModal,
  onTop = false,
  withoutHeader = false,
  full = false
}: ModalProps) => {
  const { changeIsOverlay } = useTheme()

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

  // useEffect(() => {
  //   isOpen ? changeIsOverlay(true) : changeIsOverlay(false)
  // }, [isOpen])

  // if (!isOpen) {
  //   return null
  // }

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Overlay aria-hidden={!isOpen} onClick={closeModal} $onTop={onTop}>
        <S.Modal onClick={(e) => e.stopPropagation()} $full={full}>
          {!withoutHeader && (
            <S.ModalHeader>
              {title && (
                <S.Left>
                  {/* <h3>{title}</h3> */}
                  <Heading size="medium" lineBottom>
                    {title}
                  </Heading>
                </S.Left>
              )}
              <S.Right>
                <S.Icon onClick={closeModal}>
                  <HiOutlineXMark size={25} />
                </S.Icon>
              </S.Right>
            </S.ModalHeader>
          )}
          {children}
        </S.Modal>
      </S.Overlay>
    </S.Wrapper>
  )
}

export default Modal
