import Footer from 'components/Footer'
import * as S from './styles'
import Header from 'components/Header'
import { Container } from 'components/Container'
import Section from 'components/Section'

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
        <Section>
          <Container>
            <Footer />
          </Container>
        </Section>
      </S.Content>
    </S.Wrapper>
  )
}

export default Base
