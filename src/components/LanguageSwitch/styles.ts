import { rgba } from 'polished'
import { DefaultTheme, css, styled } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
    width: 95vw;
  `}
`

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 200px;
  margin-bottom: 10px;
  padding: 5px;

  &:hover {
    ${({ theme }) => css`
      background: ${rgba(theme.colors.primary, 0.2)};
      border-radius: ${theme.border.radiusCard};
    `}
  }

  cursor: pointer;
`

export const LanguageIcon = styled.div``

type LanguageLabelProps = {
  $selected: boolean
}

const LanguageLabelModifiers = {
  selected: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `
}

export const LanguageLabel = styled.span<LanguageLabelProps>`
  ${({ theme, $selected }) => css`
    color: ${theme.colors.font};
    ${$selected && LanguageLabelModifiers.selected(theme)}
    font-size: ${theme.font.sizes.medium};
  `}
`
