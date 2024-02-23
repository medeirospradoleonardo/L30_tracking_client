import Footer from 'components/Footer'
import * as S from './styles'
import Header from 'components/Header'
import { Container } from 'components/Container'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Header />
      </S.Header>
      <S.Content>
        <S.Children>{children}</S.Children>
        <S.SectionFooter>
          <Container>
            <Footer />
          </Container>
        </S.SectionFooter>
      </S.Content>
    </S.Wrapper>
  )
}

export default Base
