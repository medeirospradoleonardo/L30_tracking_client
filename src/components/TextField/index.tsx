import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'
import { useTheme } from 'hooks/use-theme'

import { HiMiniEye, HiMiniEyeSlash, HiMiniXCircle } from 'react-icons/hi2'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'left',
  label,
  name,
  initialValue = '',
  error,
  disabled = false,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [type, setType] = useState(props.type)
  const { isDarkMode } = useTheme()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper $disabled={disabled} $error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper $isDarkMode={isDarkMode} $hasValue={!!value}>
        {!!icon && <S.Icon $iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          autoComplete="off"
          onChange={onChange}
          value={value}
          $iconPosition={iconPosition}
          $icon={!!icon}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
          type={type}
          placeholder={undefined}
        />
        <S.Placeholder $iconPosition={iconPosition} $icon={!!icon}>
          {props.placeholder}
        </S.Placeholder>
        <S.Buttons>
          {!!value && (
            <S.EraseButton
              onClick={() => {
                setValue('')
                onInputChange && onInputChange('')
              }}
            >
              <HiMiniXCircle />
            </S.EraseButton>
          )}
          {props.type == 'password' && (
            <S.PasswordIcon>
              {type == 'text' ? (
                <HiMiniEyeSlash onClick={() => setType('password')} />
              ) : (
                <HiMiniEye onClick={() => setType('text')} />
              )}
            </S.PasswordIcon>
          )}
        </S.Buttons>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
