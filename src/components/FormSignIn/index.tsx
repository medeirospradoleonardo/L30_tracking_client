import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import React, { useState } from 'react'
import { SignUpFieldErrors } from 'utils/validations'
import { useLanguage } from 'hooks/use-language'

import * as S from './styles'

import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2'
import { useToast } from 'hooks/use-toast'
import Link from 'next/link'

export type SignInFields = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormSignIn = () => {
  const { language } = useLanguage()
  const { openPromise } = useToast()

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<SignUpFieldErrors>()

  const [values, setValues] = useState<SignInFields>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setFormError('')

    // const errors = signUpValidate(values, language)

    // console.log(errors)

    // if (errors && Object.keys(errors).length) {
    //   setFieldError(errors)
    //   return
    // }

    openPromise('Aguardando resposta')
    setFieldError(null)

    // create user
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder={language.components.FormSignIn.inputEmail}
          type="text"
          error={fieldError?.email && Object.values(fieldError?.email)[0]}
          onInputChange={(v: string) => handleInput('email', v)}
          icon={<HiOutlineEnvelope size={22} />}
        />
        <TextField
          name="password"
          placeholder={language.components.FormSignIn.inputPassword}
          type="password"
          error={fieldError?.password && Object.values(fieldError?.password)[0]}
          onInputChange={(v: string) => handleInput('password', v)}
          icon={<HiOutlineLockClosed size={22} />}
        />

        <Link href="/forgot-password" style={{ textDecoration: 'none' }}>
          <S.ForgotPassword>
            {language.components.FormSignIn.forgotPassword}
          </S.ForgotPassword>
        </Link>
        <Button type="submit" size="large" fullWidth>
          <span>{language.components.FormSignIn.buttonSignIn}</span>
        </Button>

        <FormLink>
          {language.components.FormSignIn.notHaveAccount}{' '}
          <Link href="/sign-up">
            {language.components.FormSignIn.buttonSignUp}
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
