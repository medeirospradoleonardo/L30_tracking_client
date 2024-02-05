import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <S.Wrapper open={isOpen}>
      <S.Title
      // onMouseOver={() => setIsOpen(true)}
      // onMouseLeave={() => setIsOpen(false)}
      >
        {title}
      </S.Title>

      <S.Content
        // onMouseOver={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        {children}
      </S.Content>
      {/* <S.Overlay aria-hidden={!isOpen} onClick={() => setIsOpen(!isOpen)} /> */}
    </S.Wrapper>
  )
}

export default Dropdown
