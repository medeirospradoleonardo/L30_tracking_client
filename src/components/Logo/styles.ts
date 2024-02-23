import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { rgba } from 'polished'

const wrapperModifiers = {
  normal: (isBR: boolean) => css`
    /* width: 15rem;
    height: 4.5rem; */
    width: ${isBR ? '14.14rem' : '9.14rem'};
    height: 100%;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
        width: 2.6rem;
        height: 4.5rem;

        svg {
            height: 4.5rem;
            pointer-events: none;
        }

        ${Title} {
            display: none;
        }
    `}
  `
}

type WrapperProps = {
  $size?: 'normal' | 'large'
  $hideOnMobile?: boolean
  $isBR: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ $size, $hideOnMobile, $isBR }) => css`
    display: flex;
    margin-left: 10px;
    margin-right: 40px;
    user-select: none;
    text-decoration: none;

    ${!!$size && wrapperModifiers[$size]($isBR)};
    ${!!$hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
`

export const Vertical = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 9px;
    height: 30px;
  `}
`

export const Horizontal = styled.div`
  display: flex;
`

export const Triangule = styled.div`
  ${({ theme }) => css`
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 9px 9px 0;
    border-color: transparent ${rgba(
      theme.colors.primary,
      0.8
    )}; transparent transparent;
    transform: rotate(0deg);
  `}
`
export const Retangule = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    width: 16px;
    height: 9px;
  `}
`

export const Number = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxxlarge};
    bottom: 0.7rem;
    right: 1.2rem;
    position: relative;
  `}
`
type TitleProps = {
  $isDarkMode: boolean
}

export const Title = styled.span<TitleProps>`
  ${({ theme, $isDarkMode }) => css`
    color: ${$isDarkMode ? theme.colors.darkGray : theme.colors.darknessGray};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    display: flex;
    justify-content: end;
    flex-direction: column;

    right: 4rem;
    top: 0.2rem;
    position: relative;
  `}
`
