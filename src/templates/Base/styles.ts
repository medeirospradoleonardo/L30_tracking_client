import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Header = styled.header`
  /* this is required for "sticky" to work  */
  /* top: 0; */
  z-index: 2;
  position: fixed;
  width: 100%;
`

export const Content = styled.main`
  ${({ theme }) => css`
    /* margin-top: ${theme.spacings.large}; */
    margin-top: 45px;
    /* margin-top: 1px; */
    /* flex: 1 0 auto; */
    /* flex-grow: 1; */
  `}
`

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
