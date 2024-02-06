import { css, styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 45px;
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `}
  display: flex;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.6);
  position: fixed;
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
      background-color: ${theme.colors.hover};
      transition: none;
    }
  `}
`
