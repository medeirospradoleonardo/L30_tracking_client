import { useTheme } from 'hooks/use-theme'
import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()

  return (
    <S.Container>
      <S.Left>Logo</S.Left>
      <S.Right>
        {isDarkMode ? (
          <Tooltip content="Modo Escuro" position="bottom" limit='right'>
            <S.Icon onClick={() => saveTheme('Light', true)}>
              <HiOutlineSun size={25} />
            </S.Icon>
          </Tooltip>
        ) : (
          <Tooltip content="Modo Claro" position="bottom" limit='right'>
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
