import { SignUpFields } from 'components/FormSignUp'

type Errors = {
  required: string
  min: string
  max: string
  equal: string
  leastOneLower: string
  leastOneUpper: string
  leastOneSpecial: string
}

export type SignUpFieldErrors = {
  name: Errors
  email: Errors
  password: Errors
  confirmPassword: Errors
} | null

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
      message = 'Campo nao possui o minimo de caracteres'
    ) {
      if (fieldValue?.length < min) {
        this.error[fieldName].min = message
      }
      return validations
    },
    max: function (
      max: number,
      message = 'Campo nao possui o maximo de caracteres'
    ) {
      if (fieldValue?.length > max) {
        this.error[fieldName].max = message
      }
      return validations
    },
    equal: function (
      fieldCompareValue: string,
      fieldCompareName: string,
      message = `Campo diferente do campo ${fieldCompareName}`
    ) {
      if (fieldValue !== fieldCompareValue) {
        this.error[fieldName].equal = message
      }
      return validations
    },
    leastOneLower: function (
      message = 'Campo nao possui no minimo um caractere em minusculo'
    ) {
      if (!new RegExp('(?=.*[a-z])').test(fieldValue)) {
        this.error[fieldName].leastOneLower = message
      }
      return validations
    },
    leastOneUpper: function (
      message = 'Campo nao possui no minimo um caractere em maiusculo'
    ) {
      if (!new RegExp('(?=.*[A-Z])').test(fieldValue)) {
        this.error[fieldName].leastOneUpper = message
      }
      return validations
    },
    leastOneSpecial: function (
      message = 'Campo nao possui no minimo um caractere especial'
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

export const signUpValidate = ({
  name,
  email,
  password,
  confirmPassword
}: SignUpFields) => {
  const valiationName = validate(name, 'name').required().min(5).error
  const valiationEmail = validate(email, 'email').required().min(3).error
  const valiationPassword = validate(password, 'password')
    .required()
    .min(8)
    .max(30)
    .leastOneLower().error
  const valiationConfirmPassword = validate(confirmPassword, 'confirmPassword')
    .required()
    .equal(password, 'Senha').error

  return {
    ...(Object.keys(valiationName.name).length != 0 && valiationName),
    ...(Object.keys(valiationEmail.email).length != 0 && valiationEmail),
    ...(Object.keys(valiationPassword.password).length != 0 &&
      valiationPassword),
    ...(Object.keys(valiationConfirmPassword.confirmPassword).length != 0 &&
      valiationConfirmPassword)
  } as SignUpFieldErrors
}
