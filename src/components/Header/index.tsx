import { useTheme } from 'hooks/use-theme'
import { useLanguage } from 'hooks/use-language'
import * as S from './styles'

import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineGlobeAlt,
  HiOutlinePhone,
  HiOutlineMagnifyingGlass,
  HiOutlineBars3CenterLeft,
  HiOutlineUserCircle,
  HiOutlineInboxStack,
  HiOutlinePlus,
  HiOutlineWrench,
  HiOutlineArrowRightOnRectangle,
  HiOutlineChevronRight
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

const Header = () => {
  const { saveTheme, isDarkMode } = useTheme()
  const [isLogged] = useState(true)
  const [isOpenModalLanguage, setIsOpenModalLanguage] = useState(false)
  const [isOpenModalMenuMobile, setIsOpenModalMenuMobile] = useState(false)
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
      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>
      <MediaMatch $lessThan="medium">
        <Modal
          isOpen={isOpenModalMenuMobile}
          closeModal={() => setIsOpenModalMenuMobile(false)}
          // full
        >
          <S.MenuMobile>
            {isLogged ? (
              <>
                <S.MenuMobileHeader>
                  {/* <HiOutlineUserCircle size={24} /> */}
                  <S.MenuMobileHeaderTitle>
                    Leonardo Medeiros Prado
                  </S.MenuMobileHeaderTitle>
                  <S.MenuMobileHeaderDescription>
                    <span>{language.components.UserList.myProfile}</span>
                    <HiOutlineChevronRight />
                  </S.MenuMobileHeaderDescription>
                </S.MenuMobileHeader>
              </>
            ) : null}
            <S.Divider />
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
            <S.Divider />
            {isLogged ? (
              <>
                <S.LabelContainer>
                  <HiOutlineUserCircle
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>Meu Perfil</S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlineInboxStack
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>Minhas encomendas</S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlinePlus
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>Adicionar encomenda</S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlineWrench
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>Configurações</S.Label>
                </S.LabelContainer>
                <S.Divider />
                <S.LabelContainer>
                  <HiOutlineArrowRightOnRectangle
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>Sair</S.Label>
                </S.LabelContainer>
              </>
            ) : (
              <S.Center>
                <Button minimal size="medium" style={{ marginRight: '2px' }}>
                  {language.components.Header.buttonSignIn}
                </Button>
                <Button size="medium" style={{ marginRight: '5px' }}>
                  {language.components.Header.buttonSignOut}
                </Button>
              </S.Center>
            )}
          </S.MenuMobile>
        </Modal>
        <S.Icon onClick={() => setIsOpenModalMenuMobile(true)}>
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
          <MediaMatch $greaterThan="medium">
            <Button minimal size="small" style={{ marginRight: '2px' }}>
              {language.components.Header.buttonSignIn}
            </Button>
            <Button size="small" style={{ marginRight: '5px' }}>
              {language.components.Header.buttonSignOut}
            </Button>
          </MediaMatch>
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
