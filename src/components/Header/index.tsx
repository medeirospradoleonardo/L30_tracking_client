import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineGlobeAlt,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlinePhone,
  HiOutlineMagnifyingGlass,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineInformationCircle,
  HiOutlineBars3CenterLeft
} from 'react-icons/hi2'
import Tooltip from 'components/Tooltip'
import { useState } from 'react'
import Modal from 'components/Modal'
import LanguageSwitch from 'components/LanguageSwitch'
import AlertDropdown from 'components/AlertDropdown'
import Button from 'components/Button'
import UserDropdown from 'components/UserDropDown'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import { useModal } from 'hooks/use-modal'

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const [isLogged, setIsLogged] = useState(true)
  // const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false)
  const { language } = useLanguage()
  const { setModal, openModal, closeModal } = useModal()

  return (
    <S.Container>
      {/* <Modal
        isOpen={isOpenModalLanguage}
        title={language.components.Header.modalLanguage}
        closeModal={() => setIsOpenModalLanguage(false)}
      >
        <LanguageSwitch closeModal={() => setIsOpenModalLanguage(false)} />
      </Modal> */}
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch $lessThan="medium">
        <S.Icon>
          <HiOutlineBars3CenterLeft size={25} />
        </S.Icon>
      </MediaMatch>
      <MediaMatch $greaterThan="medium">
        <S.Left>
          {/* <S.LabelContainer>
          <HiOutlineUsers
            color="#F26122"
            size={25}
            style={{ marginRight: '10px' }}
          />
          <S.Label>Sobre Nós</S.Label>
        </S.LabelContainer>

        <S.LabelContainer>
          <HiOutlineInformationCircle
            color="#F26122"
            size={25}
            style={{ marginRight: '10px' }}
          />
          <S.Label>Dúvidas Frequentes</S.Label>
        </S.LabelContainer> */}
          <S.LabelContainer>
            <HiOutlinePhone
              color="#F26122"
              size={25}
              style={{ marginRight: '10px' }}
            />
            <S.Label>{language.components.Header.labelContact}</S.Label>
          </S.LabelContainer>
          <S.LabelContainer>
            <HiOutlineMagnifyingGlass
              color="#F26122"
              size={25}
              style={{ marginRight: '10px' }}
            />
            <S.Label>{language.components.Header.labelTracking}</S.Label>
          </S.LabelContainer>
        </S.Left>
      </MediaMatch>
      <S.Right>
        {isLogged ? (
          <>
            <MediaMatch $greaterThan="medium">
              <UserDropdown firstName="Leonardo" lastName="Medeiros Prado" />
            </MediaMatch>
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
          <S.Icon
            onClick={() =>
              setModal({
                isOpen: true,
                title: language.components.Header.modalLanguage,
                children: <LanguageSwitch closeModal={closeModal} />
              })
            }
          >
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
