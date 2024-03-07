import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import Image from 'next/image'
import { useLanguage } from 'hooks/use-language'

type AuthProps = {
  signIn: boolean
  children: React.ReactNode
}

const Auth = ({ signIn, children }: AuthProps) => {
  const { language } = useLanguage()

  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentWrapper>
          {/* <a href="/" style={{ textDecoration: 'none' }}>
            <Logo size="large" />
          </a> */}

          <Heading lineColor="secondary" lineLeft>
            {signIn
              ? language.templates.Auth.HeaderSignIn
              : language.templates.Auth.HeaderSignOut}
          </Heading>

          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
