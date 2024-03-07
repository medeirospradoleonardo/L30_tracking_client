import Dropdown from 'components/Dropdown'
import MediaMatch from 'components/MediaMatch'
import UserIcon from 'components/UserIcon'
import UserList from 'components/UserList'
import { useLanguage } from 'hooks/use-language'
import {
  HiOutlineArrowRightOnRectangle,
  HiOutlineBars3CenterLeft,
  HiOutlineChevronRight,
  HiOutlineInboxStack,
  HiOutlineMagnifyingGlass,
  HiOutlinePhone,
  HiOutlinePlus,
  HiOutlineUserCircle,
  HiOutlineWrench
} from 'react-icons/hi2'

import * as S from './styles'
import Button from 'components/Button'
import Modal from 'components/Modal'
import { useState } from 'react'

export type UserDropdownProps = {
  firstName: string
  lastName: string
  isLogged?: boolean
}

const UserDropdown = ({ firstName, lastName, isLogged }: UserDropdownProps) => {
  const { language } = useLanguage()
  const [isOpenModalMenuMobile, setIsOpenModalMenuMobile] = useState(false)

  return (
    <>
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
                  <S.MenuMobileHeaderTitle>
                    Leonardo Medeiros Prado
                  </S.MenuMobileHeaderTitle>
                  <S.MenuMobileHeaderDescription>
                    <span>{language.components.UserDropDown.myProfile}</span>
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
              <S.Label>{language.components.UserDropDown.linkContact}</S.Label>
            </S.LabelContainer>

            <S.LabelContainer>
              <HiOutlineMagnifyingGlass
                color="#F26122"
                size={25}
                style={{ marginRight: '10px' }}
              />
              <S.Label>{language.components.UserDropDown.linkTracking}</S.Label>
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
                  <S.Label>
                    {language.components.UserDropDown.myProfile}
                  </S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlineInboxStack
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>{language.components.UserDropDown.myOrders}</S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlinePlus
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>{language.components.UserDropDown.addOrder}</S.Label>
                </S.LabelContainer>
                <S.LabelContainer>
                  <HiOutlineWrench
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>{language.components.UserDropDown.config}</S.Label>
                </S.LabelContainer>
                <S.Divider />
                <S.LabelContainer>
                  <HiOutlineArrowRightOnRectangle
                    color="#F26122"
                    size={25}
                    style={{ marginRight: '10px' }}
                  />
                  <S.Label>{language.components.UserDropDown.signOut}</S.Label>
                </S.LabelContainer>
              </>
            ) : (
              <S.Center>
                <Button minimal size="medium" style={{ marginRight: '2px' }}>
                  {language.components.UserDropDown.buttonSignIn}
                </Button>
                <Button
                  size="medium"
                  style={{ marginRight: '5px' }}
                  href="/sign-up"
                  as="a"
                >
                  {language.components.UserDropDown.buttonSignOut}
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
        <S.Container>
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
              <S.Label>{language.components.UserDropDown.linkContact}</S.Label>
            </S.LabelContainer>
            <S.LabelContainer>
              <HiOutlineMagnifyingGlass
                color="#F26122"
                size={25}
                style={{ marginRight: '10px' }}
              />
              <S.Label>{language.components.UserDropDown.linkTracking}</S.Label>
            </S.LabelContainer>
          </S.Left>
          <S.Right>
            {isLogged ? (
              <Dropdown title={<UserIcon firstName={firstName} />}>
                <UserList firstName={firstName} lastName={lastName} />
              </Dropdown>
            ) : (
              <>
                <Button minimal size="small" style={{ marginRight: '2px' }}>
                  {language.components.UserDropDown.buttonSignIn}
                </Button>
                <Button
                  size="small"
                  style={{ marginRight: '5px' }}
                  href="/sign-up"
                  as="a"
                >
                  {language.components.UserDropDown.buttonSignOut}
                </Button>
              </>
            )}
          </S.Right>
        </S.Container>
      </MediaMatch>
    </>
  )
}

export default UserDropdown
