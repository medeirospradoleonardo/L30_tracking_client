import React from 'react'

import Heading from 'components/Heading'
import { Container } from 'components/Container'

import * as S from './styles'
import content from './content'

const SectionAboutProject = () => (
  <S.Wrapper>
    <Container>
      <S.Box>
        <Heading lineBottom>Conceitos que você irá aprender</Heading>
        <S.List>
          {content.map((item) => (
            <S.Item key={item}>{item}</S.Item>
          ))}
        </S.List>
      </S.Box>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
