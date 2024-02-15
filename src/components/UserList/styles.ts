import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Nav = styled.div`
  ${({ theme }) => css`
    cursor: default;
    display: flex;
    flex-direction: column;
    width: 26rem;
    padding: 2rem;
    box-shadow: 8px 12px 24px 12px rgba(0, 0, 0, 0.15);

    background: ${theme.colors.bg};
    border-radius: ${theme.border.radius};

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.bg};
      top: -1rem;
      right: 0;
    }
  `}
`

export const Link = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.background};
    color: ${theme.colors.font};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      /* background: ${theme.colors.primary};
      color: ${theme.colors.white}; */
      background-color: ${rgba(theme.colors.primary, 0.4)};
      border-radius: ${theme.border.radius};
      text-decoration: none;
    }
    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
