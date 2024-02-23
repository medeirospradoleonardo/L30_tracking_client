import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { LineColors } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
`}
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineLeft: (theme: DefaultTheme, lineColor: LineColors | undefined) => css`
    padding-left: ${theme.spacings.xxsmall};
    margin-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid
      ${lineColor != undefined ? theme.colors[lineColor] : 0};
  `,
  lineBottom: (
    theme: DefaultTheme,
    lineColor: LineColors | undefined,
    marginBottom: boolean
  ) => css`
    position: relative;
    margin-bottom: ${marginBottom ? theme.spacings.medium : 0};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid
        ${lineColor != undefined ? theme.colors[lineColor] : 0};
    }
  `,
  light: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
  `
}

type WrapperProps = {
  $lineLeft: boolean
  $lineBottom: boolean
  $lineColor: LineColors
  $size: 'small' | 'medium' | 'huge'
  $light: boolean
  $marginBottom: boolean
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({
    theme,
    $lineLeft,
    $lineBottom,
    $lineColor,
    $size,
    $light,
    $marginBottom
  }) => css`
    color: ${theme.colors.font};
    font-weight: ${theme.font.semiBold};

    ${$lineLeft && wrapperModifiers.lineLeft(theme, $lineColor)}
    ${$lineBottom &&
    wrapperModifiers.lineBottom(theme, $lineColor, $marginBottom)}
    ${!!$size && wrapperModifiers[$size](theme)}
    ${$light && wrapperModifiers.light(theme)}
  `}
`
