import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const { language } = useLanguage()

  return (
    <S.Container>
      <S.Left>Logo</S.Left>
      <S.Right>
        {isDarkMode ? (
          <Tooltip
            content={language.components.Header.tooltipLight}
            position="bottom"
            limit="right"
          >
            <S.Icon onClick={() => saveTheme('Light', true)}>
              <HiOutlineSun size={25} />
            </S.Icon>
          </Tooltip>
        ) : (
          <Tooltip
            content={language.components.Header.tooltipDark}
            position="bottom"
            limit="right"
          >
            <S.Icon onClick={() => saveTheme('Dark', true)}>
              <HiOutlineMoon size={23} />
            </S.Icon>
          </Tooltip>
        )}
      </S.Right>
    </S.Container>
  )
}

export default Header
