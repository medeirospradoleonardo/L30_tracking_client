import styled, { DefaultTheme, css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'

import { darken } from 'polished'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  cursor: default;

  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background: ${theme.colors.bg};
    border-radius: ${theme.border.radiusCard};

    ${media.greaterThan('medium')`
      box-shadow: 8px 12px 24px 12px rgba(0, 0, 0, 0.15);
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

    ${media.lessThan('medium')`
      width: 100vw;
      height: calc(100vh - 45px);
    `}

    ${HeadingStyles.Wrapper} {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${({ theme }) => css`
    background: ${theme.colors.bg};
  `}
`

export const HeaderTitle = styled.span`
  ${({ theme }) => css`
    padding-left: 2rem;
    color: ${theme.colors.font};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const AllRead = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xsmall};
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;

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
  $quantity: number
}

const alertListContainerModifiers = {
  empty: () => css`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  one: () => css`
    height: 10rem;
  `,
  two: () => css`
    height: 20rem;
  `,
  threeMore: () => css`
    height: 27.5rem;
    overflow-y: scroll;
  `
}

export const AlertListContainer = styled.div<AlertListContainerProps>`
  ${({ $quantity }) => css`
    width: 100%;
    /* cursor: pointer; */

    ${media.greaterThan('medium')`
      ${$quantity == 0 && alertListContainerModifiers.empty()}
      ${$quantity == 1 && alertListContainerModifiers.one()}
      ${$quantity == 2 && alertListContainerModifiers.two()}
      ${$quantity >= 3 && alertListContainerModifiers.threeMore()}
    `}

    ${media.lessThan('medium')`
      overflow-y: scroll;
    `}
  `}
`

type AlertContainerProps = {
  $isRead: boolean
  $remove: string
}

const alertContainerModifiers = {
  notRead: (theme: DefaultTheme) => css`
    background: ${theme.colors.lightGray};
  `
}

export const AlertContainer = styled.div<AlertContainerProps>`
  ${({ theme, $isRead, $remove }) => css`
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;
    cursor: pointer;

    &:last-child {
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      background: ${theme.colors.gray};

      ${AlertTime} {
        color: ${theme.colors.primary};
        font-size: ${theme.font.sizes.small};
        width: auto;
        height: auto;

        &::before {
          content: '${$remove}';
        }

        &:hover {
          color: ${darken(0.1, theme.colors.primary)};
        }
      }
    }

    ${!$isRead && alertContainerModifiers.notRead(theme)}
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
    font-weight: ${theme.font.semiBold};
    color: ${theme.colors.font};
    font-size: ${theme.font.sizes.medium};
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
  $time: string
}

export const AlertTime = styled.div<AlertTimeProps>`
  ${({ theme, $time }) => css`
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
      content: '${$time}';
    }
  `}
`
