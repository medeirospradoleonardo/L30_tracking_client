import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Header = styled.header`
  ${({ theme }) => css`
    z-index: ${theme.layers.menu};
  `}
  position: fixed;
  width: 100%;
  height: min-content;
`

export const Content = styled.main`
  overflow-y: auto;
  margin-top: 45px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${({ theme }) => css`
    background: ${theme.colors.bg};
  `}
`

export const Children = styled.div`
  flex: 1 0 auto;
`
