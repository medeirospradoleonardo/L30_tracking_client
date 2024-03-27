import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  FormWrapper,
  FormLoading,
  FormError,
  FormSuccess
} from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { useLanguage } from 'hooks/use-language'
import {
  ForgotPasswordFieldErrors,
  forgotPasswordValidate
} from 'utils/validations'

export type ForgotPasswordFields = {
  email: string
}

const FormForgotPassword = () => {
  const { query } = useRouter()
  const { language } = useLanguage()
  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<ForgotPasswordFieldErrors>()
  const [values, setValues] = useState<ForgotPasswordFields>({
    email: (query.email as string) || ''
  })
  const [loading, setLoading] = useState(false)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    // const errors = forgotValidate(values)

    // if (Object.keys(errors).length) {
    //   setFieldError(errors)
    //   setLoading(false)
    //   return
    // }

    const errors = forgotPasswordValidate(values, language)

    console.log(errors)

    if (errors && Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError(undefined)

    setLoading(true)
    // enviar um post para /forgot-password pedindo um email
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(values)
    //   }
    // )

    // const data = await response.json()
    // setLoading(false)

    // if (data.error) {
    //   setFormError(data.message[0].messages[0].message)
    // } else {
    //   setSuccess(true)
    // }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          {/* <CheckCircleOutline /> */}
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>{/* <ErrorOutline /> {formError} */}</FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email && Object.values(fieldError?.email)[0]}
              initialValue={query.email as string}
              onInputChange={(v) => handleInput('email', v)}
              icon={<HiOutlineEnvelope size={22} />}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? (
                <FormLoading />
              ) : (
                <span>
                  {language.components.FormForgotPassword.buttonSendEmail}
                </span>
              )}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
