import { ForgotPasswordFields } from 'components/FormForgotPassword'
import { SignUpFields } from 'components/FormSignUp'
import { LanguageType } from 'hooks/use-language/languageType'

type Errors = {
  required: string
  min: string
  max: string
  equal: string
  leastOneLower: string
  leastOneUpper: string
  leastOneSpecial: string
  email: string
}

function validate(fieldValue: string, fieldName: string) {
  const validations = {
    error: {
      [fieldName]: {} as Errors
    },
    required: function (message = 'Campo vazio') {
      if (fieldValue == null || fieldValue.length == 0) {
        this.error[fieldName].required = message
      }
      return validations
    },
    min: function (
      min: number,
      message = 'Campo não possui o mínimo de caracteres'
    ) {
      if (fieldValue?.length < min) {
        this.error[fieldName].min = message.replace('%', min.toString())
      }
      return validations
    },
    max: function (
      max: number,
      message = 'Campo não possui o máximo de caracteres'
    ) {
      if (fieldValue?.length > max) {
        this.error[fieldName].max = message.replace('%', max.toString())
      }
      return validations
    },
    equal: function (fieldCompareValue: string, message = 'Campo diferente') {
      if (fieldValue !== fieldCompareValue) {
        this.error[fieldName].equal = message
      }
      return validations
    },
    email: function (message = 'Email inválido') {
      if (
        //eslint-disable-next-line
        !/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(
          fieldValue
        )
      ) {
        this.error[fieldName].email = message
      }
      return validations
    },
    leastOneLower: function (
      message = 'Campo não possui no mínimo um caractere em minúsculo'
    ) {
      if (!new RegExp('(?=.*[a-z])').test(fieldValue)) {
        this.error[fieldName].leastOneLower = message
      }
      return validations
    },
    leastOneUpper: function (
      message = 'Campo não possui no mínimo um caractere em maiúsculo'
    ) {
      if (!new RegExp('(?=.*[A-Z])').test(fieldValue)) {
        this.error[fieldName].leastOneUpper = message
      }
      return validations
    },
    leastOneSpecial: function (
      message = 'Campo não possui no mínimo um caractere especial'
    ) {
      if (!new RegExp('(?=.*[-+_!@#$%^&*., ?])').test(fieldValue)) {
        this.error[fieldName].leastOneSpecial = message
      }
      return validations
    }
  }
  return validations
}

export const passwordValidate = (password: string) => {
  return validate(password, 'password')
    .required()
    .min(8)
    .max(30)
    .leastOneLower()
    .leastOneUpper()
    .leastOneSpecial().error.password
}

export type SignUpFieldErrors = {
  name: Errors
  email: Errors
  password: Errors
  confirmPassword: Errors
} | null

export const signUpValidate = (
  { name, email, password, confirmPassword }: SignUpFields,
  language: LanguageType
) => {
  const valiationName = validate(name, 'name')
    .required(language.components.FormSignOut.validation.name.required)
    .min(5, language.components.FormSignOut.validation.name.min)
    .max(100, language.components.FormSignOut.validation.name.max).error

  const valiationEmail = validate(email, 'email')
    .required(language.components.FormSignOut.validation.email.required)
    .min(3, language.components.FormSignOut.validation.email.min)
    .max(100, language.components.FormSignOut.validation.email.max)
    .email(language.components.FormSignOut.validation.email.email).error

  const valiationPassword = validate(password, 'password')
    .required(language.components.FormSignOut.validation.password.required)
    .min(8, language.components.FormSignOut.validation.password.min)
    .max(30, language.components.FormSignOut.validation.password.max)
    .leastOneLower(
      language.components.FormSignOut.validation.password.leastOneLower
    )
    .leastOneUpper(
      language.components.FormSignOut.validation.password.leastOneUpper
    )
    .leastOneSpecial(
      language.components.FormSignOut.validation.password.leastOneSpecial
    ).error

  const valiationConfirmPassword = validate(confirmPassword, 'confirmPassword')
    .required(
      language.components.FormSignOut.validation.confirmPassword.required
    )
    .equal(
      password,
      language.components.FormSignOut.validation.confirmPassword.equal
    ).error

  return {
    ...(Object.keys(valiationName.name).length != 0 && valiationName),
    ...(Object.keys(valiationEmail.email).length != 0 && valiationEmail),
    ...(Object.keys(valiationPassword.password).length != 0 &&
      valiationPassword),
    ...(Object.keys(valiationConfirmPassword.confirmPassword).length != 0 &&
      valiationConfirmPassword)
  } as SignUpFieldErrors
}

export type ForgotPasswordFieldErrors = {
  email: Errors
} | null

export const forgotPasswordValidate = (
  { email }: ForgotPasswordFields,
  language: LanguageType
) => {
  const valiationEmail = validate(email, 'email')
    .required(language.components.FormForgotPassword.validation.email.required)
    .min(3, language.components.FormForgotPassword.validation.email.min)
    .max(100, language.components.FormForgotPassword.validation.email.max)
    .email(language.components.FormForgotPassword.validation.email.email).error

  return {
    ...(Object.keys(valiationEmail.email).length != 0 && valiationEmail)
  } as ForgotPasswordFieldErrors
}
