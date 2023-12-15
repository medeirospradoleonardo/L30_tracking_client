import styled, { DefaultTheme, css } from 'styled-components'

import { btnReset, v } from './variables'

type SidebarProps = {
  isOpen: boolean
}

export const Container = styled.div`
  height: 100%;
  position: fixed;
`

export const Sidebar = styled.div<SidebarProps>`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.colors.white};
  /* height: 100vh; */
  height: 100%;
  padding: ${v.lgSpacing};
  box-shadow: 8px 0px 12px 0px rgba(0, 0, 0, 0.1);
  position: relative;
`

type SidebarButtonProps = {
  isOpen: boolean
}

export const SidebarButton = styled.button<SidebarButtonProps>`
  ${btnReset};
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow:
    0 0 4px ${({ theme }) => theme.colors.bg3},
    0 0 7px ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`

export const ProjectTitleContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`

export const ProjectTitle = styled.h1`
  /* width: 52px; */
  font-size: 16px;
  display: flex;
  justify-content: center;
`

export const ProjectHelp = styled.h1`
  /* width: 52px; */
  font-size: 10px;
  display: flex;
  justify-content: center;
  color: #2e2f42;
`

export const Search = styled.div`
  background: ${({ theme }) => theme.colors.bgAlpha};
  border: 1px solid ${({ theme }) => theme.colors.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`

export const SearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`

export const DividerContainer = styled.div`
  display: flex;
  vertical-align: center;
`

export const DividerTitle = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bg3};
  margin: ${v.lgSpacing} 0;
`

type LinkContainerProps = {
  isActive: boolean
  session: boolean
}

export const LinkContainer = styled.div<LinkContainerProps>`
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.colors.bg3};
  border-radius: ${v.borderRadius};
  margin: 8px 0;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.bg3};

    ${({ session }) => css`
      ${!session && wrapperModifiers.noSessionSLinkLabel()}
    `}
  }

  ${({ session }) => css`
    ${!session && wrapperModifiers.noSessionSLinkContainer()}
  `}
`

const wrapperModifiers = {
  noSessionSLinkContainer: () => css`
    cursor: not-allowed;
  `,
  noSessionSLink: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    pointer-events: none;
    &::placeholder {
      color: currentColor;
    }
  `,
  noSessionSLinkLabel: () => css`
    ${LinkLabel} {
      opacity: 0;
    }
  `
}

type LinkProps = {
  session: boolean
}

export const Link = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
  ${({ session, theme }) => css`
    ${!session && wrapperModifiers.noSessionSLink(theme)}
  `}
  &:hover {
    box-shadow: none;
  }
`

export const NaoLogado = styled.div`
  display: inline-block;
  position: absolute;
  margin-left: 60px;
  color: '#42526E';
  background: '#dfe1e6';
  opacity: 0;
  font-size: 16px;
  ${LinkContainer}:hover & {
    opacity: 1;
  }
`

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`

export const LinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}

  svg {
    font-size: 20px;
  }
`

export const LinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  margin-right: ${v.mdSpacing};
`

export const Theme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`
export const ThemeLabel = styled.span`
  display: block;
  flex: 1;
`

type ThemeTogglerProps = {
  isActive: boolean
}
export const ThemeToggler = styled.button<ThemeTogglerProps>`
  ${btnReset};
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.colors.bg3 : theme.colors.primary};

  position: relative;
`

export const ToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bg};
`
