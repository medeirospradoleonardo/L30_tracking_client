import {
  Icon as UserIcon,
  Wrapper as UserIconWrapper
} from 'components/UserIcon/styles'
import { Icon as AlertDropdownIcon } from 'components/AlertDropdown/styles'
import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    position: relative;
    /* display: flex;
    align-items: center; */
    color: ${theme.colors.font};
    width: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    top: 2.1rem;
    cursor: pointer;
    border-radius: ${theme.border.radiusCard};
    background: ${theme.colors.bg};
    z-index: 10;
    /* width: 100%; */
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
    width: 100%;
    height: 100%;

    &:hover {
      ${AlertDropdownIcon}, ${UserIconWrapper} {
        color: ${theme.colors.primary};
        background: ${theme.colors.hover};
        transition: none;
      }

      ${UserIcon} {
        transform: rotate(180deg);
      }
    }

    ${Content} {
      transition:
        transform 0.2s ease-in,
        opacity ${theme.transition.default};

      ${$isOpen && wrapperModifiers.open()}
      ${!$isOpen && wrapperModifiers.close()}
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: transparent;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`
