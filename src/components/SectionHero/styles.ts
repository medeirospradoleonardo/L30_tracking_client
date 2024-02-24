import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  text-align: center;

  ${media.greaterThan('medium')`
    text-align: left;
  `}

  ${({ theme }) => css`
    color: ${theme.colors.font};
    background: ${theme.colors.bg};
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;

  ${media.greaterThan('medium')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const TextBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: 60rem;

    ${media.greaterThan('medium')`
      margin: initial;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.semiBold};
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: ${theme.font.light};

    ${media.greaterThan('medium')`
      font-size: min(${theme.font.sizes.xxlarge}, 3vw);
      line-height: min(5rem, 4.5vw);
    `}
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding-top: ${theme.spacings.medium};
    margin: 0 auto;

    ${media.greaterThan('medium')`
      margin: 0;
      padding-right: ${theme.spacings.medium};
    `}
  `}
`

export const Image = styled.img`
  width: 34rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.greaterThan('medium')`
    margin: 0;
    width: 42rem;
  `}
`
export const Svg = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
    width: min(34rem, 100%);

    ${media.greaterThan('medium')`
      margin: 0;
      width: 42rem;
    `}
  `}
`
