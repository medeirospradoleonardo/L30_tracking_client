import { useEffect, useRef, useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  openOnClick?: boolean
}

const Dropdown = ({ title, children, openOnClick = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const configTitle = openOnClick
    ? {
        onClick: () => setIsOpen(true)
      }
    : {
        onMouseOver: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      }
  const configContent = openOnClick
    ? {}
    : {
        onMouseOver: () => setIsOpen(true),
        onMouseLeave: () => setIsOpen(false)
      }

  const handleClickOutside = () => {
    if (!ref?.current) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    openOnClick &&
      isOpen &&
      document.addEventListener('click', handleClickOutside, true)
    return () => {
      openOnClick &&
        document.removeEventListener('click', handleClickOutside, true)
    }
  }, [isOpen, openOnClick])

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Title {...configTitle}>{title}</S.Title>
      <S.Content {...configContent} aria-hidden={!isOpen}>
        {children}
      </S.Content>
      {/* {openOnClick && isOpen && (
        <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(false)} />
      )} */}
    </S.Wrapper>
  )
}

export default Dropdown
