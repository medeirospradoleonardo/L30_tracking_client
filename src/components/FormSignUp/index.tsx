import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'
import React, { useState } from 'react'
import { FieldErrors, signUpValidate } from 'utils/validations'
import { useLanguage } from 'hooks/use-language'

import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed
} from 'react-icons/hi2'
import { useToast } from 'hooks/use-toast'

const FormSignUp = () => {
  const { language } = useLanguage()
  const { openPromise } = useToast()

  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    openPromise('Aguardando resposta')

    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    // create user
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder={language.components.FormSignOut.InputName}
          type="text"
          error={fieldError?.username}
          onInputChange={(v: string) => handleInput('username', v)}
          icon={<HiOutlineUser size={22} />}
        />
        <TextField
          name="email"
          placeholder={language.components.FormSignOut.InputEmail}
          type="text"
          error={fieldError?.email}
          onInputChange={(v: string) => handleInput('email', v)}
          icon={<HiOutlineEnvelope size={22} />}
        />
        <TextField
          name="password"
          placeholder={language.components.FormSignOut.InputPassword}
          type="password"
          error={fieldError?.password}
          onInputChange={(v: string) => handleInput('password', v)}
          icon={<HiOutlineLockClosed size={22} />}
        />
        <TextField
          name="confirm_password"
          placeholder={language.components.FormSignOut.InputConfirmPassword}
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(v: string) => handleInput('confirm_password', v)}
          icon={<HiOutlineLockClosed size={22} />}
        />

        <Button type="submit" size="large" fullWidth>
          <span>{language.components.FormSignOut.ButtonSignUp}</span>
        </Button>

        <FormLink>
          {language.components.FormSignOut.HaveAccount}{' '}
          <a href="/sign-in">{language.components.FormSignOut.ButtonSignIn}</a>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp