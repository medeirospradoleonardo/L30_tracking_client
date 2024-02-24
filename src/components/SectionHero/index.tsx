import React from 'react'

import Button from 'components/Button'
import * as S from './styles'
import { Container } from 'components/Container'

const SectionHero = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.TextBlock>
          <S.Title>Rastreamento</S.Title>
          <S.Description>
            Rastreie todas suas encomendas de uma forma simples!
          </S.Description>
          <S.ButtonWrapper>
            <Button size="large">Rastrear</Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src="/img/track-illustration.svg"
          alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
