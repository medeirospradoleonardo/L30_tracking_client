import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon, HiOutlineGlobeAlt } from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'
import { useState } from 'react'
import Modal from 'components/Modal'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false)
  const { language } = useLanguage()

  return (
    <>
      <Modal
        isOpen={isOpenModalLanguage}
        onRequestClose={() => setIsOpenModalLanguage(false)}
      >
        <h1>oi</h1>
      </Modal>
      <S.Container onKeyDown={(e) => console.log(e)}>
        <S.Left>Logo</S.Left>
        <S.Right>
          <Tooltip
            content={language.components.Header.tooltipLanguageSwitch}
            position="bottom"
          >
            <S.Icon onClick={() => setIsOpenModalLanguage(true)}>
              <HiOutlineGlobeAlt size={25} />
            </S.Icon>
          </Tooltip>
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
    </>
  )
}

export default Header
