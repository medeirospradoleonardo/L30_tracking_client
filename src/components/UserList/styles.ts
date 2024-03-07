import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    cursor: default;
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding: 2rem;
    box-shadow: 8px 12px 24px 12px rgba(0, 0, 0, 0.15);

    background: ${theme.colors.bg};
    border-radius: ${theme.border.radiusCard};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.bg};
      top: -1rem;
      right: 0.3rem;
    }
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    /* background: ${theme.colors.lightGray}; */
    border-radius: ${theme.border.radiusCard};

    color: ${theme.colors.font};

    cursor: pointer;

    &:hover {
      /* background: ${rgba(theme.colors.hover, 0.4)}; */
      background: ${rgba(theme.colors.primary, 0.4)};
      border-radius: ${theme.border.radiusCard};
      text-decoration: none;
    }
  `}
`

export const HeaderTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.large};
  `}
`
export const HeaderDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  ${({ theme }) => css`
    /* background: ${theme.colors.background}; */
    border-radius: ${theme.border.radiusCard};

    ${Link}:first-child {
      margin-top: ${theme.spacings.xxsmall};
    }

    ${Link}:last-child {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall};
  `}
  height: 0.1rem;
  width: 100%;
  background: rgba(181, 181, 181, 0.3);
`

export const Link = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    color: ${theme.colors.font};

    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};

    padding-left: ${theme.spacings.xxsmall};
    transition: background, color, ${theme.transition.default};

    &:hover {
      /* background: ${rgba(theme.colors.hover, 0.4)}; */
      background: ${rgba(theme.colors.primary, 0.4)};
      border-radius: ${theme.border.radiusCard};
      text-decoration: none;
    }
    > svg {
      color: ${theme.colors.primary};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
