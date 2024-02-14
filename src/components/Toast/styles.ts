import styled, { DefaultTheme, css, keyframes } from 'styled-components'
import { ToastTypes } from '.'
import {
  bounceInDown,
  bounceInLeft,
  bounceInRight,
  bounceInUp,
  bounceOutDown,
  bounceOutLeft,
  bounceOutRight,
  bounceOutUp
} from './animation'
import { PositionOptions } from 'components/ToastContainer'

type ContainerProps = {
  $width: number
  $closeOnClick: boolean | undefined
  $pauseOnHover: boolean
  $toastType: ToastTypes
  $animationEnd: boolean
  $position: PositionOptions
}

const containerModifiers = {
  pauseOnHover: () => css`
    &:hover {
      ${ProgressBar} {
        &:after {
          animation-play-state: paused;
        }
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    background: ${theme.colors.error};
  `,
  warning: (theme: DefaultTheme) => css`
    background: ${theme.colors.warning};
  `,
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.success};
  `
}

const getAnimation = (position: PositionOptions, animationEnd: boolean) => {
  switch (position) {
    case 'top-left':
      return animationEnd ? bounceOutLeft : bounceInLeft
    case 'top-right':
      return animationEnd ? bounceOutRight : bounceInRight
    case 'top-center':
      return animationEnd ? bounceOutUp : bounceInDown
    case 'bottom-left':
      return animationEnd ? bounceOutLeft : bounceInLeft
    case 'bottom-right':
      return animationEnd ? bounceOutRight : bounceInRight
    case 'bottom-center':
      return animationEnd ? bounceOutDown : bounceInUp
    default:
      return undefined
  }
}

export const Container = styled.div<ContainerProps>`
  ${({
    theme,
    $width,
    $closeOnClick,
    $pauseOnHover,
    $toastType,
    $animationEnd,
    $position
  }) => css`
    width: ${$width}px;
    min-height: 64px;
    max-height: 800px;
    border-radius: ${theme.border.radius};
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: ${$closeOnClick ? 'pointer' : 'default'};
    background: ${theme.colors.gray};
    animation-name: ${getAnimation($position, $animationEnd)};
    animation-fill-mode: both;
    animation-duration: ${$animationEnd ? '0.5s' : '0.5s'};
    overflow: hidden;

    ${$pauseOnHover && containerModifiers.pauseOnHover()}
    ${$toastType == 'error' && containerModifiers.error(theme)}
    ${$toastType == 'warning' && containerModifiers.warning(theme)}
    ${$toastType == 'success' && containerModifiers.success(theme)}
  `}
`

export const ToastHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`

type CloseIconProps = {
  $colored: boolean
}

const closeIconModifiers = {
  colored: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}

export const CloseIcon = styled.div<CloseIconProps>`
  height: max-content;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme, $colored }) => css`
    color: ${theme.colors.darkGray};
    &:hover {
      color: ${theme.colors.primary};
      transition: none;
    }

    ${$colored && closeIconModifiers.colored(theme)}
  `}
`

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg)}
`

export const PromiseIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(0deg, rgba(255, 61, 0, 0.2) 33%, #ff3d00 100%);

  box-sizing: border-box;
  animation: ${rotate} 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 26px;
    height: 26px;
    border-radius: 50%;

    ${({ theme }) => css`
      background: ${theme.colors.gray};
    `}
  }
`

type IconProps = {
  $type: 'default' | 'error' | 'warning' | 'success'
  $colored: boolean
}

const iconModifiers = {
  error: (theme: DefaultTheme, colored: boolean) => css`
    color: ${colored ? theme.colors.white : theme.colors.error};
  `,
  warning: (theme: DefaultTheme, colored: boolean) => css`
    color: ${colored ? theme.colors.white : theme.colors.warning};
  `,
  success: (theme: DefaultTheme, colored: boolean) => css`
    color: ${colored ? theme.colors.white : theme.colors.success};
  `
}

export const Icon = styled.div<IconProps>`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  ${({ theme, $type, $colored }) => css`
    ${$type == 'error' && iconModifiers.error(theme, $colored)}
    ${$type == 'warning' && iconModifiers.warning(theme, $colored)}
    ${$type == 'success' && iconModifiers.success(theme, $colored)}
  `}
`

type TitleProps = {
  $colored: boolean
  $isPromise?: boolean
}

const titleModifiers = {
  promise: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
  `
}

export const Title = styled.span<TitleProps>`
  ${({ theme, $colored, $isPromise }) => css`
    color: ${$colored ? theme.colors.white : theme.colors.font};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};

    ${$isPromise && titleModifiers.promise(theme)}
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
  ${({ theme }) => css`
    color: ${theme.colors.font};
  `}
`

type ProgressBarProps = {
  $type: 'default' | 'error' | 'warning' | 'success'
  $duration: number | false
  $hideProgressBar: boolean
  $colored: boolean
  $isPaused: boolean
}

const progressBarModifiers = {
  enable: ($duration: number) => css`
    animation: ${animFw} ${$duration}s linear;
  `,
  hidden: () => css`
    visibility: hidden;
  `,
  error: (theme: DefaultTheme, colored: boolean) => css`
    background: ${colored ? theme.colors.white : theme.colors.error};
  `,
  warning: (theme: DefaultTheme, colored: boolean) => css`
    background: ${colored ? theme.colors.white : theme.colors.warning};
  `,
  success: (theme: DefaultTheme, colored: boolean) => css`
    background: ${colored ? theme.colors.white : theme.colors.success};
  `
}

export const ProgressBar = styled.div<ProgressBarProps>`
  ${({ theme, $type, $duration, $hideProgressBar, $colored, $isPaused }) => css`
    width: 100%;
    height: 4.8px;
    display: inline-block;
    position: relative;
    overflow: hidden;
    visibility: ${$hideProgressBar ? 'hidden' : 'visibility'};

    margin-top: auto;

    &:after {
      content: '';
      box-sizing: border-box;
      width: 0;
      height: 4.8px;
      /* background: ${$colored ? theme.colors.white : theme.colors.primary}; */
      background: ${theme.colors.primary};
      ${$type == 'error' && progressBarModifiers.error(theme, $colored)}
      ${$type == 'warning' && progressBarModifiers.warning(theme, $colored)}
      ${$type == 'success' && progressBarModifiers.success(theme, $colored)}

      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0px 5px 5px 5px;
      border-radius: ${theme.border.radius};

      ${!!$duration && progressBarModifiers.enable($duration)};
      animation-play-state: ${$isPaused ? 'paused' : 'running'};
      ${$hideProgressBar && progressBarModifiers.hidden()};
    }
  `}
`

const animFw = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`
