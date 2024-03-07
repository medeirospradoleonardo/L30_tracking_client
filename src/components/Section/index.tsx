import * as S from './styles'

type SectionProps = {
  children: React.ReactNode
  color?: 'primary' | 'secondary'
}

const Section = ({ children, color = 'primary' }: SectionProps) => {
  return (
    <S.Wrapper $color={color}>
      <S.Content $color={color}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Section
