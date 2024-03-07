import FormSignUp from 'components/FormSignUp'
import Auth from 'templates/Auth'
import Base from 'templates/Base'

export default function SignUp() {
  return (
    <Base>
      <Auth signIn={false}>
        <FormSignUp />
      </Auth>
    </Base>
  )
}
