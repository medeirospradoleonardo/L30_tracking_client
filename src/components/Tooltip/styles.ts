import styled, { css, keyframes } from 'styled-components'

export const TooltipChildren = styled.div``

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

type TooltipBoxProps = {
  position: 'bottom' | 'left' | 'right'
}

export const TooltipBox = styled.span<TooltipBoxProps>`
  position: relative;

  ${({ theme }) => css`
    background-color: ${theme.colors.tooltip};
  `}
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.2);
  visibility: hidden;
`

type CenterContainerProps = {
  position: 'bottom' | 'left' | 'right'
  limit: 'right' | 'left' | null
}

const limitModifiers = {
  left: () => css`
    left: 0.25vw;
  `,
  right: () => css`
    right: 0.25vw;
  `,
  center: () => css`
    right: calc(-50% + 5px);
  `
}

export const CenterContainer = styled.div<CenterContainerProps>`
  position: absolute;
  width: max-content;

  bottom: calc(100% + 5px);
  pointer-events: none;
  display: flex;

  ${({ limit }) => css`
    ${limit == 'left' && limitModifiers.left()}
    ${limit == 'right' && limitModifiers.right()}
    ${limit == null && limitModifiers.center()}
  `}

  /* left: 0.25vw; // Left */
  /* right: 0.25vw; // Right */
  /* right: calc(-50% + 5px); // Center */ 
  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
          margin-left: -120px;
          left: 50%;
        `
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `
      default:
        return css`
          bottom: calc(100% + 5px);
        `
    }
  }}
`

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;

  &:hover {
    ${TooltipBox} {
      visibility: visible;
      animation: ${fadeIn} 0.5s linear;
    }
  }
`

export const TooltipText = styled.span``
