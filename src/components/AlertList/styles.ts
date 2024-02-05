import { Icon as AlertDropdownIcon } from 'components/AlertDropdown/styles'
import styled, { DefaultTheme, css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  /* border-bottom: 1px solid rgb(178, 185, 197); */
  box-shadow: 8px 12px 24px 12px rgba(0, 0, 0, 0.05);

  ${({ theme }) => css`
    background: ${theme.colors.bg};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.bg};
      top: -1.2rem;
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
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const HeaderTitle = styled.span`
  ${({ theme }) => css`
    padding-left: 20px;
  `}
`

export const Empty = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

type MessageContainerProps = {
  read: boolean
}

const messageContainerModifiers = {
  notRead: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.lightGray};
  `
}

export const MessageListContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    /* margin-top: 1px; */
  `}
`

export const MessageContainer = styled.div<MessageContainerProps>`
  ${({ theme, read }) => css`
    /* width: 90%; */
    /* height: 90%; */
    /* border-radius: 5px; */
    padding: 5px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${!read && messageContainerModifiers.notRead(theme)}
  `}
`

export const MessageTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
  `}
`

export const MessageDescription = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
  `}
`

export const MessageTime = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
  `}
`
