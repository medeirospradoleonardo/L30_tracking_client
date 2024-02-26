import styled, { css } from 'styled-components'

import { darken } from 'polished'

import * as HeadingStyles from 'components/Heading/styles'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    align-content: space-around;
    justify-content: space-around;
    /* 
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap; */

    ${media.greaterThan('medium')`
        grid-template-columns: repeat(4, 1fr)
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span,
    div {
      display: block;
      color: ${theme.colors.darkGray};
      /* color: ${darken(0.2, theme.colors.font)}; */
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.medium};
    }
    a {
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
    div:hover,
    a:hover {
      text-decoration: underline;
    }

    div {
      cursor: pointer;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
