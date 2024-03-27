import FormSignIn from 'components/FormSignIn'
import Auth from 'templates/Auth'
import Base from 'templates/Base'

export default function SignIn() {
  return (
    <Base>
      <Auth option="sign-in">
        <FormSignIn />
      </Auth>
    </Base>
  )
}
