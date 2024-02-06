import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon, HiOutlineGlobeAlt } from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'
import { useState } from 'react'
import Modal from 'components/Modal'
import LanguageSwitch from 'components/LanguageSwitch'
import AlertDropdown from 'components/AlertDropdown'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false)
  const { language } = useLanguage()

  return (
    <>
      <Modal
        isOpen={isOpenModalLanguage}
        title={language.components.Header.modalLanguage}
        closeModal={() => setIsOpenModalLanguage(false)}
      >
        <LanguageSwitch closeModal={() => setIsOpenModalLanguage(false)} />
      </Modal>
      <S.Container>
        <S.Left>Logo</S.Left>
        <S.Right>
          <AlertDropdown />
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
                <HiOutlineMoon size={25} />
              </S.Icon>
            </Tooltip>
          )}
        </S.Right>
      </S.Container>
    </>
  )
}

export default Header
