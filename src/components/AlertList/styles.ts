import { Icon as AlertDropdownIcon } from 'components/AlertDropdown/styles'
import styled, { DefaultTheme, css } from 'styled-components'

import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  justify-content: center;
  align-items: center;

  border-radius: 5px;
  box-shadow: 8px 12px 24px 12px rgba(0, 0, 0, 0.15);

  ${({ theme }) => css`
    background: ${theme.colors.bg};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.bg};
      top: -1rem;
      right: 1rem;
    }

    &:hover {
      ${AlertDropdownIcon} {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.hover};
        transition: none;
      }
    }
  `}
`

export const Header = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderTitle = styled.span`
  ${({ theme }) => css`
    padding-left: 20px;
    color: ${theme.colors.font};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const AllRead = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    margin-left: auto;
    padding-right: 20px;

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `}
`

export const Empty = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
  `}
`

type AlertListContainerProps = {
  quantity: number
}

const alertListContainerModifiers = {
  empty: () => css`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  one: () => css`
    height: 100px;
  `,
  two: () => css`
    height: 200px;
  `,
  threeMore: () => css`
    height: 275px;
    overflow-y: scroll;
  `
}

export const AlertListContainer = styled.div<AlertListContainerProps>`
  ${({ quantity }) => css`
    width: 100%;

    ${quantity == 0 && alertListContainerModifiers.empty()}
    ${quantity == 1 && alertListContainerModifiers.one()}
    ${quantity == 2 && alertListContainerModifiers.two()}
    ${quantity >= 3 && alertListContainerModifiers.threeMore()}
  `}
`

type AlertContainerProps = {
  read: string
}

const alertContainerModifiers = {
  notRead: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGray};
  `
}

export const AlertContainer = styled.div<AlertContainerProps>`
  ${({ theme, read }) => css`
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;

    &:last-child {
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      background: ${theme.colors.gray};

      ${AlertDropdownIcon} {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.hover};
        transition: none;
      }
      ${AlertTime} {
        color: ${theme.colors.primary};
        font-size: ${theme.font.sizes.small};
        width: auto;
        height: auto;

        &::before {
          content: 'Excluir';
        }

        &:hover {
          color: ${darken(0.1, theme.colors.primary)};
        }
      }
    }

    ${read == 'false' && alertContainerModifiers.notRead(theme)}
  `}
`

export const AlertIcon = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 10px 10px;
    position: relative;
    color: ${theme.colors.fontOp};
  `}
`

export const AlertTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.font};
    font-size: ${theme.font.sizes.large};
  `}
`

export const AlertDescription = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.font};
    font-size: ${theme.font.sizes.small};
  `}
`

type AlertTimeProps = {
  time: string
}

export const AlertTime = styled.div<AlertTimeProps>`
  ${({ theme, time }) => css`
    font-weight: ${theme.font.light};
    color: ${theme.colors.font};
    margin-left: auto;
    font-size: ${theme.font.sizes.xsmall};
    padding-right: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '${time}';
    }
  `}
`
