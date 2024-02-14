import { css, styled } from 'styled-components'

export const Modal = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    color: ${theme.colors.font};

    top: 50%;
    left: 50%;

    border-radius: ${theme.border.radius};

    z-index: ${theme.layers.modal};
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

type WrapperProps = {
  $isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $isOpen }) => css`
    position: relative;
    width: max-content;

    ${Modal}, ${Overlay} {
      transition:
        transform 0.2s ease-in,
        transform 0.2s ease-out,
        opacity ${theme.transition.default};

      ${$isOpen && wrapperModifiers.open()}
      ${!$isOpen && wrapperModifiers.close()}
    }
  `}
`

export const ModalHeader = styled.div`
  width: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    border-radius: ${theme.border.radius};
  `}
  display: flex;
  padding: 10px;
`

export const Icon = styled.div`
  cursor: pointer;
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    &:hover {
      color: ${theme.colors.primary};
      transition: none;
    }
  `}
`

export const Left = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`
