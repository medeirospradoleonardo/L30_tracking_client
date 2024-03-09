import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  openOnClick?: boolean
}

const Dropdown = ({ title, children, openOnClick = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const configTitle = openOnClick
    ? {
        onClick: () => setIsOpen(!isOpen)
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
  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Title {...configTitle}>{title}</S.Title>
      <S.Content {...configContent} aria-hidden={!isOpen}>
        {children}
      </S.Content>
      {openOnClick && isOpen && (
        <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} />
      )}
    </S.Wrapper>
  )
}

export default Dropdown
