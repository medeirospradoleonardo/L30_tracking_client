import { rgba } from 'polished'
import { css, styled } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 100%;
  height: 45px;
  /* height: 70px; */
  ${({ theme }) => css`
    background: ${theme.colors.background};
  `}
  display: flex;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.6);
`

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const Left = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`

export const Right = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Center = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LabelContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    color: ${theme.colors.font};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.small};
    padding: 10px;

    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.hover};
      transition: none;
    }
  `}

  ${media.lessThan('medium')`
    height: max-content;
  `}
`
export const Label = styled.div`
  white-space: nowrap;
`

export const Icon = styled.div`
  cursor: pointer;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => css`
    color: ${theme.colors.font};
    &:hover {
      color: ${theme.colors.primary};
      background: ${theme.colors.hover};
      transition: none;
    }
  `}
`

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;

  width: 95vw;

  /* width: 100vw;
  height: calc(100vh - 45px); */

  cursor: default;
  padding: 0 2rem 2rem 2rem;

  align-items: start;

  ${({ theme }) => css`
    background: ${theme.colors.bg};
    border-radius: ${theme.border.radius};

    ${LabelContainer} {
      justify-content: start;
      &:hover {
        background: ${rgba(theme.colors.primary, 0.4)};
        color: ${theme.colors.font};
        transition: none;
      }
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

export const MenuMobileHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    /* background: ${theme.colors.lightGray}; */
    border-radius: ${theme.border.radius};
    width: 100%;

    color: ${theme.colors.font};

    cursor: pointer;

    &:hover {
      /* background: ${rgba(theme.colors.hover, 0.4)}; */
      background: ${rgba(theme.colors.primary, 0.4)};
      border-radius: ${theme.border.radius};
      text-decoration: none;
    }
  `}
`

export const MenuMobileHeaderTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.sizes.large};
  `}
`
export const MenuMobileHeaderDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
