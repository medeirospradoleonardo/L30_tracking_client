import { useTheme } from 'hooks/use-theme'
import * as S from './styles'
import { useLanguage } from 'hooks/use-language'

export type LogoProps = {
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({ size = 'normal', hideOnMobile = false }: LogoProps) => {
  const { isDarkMode } = useTheme()
  const { language } = useLanguage()

  return (
    <S.Wrapper $size={size} $hideOnMobile={hideOnMobile}>
      <S.Icon>
        <S.Vertical />
        <S.Horizontal>
          <S.Triangule />
          <S.Retangule />
        </S.Horizontal>
      </S.Icon>
      <S.Number>30</S.Number>
      <S.Title $isDarkMode={isDarkMode}>
        {language.components.Logo.title}
      </S.Title>
    </S.Wrapper>
  )
}

export default Logo
