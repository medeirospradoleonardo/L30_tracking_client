import Heading from 'components/Heading'

import * as S from './styles'
import { useLanguage } from 'hooks/use-language'

type AuthProps = {
  option: 'sign-in' | 'sign-up' | 'forgot-password' | 'reset-password'
  children: React.ReactNode
}

const Auth = ({ option, children }: AuthProps) => {
  const { language } = useLanguage()

  const getTemplate = (
    option: 'sign-in' | 'sign-up' | 'forgot-password' | 'reset-password'
  ) => {
    switch (option) {
      case 'sign-in':
        return 'HeaderSignIn'
      case 'sign-up':
        return 'HeaderSignUp'
      case 'forgot-password':
        return 'HeaderForgotPassword'
      case 'reset-password':
        return 'HeaderResetPassword'
      default:
        return 'HeaderSignIn'
        break
    }
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentWrapper>
          <Heading lineColor="secondary" lineLeft>
            {language.templates.Auth[getTemplate(option)]}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
