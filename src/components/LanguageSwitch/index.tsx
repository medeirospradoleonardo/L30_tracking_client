import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

type LanguageSwitchProps = {
  closeModal: () => void
}

const LanguageSwitch = ({ closeModal }: LanguageSwitchProps) => {
  const { getLanguages, getLanguageValue, saveLanguage } = useLanguage()
  return (
    <S.Container>
      {getLanguages.map((language, index) => (
        <>
          <S.LanguageContainer
            key={index}
            onClick={() => {
              saveLanguage(language.value)
              closeModal()
            }}
          >
            <S.LanguageLabel selected={getLanguageValue == language.value}>
              {language.label}
            </S.LanguageLabel>
          </S.LanguageContainer>
        </>
      ))}
    </S.Container>
  )
}

export default LanguageSwitch
