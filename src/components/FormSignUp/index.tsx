import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import React, { useState } from 'react'
import {
  SignUpFieldErrors,
  passwordValidate,
  signUpValidate
} from 'utils/validations'
import { useLanguage } from 'hooks/use-language'

import * as S from './styles'

import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineCheck
} from 'react-icons/hi2'
import { useToast } from 'hooks/use-toast'
import Dropdown from 'components/Dropdown'

export type SignUpFields = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormSignUp = () => {
  const { language } = useLanguage()
  const { openPromise } = useToast()

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<SignUpFieldErrors>()
  const [checkPassword, setCheckPassword] = useState({
    minAndMax: false,
    leastOneLower: false,
    leastOneUpper: false,
    leastOneSpecial: false
  })
  const [values, setValues] = useState<SignUpFields>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
    if (field == 'password') {
      const errors = passwordValidate(value)
      setCheckPassword({
        minAndMax: !errors.min && !errors.max,
        leastOneLower: !errors.leastOneLower,
        leastOneUpper: !errors.leastOneUpper,
        leastOneSpecial: !errors.leastOneSpecial
      })
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setFormError('')

    const errors = signUpValidate(values)

    console.log(errors)

    if (errors && Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    openPromise('Aguardando resposta')
    setFieldError(null)

    // create user
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          placeholder={language.components.FormSignOut.inputName}
          type="text"
          error={fieldError?.name && Object.values(fieldError?.name)[0]}
          onInputChange={(v: string) => handleInput('name', v)}
          icon={<HiOutlineUser size={22} />}
        />
        <TextField
          name="email"
          placeholder={language.components.FormSignOut.inputEmail}
          type="text"
          error={fieldError?.email && Object.values(fieldError?.email)[0]}
          onInputChange={(v: string) => handleInput('email', v)}
          icon={<HiOutlineEnvelope size={22} />}
        />
        <Dropdown
          openOnClick={true}
          title={
            <TextField
              name="password"
              placeholder={language.components.FormSignOut.inputPassword}
              type="password"
              error={
                fieldError?.password && Object.values(fieldError?.password)[0]
              }
              onInputChange={(v: string) => handleInput('password', v)}
              icon={<HiOutlineLockClosed size={22} />}
            />
          }
        >
          <S.PasswordList>
            <S.PasswordRule>
              <S.PasswordRuleCheck $isValid={checkPassword?.minAndMax}>
                {checkPassword?.minAndMax && <HiOutlineCheck />}
              </S.PasswordRuleCheck>
              8-30 caracteres
            </S.PasswordRule>
            <S.PasswordRule>
              <S.PasswordRuleCheck $isValid={checkPassword?.leastOneUpper}>
                {checkPassword?.leastOneUpper && <HiOutlineCheck />}
              </S.PasswordRuleCheck>
              No minimo 1 letra maiuscula
            </S.PasswordRule>
            <S.PasswordRule>
              <S.PasswordRuleCheck $isValid={checkPassword?.leastOneLower}>
                {checkPassword?.leastOneLower && <HiOutlineCheck />}
              </S.PasswordRuleCheck>
              No minimo 1 letra minuscula
            </S.PasswordRule>
            <S.PasswordRule>
              <S.PasswordRuleCheck $isValid={checkPassword?.leastOneSpecial}>
                {checkPassword?.leastOneSpecial && <HiOutlineCheck />}
              </S.PasswordRuleCheck>
              No minimo 1 caractere especial
            </S.PasswordRule>
          </S.PasswordList>
        </Dropdown>

        <TextField
          name="confirm_password"
          placeholder={language.components.FormSignOut.inputConfirmPassword}
          type="password"
          error={
            fieldError?.confirmPassword &&
            Object.values(fieldError?.confirmPassword)[0]
          }
          onInputChange={(v: string) => handleInput('confirmPassword', v)}
          icon={<HiOutlineLockClosed size={22} />}
        />
        <Button type="submit" size="large" fullWidth>
          <span>{language.components.FormSignOut.buttonSignUp}</span>
        </Button>

        <FormLink>
          {language.components.FormSignOut.haveAccount}{' '}
          <a href="/sign-in">{language.components.FormSignOut.buttonSignIn}</a>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
