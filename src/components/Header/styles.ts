import { css, styled } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  height: 45px;

  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
  display: flex;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.6);
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
  width: min-content;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min-content;
`

export const Center = styled.div`
  width: 100%;
`

export const Icon = styled.div`
  cursor: pointer;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.hover};
      transition: none;
    }
  `}
`
