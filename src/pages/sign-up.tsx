import FormSignUp from 'components/FormSignUp'
import Auth from 'templates/Auth'
import Base from 'templates/Base'

export default function SignUp() {
  return (
    <Base>
      <Auth option="sign-up">
        <FormSignUp />
      </Auth>
    </Base>
  )
}
