import { css, styled } from 'styled-components'
import * as BaseStyles from 'templates/Base/styles'

export const Section = styled.div`
  ${({ theme }) => css`
    ${BaseStyles.Content}
    background: ${theme.colors.bg};
  `}
`
