import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import { HiOutlineSun, HiOutlineMoon, HiOutlineGlobeAlt } from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'
import { useState } from 'react'
import Modal from 'components/Modal'
import LanguageSwitch from 'components/LanguageSwitch'
import AlertDropdown from 'components/AlertDropdown'
import Button from 'components/Button'
import UserDropdown from 'components/UserDropDown'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const [isLogged, setIsLogged] = useState(true)
  const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false)
  const { language } = useLanguage()

  return (
    <S.Container>
      <Modal
        isOpen={isOpenModalLanguage}
        title={language.components.Header.modalLanguage}
        closeModal={() => setIsOpenModalLanguage(false)}
      >
        <LanguageSwitch closeModal={() => setIsOpenModalLanguage(false)} />
      </Modal>
      <S.Left>Logo</S.Left>
      <S.Right>
        {isLogged ? (
          <>
            <UserDropdown firstName="Leonardo" lastName="Medeiros Prado" />
            <AlertDropdown />
          </>
        ) : (
          <>
            <Button minimal size="small" style={{ marginRight: '2px' }}>
              {language.components.Header.buttonSignIn}
            </Button>
            <Button size="small" style={{ marginRight: '5px' }}>
              {language.components.Header.buttonSignOut}
            </Button>
          </>
        )}

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
  )
}

export default Header
