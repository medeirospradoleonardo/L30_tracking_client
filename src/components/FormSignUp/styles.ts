import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PasswordList = styled.div`
  width: 100%;
  height: 100%;
  ${media.greaterThan('medium')`
    width: 100%;
    width: max-content;
  `}

  ${media.lessThan('medium')`
    width: max-content;
  `}
  cursor: default;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.colors.darknessGray};
    background: ${theme.colors.bg};

    border-radius: ${theme.border.radiusCard};

    box-shadow: 8px 12px 12px 12px rgba(0, 0, 0, 0.15);
    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.bg};
      top: -1rem;
      right: 1rem;
    }
  `}
`

export const PasswordRule = styled.span`
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`
type PasswordRuleCheckProps = {
  $isValid: boolean
}
export const PasswordRuleCheck = styled.span<PasswordRuleCheckProps>`
  ${({ theme, $isValid }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.success};
    font-size: 1rem;
    border-radius: 50%;
    border: 1px solid ${$isValid ? theme.colors.success : theme.colors.darkGray};
    width: 1.6rem;
    height: 1.6rem;
    top: -0.4rem;
    right: -0.4rem;

    margin-right: 5px;
  `}
`
