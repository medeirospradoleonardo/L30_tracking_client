import { css, styled } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  $color: 'primary' | 'secondary'
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $color }) => css`
    background: ${$color == 'primary'
      ? theme.colors.background
      : theme.colors.bg};
    display: flex;
    flex-direction: column;
    justify-content: end;
  `}
`

type ContentProps = {
  $color: 'primary' | 'secondary'
}

export const Content = styled.div<ContentProps>`
  ${({ theme, $color }) => css`
    /* margin-top: ${theme.spacings.large}; */
    /* padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge}; */
    background: ${$color == 'primary'
      ? theme.colors.bg
      : theme.colors.background};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`
