import * as S from './styles'

type SectionProps = {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default Section
