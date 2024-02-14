import * as S from './styles'
import Header from 'components/Header'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <Header />
      </S.Header>
      <S.Content>{children}</S.Content>
      {/* <S.SectionFooter></S.SectionFooter> */}
    </S.Wrapper>
  )
}

export default Base
