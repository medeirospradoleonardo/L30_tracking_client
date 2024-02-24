import { Container } from 'components/Container'
import * as S from './styles'
import Heading from 'components/Heading'
import Base from 'templates/Base'

const Faq = () => {
  const faq = [
    {
      question: 'O que preciso saber para o curso?',
      answer: `Um conhecimento básico de JavaScript/React é necessário para maior entendimento do curso, 
        mas todo o conteúdo será explicado em detalhes e todas as perguntas/dúvidas serão respondidas.`
    },
    {
      question: 'Quanto tempo tenho para fazer o curso?',
      answer: `O curso é vitalício, faça quantas vezes quiser e quando quiser, nada de bloqueios ou pressa.`
    }
  ]

  return (
    <Base>
      <S.Wrapper>
        <S.Content>
          <Container>
            <Heading lineLeft>Dúvidas Frequentes</Heading>

            <S.Questions>
              {faq.map(({ question, answer }, index) => (
                <S.Question key={index}>
                  <Heading lineBottom marginBottom>
                    {question}
                  </Heading>
                  <div dangerouslySetInnerHTML={{ __html: answer }} />
                </S.Question>
              ))}
            </S.Questions>

            <S.ExtraQuestion>
              <Heading lineBottom marginBottom>
                Eu tenho outra dúvida!
              </Heading>
              <p>
                Sem problemas! Você pode acessar qualquer uma das{' '}
                <a
                  href="https://willianjusten.com.br/about"
                  target="_blank"
                  rel="noreferrer"
                >
                  minhas redes sociais
                </a>{' '}
                ou entrar no{' '}
                <a
                  href="http://bit.ly/slack-will"
                  target="_blank"
                  rel="noreferrer"
                >
                  slack do nosso curso.
                </a>
              </p>
            </S.ExtraQuestion>
          </Container>
        </S.Content>
      </S.Wrapper>
    </Base>
  )
}

export default Faq
