import styled, { css, DefaultTheme } from 'styled-components'

import { lighten } from 'polished'

type IconProps = {
  $iconPosition?: 'left' | 'right'
  $icon?: boolean
}

type InputProps = IconProps

type PlaceholderProps = {
  $iconPosition?: 'left' | 'right'
  $icon?: boolean
}

type WrapperProps = {
  $disabled?: boolean
  $error?: boolean
}

type InputWrapperProps = {
  $isDarkMode: boolean
  $hasValue: boolean
}

const inputWrapperModifiers = {
  selected: (
    theme: DefaultTheme,
    isDarkMode: boolean,
    hasValue: boolean,
    isFocus = false as boolean
  ) => css`
    ${Placeholder} {
      transform: translate(-7.5px, -8.5px) scale(0.88);
      height: 1.5rem;
      line-height: 1.5rem;
      z-index: 2;

      padding: 0 12px;
      box-shadow: ${isFocus
        ? isDarkMode
          ? `0 0 1rem ${theme.colors.primary}`
          : `0 0 0.5rem ${theme.colors.primary}`
        : hasValue
          ? `0 0 0.1rem #000`
          : 'none'};

      background: ${theme.colors.background};
    }

    ${EraseButton} {
      display: flex;
    }
  `
}

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, $isDarkMode, $hasValue }) => css`
    display: flex;
    background: ${theme.colors.background};
    border-radius: ${theme.border.radiusButton};
    ${
      $hasValue && inputWrapperModifiers.selected(theme, $isDarkMode, $hasValue)
    };

    &:focus-within {
      box-shadow: ${
        $isDarkMode
          ? `0 0 1rem ${theme.colors.primary}`
          : `0 0 0.5rem ${theme.colors.primary}`
      };
      outline: 1px solid ${lighten(0.2, theme.colors.primary)};
      
      ${inputWrapperModifiers.selected(theme, $isDarkMode, $hasValue, true)};
      
    }
    transition: color 20s ease-in-out
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 4rem;
    line-height: 4rem;
    position: relative;
    &:hover {
      outline: 1px solid ${lighten(0.2, theme.colors.primary)};
    }
  `}
`

export const Input = styled.input<InputProps>`
  ${({ theme, $iconPosition, $icon }) => css`
    color: ${theme.colors.font};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    /* padding-${$iconPosition}: ${$icon ? theme.spacings.large : 0}; */
    /* padding-right: 1.5rem; */
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    /* position: absolute; */
    transition: 0.2s ease;
    z-index: 1;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
    }
  `}
`

export const Placeholder = styled.div<PlaceholderProps>`
  ${({ theme, $iconPosition, $icon }) => css`
    color: ${theme.colors.darknessGray};
    background: transparent;
    border-radius: ${theme.border.radiusButton};

    font-size: ${theme.font.sizes.small};
    margin-${$iconPosition}: ${$icon ? theme.spacings.large : 0};
    line-height: 4rem;
    position: absolute;

    transition: 0.1s ease;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Buttons = styled.div`
  /* margin-left: auto; */
  width: min-content;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const EraseButton = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    margin-right: 0.9rem;
    z-index: 2;
    color: ${theme.colors.darknessGray};

    display: none;
    &:active {
      display: flex;
    }

    flex-direction: column;
    justify-content: center;
  `}
`

export const PasswordIcon = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    z-index: 2;
    margin-right: 0.9rem;
    color: ${theme.colors.darknessGray};

    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const Icon = styled.div<IconProps>`
  ${({ theme, $iconPosition }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0.9rem;
    padding-left: 0.9rem;
    color: ${theme.colors.darknessGray};
    order: ${$iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      outline: 1px solid ${theme.colors.error};
    }
    ${Icon},
    ${Label},
    ${Placeholder} {
      color: ${theme.colors.error};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
      ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, $error, $disabled }) => css`
    ${$error && wrapperModifiers.error(theme)}
    ${$disabled && wrapperModifiers.disabled(theme)}
  `}
`
