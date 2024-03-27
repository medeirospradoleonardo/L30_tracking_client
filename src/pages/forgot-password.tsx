import FormForgotPassword from 'components/FormForgotPassword'
import Auth from 'templates/Auth'
import Base from 'templates/Base'

export default function ForgotPassword() {
  return (
    <Base>
      <Auth option="forgot-password">
        <FormForgotPassword />
      </Auth>
    </Base>
  )
}
