import { css, styled } from 'styled-components'

const modalModifiers = {
  full: () => css`
    height: 100%;
    width: 100%;
    border-radius: 0;
  `
}

type ModalProps = {
  $full: boolean
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, $full }) => css`
    background: ${theme.colors.bg};
    color: ${theme.colors.font};

    border-radius: ${theme.border.radiusCard};

    z-index: ${theme.layers.modal};

    ${$full && modalModifiers.full()}
  `}
`

const overlayModifiers = {
  mobile: () => css`
    align-items: start;

    ${Modal} {
      margin-top: 5rem;
    }
  `
}

type OverlayProps = {
  $onTop: boolean
}

export const Overlay = styled.div<OverlayProps>`
  ${({ theme, $onTop }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};

    display: flex;
    justify-content: center;
    align-items: center;

    ${$onTop && overlayModifiers.mobile()}
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
    background: ${theme.colors.bg};
    border-radius: ${theme.border.radiusCard};
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
