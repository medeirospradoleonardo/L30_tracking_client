import { css, styled } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  height: 45px;
  /* height: 70px; */
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
`

export const LabelContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    padding: 10px;

    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.hover};
      transition: none;
    }
  `}
`
export const Label = styled.div`
  white-space: nowrap;
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
