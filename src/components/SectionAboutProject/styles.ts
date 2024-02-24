import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.background};
    transform: skewY(3deg);

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`

export const Image = styled.picture`
  max-width: 100%;

  img {
    display: block;
    max-width: min(60rem, 100%);
    margin: 0 auto;

    ${media.lessThan('medium')`
      max-width: 100%;
    `}
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.font};
      margin-bottom: ${theme.spacings.small};
    }

    strong {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`

export const Box = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.font};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    transform: skewY(-3deg);

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
    `}
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} 0 0;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.small} ${theme.spacings.xsmall} 0;
      column-count: 2;
    `}

    ${media.greaterThan('large')`
      column-count: 3;
    `}
  `}
`

export const Item = styled.li`
  ${({ theme }) => css`
    position: relative;
    list-style: none;
    padding-left: ${theme.spacings.small};

    &::after {
      content: ' ';
      position: absolute;
      width: 0.9rem;
      height: 0.9rem;
      top: 0.9rem;
      left: 0rem;
      border-radius: 100%;
      background: ${theme.colors.secondary};
    }

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
